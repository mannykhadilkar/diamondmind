import type { EvaluationResult } from '../types';

interface FeedbackPanelProps {
  result: EvaluationResult;
  explanation: string;
  onNext: () => void;
  onReturnToMenu: () => void;
  isLastScenario: boolean;
  className?: string;
}

export function FeedbackPanel({
  result,
  explanation,
  onNext,
  onReturnToMenu,
  isLastScenario,
  className = '',
}: FeedbackPanelProps) {
  const getHeaderContent = () => {
    switch (result.outcome) {
      case 'correct':
        return {
          icon: '✓',
          title: 'Correct!',
          subtitle: 'Great decision.',
          gradientClass: 'bg-gradient-correct',
          iconBgClass: 'bg-white/20',
          glowClass: 'shadow-glow-green',
        };
      case 'incorrect':
        return {
          icon: '✗',
          title: 'Not Quite',
          subtitle: "Let's review the correct play.",
          gradientClass: 'bg-gradient-incorrect',
          iconBgClass: 'bg-white/20',
          glowClass: 'shadow-glow-red',
        };
      case 'correct_but_error':
        return {
          icon: '⚠',
          title: 'Right Decision!',
          subtitle: 'But a fielder error occurred.',
          gradientClass: 'bg-gradient-gold',
          iconBgClass: 'bg-white/20',
          glowClass: 'shadow-glow-gold',
        };
      case 'incorrect_but_error':
        return {
          icon: '✗',
          title: 'Not the Best Choice',
          subtitle: 'Plus there was a fielder error.',
          gradientClass: 'bg-gradient-incorrect',
          iconBgClass: 'bg-white/20',
          glowClass: 'shadow-glow-red',
        };
    }
  };

  const header = getHeaderContent();

  return (
    <div className={`rounded-xl overflow-hidden animate-slide-up ${header.glowClass} ${className}`}>
      {/* Result Header */}
      <div className={`${header.gradientClass} p-5`}>
        <div className="flex items-center gap-4">
          <span
            className={`${header.iconBgClass} w-14 h-14 rounded-full flex items-center justify-center text-3xl text-white`}
          >
            {header.icon}
          </span>
          <div>
            <h3 className="text-xl font-bold text-white">{header.title}</h3>
            <p className="text-sm text-white/80">{header.subtitle}</p>
          </div>
        </div>

        {/* Error message if applicable */}
        {result.errorOccurred && result.message && (
          <div className="mt-4 p-3 bg-black/20 rounded-lg text-sm text-white/90 flex items-center gap-2">
            <span className="text-lg">⚡</span>
            {result.message}
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="bg-gray-800 p-5 border-l-4 border-team-gold">
        <h4 className="text-sm font-bold text-team-gold uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-team-gold rounded-full"></span>
          Explanation
        </h4>
        <p className="text-white leading-relaxed text-base">{explanation}</p>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-800 border-t border-gray-700 p-5 flex gap-4">
        <button
          onClick={onReturnToMenu}
          className="px-5 py-3 text-gray-400 hover:text-white transition-all duration-200
                     hover:bg-gray-700 rounded-lg font-medium"
        >
          Exit Drill
        </button>
        <button
          onClick={onNext}
          className="flex-1 px-6 py-3 btn-gradient-action rounded-lg
                     font-bold text-base animate-glow-pulse"
        >
          {isLastScenario ? 'See Results' : 'Next Scenario →'}
        </button>
      </div>
    </div>
  );
}

export default FeedbackPanel;
