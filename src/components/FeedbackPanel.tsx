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
          bgClass: 'bg-green-900 border-green-700',
          iconBgClass: 'bg-green-700',
        };
      case 'incorrect':
        return {
          icon: '✗',
          title: 'Not Quite',
          subtitle: "Let's review the correct play.",
          bgClass: 'bg-red-900 border-red-700',
          iconBgClass: 'bg-red-700',
        };
      case 'correct_but_error':
        return {
          icon: '⚠',
          title: 'Right Decision!',
          subtitle: 'But a fielder error occurred.',
          bgClass: 'bg-yellow-900 border-yellow-700',
          iconBgClass: 'bg-yellow-700',
        };
      case 'incorrect_but_error':
        return {
          icon: '✗',
          title: 'Not the Best Choice',
          subtitle: 'Plus there was a fielder error.',
          bgClass: 'bg-red-900 border-red-700',
          iconBgClass: 'bg-red-700',
        };
    }
  };

  const header = getHeaderContent();

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      {/* Result Header */}
      <div className={`${header.bgClass} border-b p-4`}>
        <div className="flex items-center gap-3">
          <span
            className={`${header.iconBgClass} w-10 h-10 rounded-full flex items-center justify-center text-xl`}
          >
            {header.icon}
          </span>
          <div>
            <h3 className="text-lg font-bold text-white">{header.title}</h3>
            <p className="text-sm text-gray-300">{header.subtitle}</p>
          </div>
        </div>

        {/* Error message if applicable */}
        {result.errorOccurred && result.message && (
          <div className="mt-3 p-2 bg-black/20 rounded text-sm text-yellow-200">
            ⚡ {result.message}
          </div>
        )}
      </div>

      {/* Explanation */}
      <div className="bg-gray-800 p-4">
        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Explanation
        </h4>
        <p className="text-white leading-relaxed">{explanation}</p>
      </div>

      {/* Action Buttons */}
      <div className="bg-gray-800 border-t border-gray-700 p-4 flex gap-3">
        <button
          onClick={onReturnToMenu}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Exit Drill
        </button>
        <button
          onClick={onNext}
          className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white
                     font-semibold rounded-lg transition-colors"
        >
          {isLastScenario ? 'See Results' : 'Next Scenario →'}
        </button>
      </div>
    </div>
  );
}

export default FeedbackPanel;
