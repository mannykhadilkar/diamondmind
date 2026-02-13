import type { EvaluationResult, CategoryType } from '../types';
import { CATEGORIES } from '../types';
import { ProgressBar } from './ProgressBar';

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

  return (
    <div className={`bg-gray-800 rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 text-center">
        <span className="text-4xl mb-2 block">{categoryInfo?.icon}</span>
        <h2 className="text-xl font-bold text-white mb-1">
          {categoryInfo?.name}
        </h2>
        <p className="text-gray-300 text-sm">Drill Complete!</p>
      </div>

      {/* Score Circle */}
      <div className="p-6 text-center border-b border-gray-700">
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-gray-700"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(percentage / 100) * 352} 352`}
              className={
                percentage >= 80
                  ? 'text-green-500'
                  : percentage >= 50
                    ? 'text-yellow-500'
                    : 'text-red-500'
              }
              strokeLinecap="round"
            />
          </svg>
          {/* Percentage text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">{percentage}%</span>
          </div>
        </div>

        <p className="text-lg text-gray-300">
          {correctCount} of {totalCount} correct
        </p>
        <div className="mt-2 text-2xl">
          {performance.emoji}
        </div>
        <p className="text-gray-400 mt-1">{performance.text}</p>
      </div>

      {/* Detailed Breakdown */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Breakdown
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-gray-300">
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              Correct decisions
            </span>
            <span className="font-semibold text-white">{breakdown.correct + breakdown.correctButError}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2 text-gray-300">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              Incorrect decisions
            </span>
            <span className="font-semibold text-white">{breakdown.incorrect + breakdown.incorrectButError}</span>
          </div>
          {errorsCount > 0 && (
            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <span className="flex items-center gap-2 text-gray-400">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                Fielder errors occurred
              </span>
              <span className="text-yellow-400">{errorsCount}</span>
            </div>
          )}
        </div>
      </div>

      {/* Mastery Progress */}
      <div className="p-6 border-b border-gray-700">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Session Mastery
        </h3>
        <ProgressBar percentage={percentage} size="lg" showLabel />
      </div>

      {/* Action Buttons */}
      <div className="p-6 flex gap-3">
        <button
          onClick={onReturnToMenu}
          className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white
                     font-semibold rounded-lg transition-colors"
        >
          Back to Menu
        </button>
        <button
          onClick={onPlayAgain}
          className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white
                     font-semibold rounded-lg transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default MasteryStats;
