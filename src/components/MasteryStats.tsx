import type { EvaluationResult, CategoryType } from '../types';
import { CATEGORIES } from '../types';

interface MasteryStatsProps {
  category: CategoryType;
  results: EvaluationResult[];
  onReturnToMenu: () => void;
  onPlayAgain: () => void;
  className?: string;
}

export function MasteryStats({
  category,
  results,
  onReturnToMenu,
  onPlayAgain,
  className = '',
}: MasteryStatsProps) {
  const categoryInfo = CATEGORIES.find((c) => c.id === category);
  const isDefensive = categoryInfo?.type === 'defensive';

  const correctCount = results.filter((r) => r.isCorrectDecision).length;
  const totalCount = results.length;
  const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

  const errorsCount = results.filter((r) => r.errorOccurred).length;

  // Determine performance message
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { emoji: '🏆', text: 'Outstanding! You really know your stuff!' };
    if (percentage >= 80) return { emoji: '⭐', text: 'Great job! You have strong softball IQ.' };
    if (percentage >= 70) return { emoji: '👍', text: 'Good work! Keep practicing to improve.' };
    if (percentage >= 50) return { emoji: '📚', text: "You're learning. Review and try again!" };
    return { emoji: '💪', text: "Keep at it! Practice makes perfect." };
  };

  const performance = getPerformanceMessage();

  // Breakdown by result type
  const breakdown = {
    correct: results.filter((r) => r.outcome === 'correct').length,
    incorrect: results.filter((r) => r.outcome === 'incorrect').length,
    correctButError: results.filter((r) => r.outcome === 'correct_but_error').length,
    incorrectButError: results.filter((r) => r.outcome === 'incorrect_but_error').length,
  };

  // Circle progress calculation
  const circumference = 2 * Math.PI * 56;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  const getProgressColor = () => {
    if (percentage >= 80) return '#22c55e';
    if (percentage >= 50) return '#f59e0b';
    return '#dc2626';
  };

  const headerGradient = isDefensive
    ? 'from-defensive-primary via-defensive-light to-defensive-accent'
    : 'from-offensive-primary via-offensive-light to-offensive-accent';

  return (
    <div className={`bg-gray-800 rounded-2xl overflow-hidden shadow-2xl animate-slide-up ${className}`}>
      {/* Header */}
      <div className={`bg-gradient-to-r ${headerGradient} p-8 text-center relative overflow-hidden`}>
        {/* Stripe overlay */}
        <div className="absolute inset-0 stripe-overlay opacity-50"></div>

        <div className="relative z-10">
          <span className="text-5xl mb-3 block drop-shadow-lg">{categoryInfo?.icon}</span>
          <h2 className="text-2xl font-bold text-white mb-1">
            {categoryInfo?.name}
          </h2>
          <p className="text-white/80 text-sm font-medium">Drill Complete!</p>
        </div>
      </div>

      {/* Score Circle */}
      <div className="p-8 text-center border-b border-gray-700">
        <div className="relative w-36 h-36 mx-auto mb-5">
          {/* SVG Circle */}
          <svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
            {/* Background circle */}
            <circle
              cx="72"
              cy="72"
              r="56"
              stroke="#374151"
              strokeWidth="10"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="72"
              cy="72"
              r="56"
              stroke={getProgressColor()}
              strokeWidth="10"
              fill="none"
              strokeDasharray={strokeDasharray}
              strokeLinecap="round"
              className="transition-all duration-1000"
              style={{
                filter: `drop-shadow(0 0 8px ${getProgressColor()}50)`,
              }}
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{percentage}%</span>
          </div>
        </div>

        <p className="text-xl text-gray-300 font-medium">
          {correctCount} of {totalCount} correct
        </p>
        <div className="mt-4 text-4xl">{performance.emoji}</div>
        <p className="text-gray-400 mt-2 text-base">{performance.text}</p>
      </div>

      {/* Detailed Breakdown */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-sm font-bold text-team-gold uppercase tracking-wider mb-5 flex items-center gap-2">
          <span className="w-2 h-2 bg-team-gold rounded-full"></span>
          Breakdown
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
            <span className="flex items-center gap-3 text-gray-300">
              <span className="w-4 h-4 bg-gradient-to-r from-correct-dark to-correct rounded-full shadow-glow-green"></span>
              Correct decisions
            </span>
            <span className="font-bold text-white text-lg">{breakdown.correct + breakdown.correctButError}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-gray-700/30 rounded-lg">
            <span className="flex items-center gap-3 text-gray-300">
              <span className="w-4 h-4 bg-gradient-to-r from-incorrect-dark to-incorrect rounded-full shadow-glow-red"></span>
              Incorrect decisions
            </span>
            <span className="font-bold text-white text-lg">{breakdown.incorrect + breakdown.incorrectButError}</span>
          </div>
          {errorsCount > 0 && (
            <div className="flex justify-between items-center p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
              <span className="flex items-center gap-3 text-gray-300">
                <span className="w-4 h-4 bg-gradient-to-r from-team-gold to-yellow-400 rounded-full shadow-glow-gold"></span>
                Fielder errors occurred
              </span>
              <span className="font-bold text-team-gold text-lg">{errorsCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* Session Mastery Progress */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-sm font-bold text-team-gold uppercase tracking-wider mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-team-gold rounded-full"></span>
          Session Mastery
        </h3>
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${percentage}%`,
              background: `linear-gradient(90deg, ${getProgressColor()}cc, ${getProgressColor()})`,
              boxShadow: `0 0 12px ${getProgressColor()}60`,
            }}
          />
        </div>
        <div className="flex justify-between mt-2 text-sm">
          <span className="text-gray-400">0%</span>
          <span className="text-gray-400">100%</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 flex gap-4">
        <button
          onClick={onReturnToMenu}
          className="flex-1 px-5 py-4 bg-gray-700 hover:bg-gray-600 text-white
                     font-bold rounded-xl transition-all duration-200
                     hover:shadow-lg"
        >
          Back to Menu
        </button>
        <button
          onClick={onPlayAgain}
          className="flex-1 px-5 py-4 btn-gradient-action rounded-xl
                     font-bold animate-glow-pulse"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default MasteryStats;
