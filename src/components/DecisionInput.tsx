import type { Option } from '../types';

interface DecisionInputProps {
  options: Option[];
  onSelect: (optionId: string) => void;
  disabled?: boolean;
  selectedOptionId?: string;
  correctOptionId?: string;
  showResult?: boolean;
  className?: string;
}

export function DecisionInput({
  options,
  onSelect,
  disabled = false,
  selectedOptionId,
  correctOptionId,
  showResult = false,
  className = '',
}: DecisionInputProps) {
  const getButtonClasses = (option: Option) => {
    const baseClasses = `
      w-full p-4 rounded-xl text-left transition-all duration-300
      border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
    `;

    if (showResult && correctOptionId) {
      // Showing results
      if (option.id === correctOptionId) {
        return `${baseClasses}
          bg-gradient-to-r from-correct-dark to-correct
          border-correct text-white
          animate-bounce-correct shadow-glow-green`;
      }
      if (option.id === selectedOptionId && option.id !== correctOptionId) {
        return `${baseClasses}
          bg-gradient-to-r from-incorrect-dark to-incorrect
          border-incorrect text-white
          animate-shake-error shadow-glow-red`;
      }
      return `${baseClasses} bg-gray-800/50 border-gray-700 text-gray-500 opacity-50`;
    }

    if (selectedOptionId === option.id) {
      return `${baseClasses}
        bg-gradient-to-r from-team-blue to-defensive-accent
        border-defensive-accent text-white
        shadow-glow-blue transform scale-[1.02]`;
    }

    if (disabled) {
      return `${baseClasses} bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed`;
    }

    return `${baseClasses}
      bg-gray-800 border-gray-700 text-white
      hover:bg-gray-750 hover:border-gray-500
      hover:shadow-lg hover:transform hover:scale-[1.01]
      cursor-pointer focus:ring-team-gold`;
  };

  const getIcon = (option: Option) => {
    if (!showResult || !correctOptionId) return null;

    if (option.id === correctOptionId) {
      return (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-2xl">
          ✓
        </span>
      );
    }
    if (option.id === selectedOptionId && option.id !== correctOptionId) {
      return (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-2xl">
          ✗
        </span>
      );
    }
    return null;
  };

  // Map option index to letter
  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D...
  };

  const getBadgeClasses = (option: Option) => {
    const baseClasses = `
      w-10 h-10 rounded-full flex items-center justify-center
      text-base font-bold transition-all duration-300
    `;

    if (showResult && correctOptionId) {
      if (option.id === correctOptionId) {
        return `${baseClasses} bg-white/30 text-white`;
      }
      if (option.id === selectedOptionId) {
        return `${baseClasses} bg-white/30 text-white`;
      }
      return `${baseClasses} bg-gray-700 text-gray-500`;
    }

    if (selectedOptionId === option.id) {
      return `${baseClasses} bg-white/30 text-white`;
    }

    return `${baseClasses} bg-gray-700 text-gray-300 group-hover:bg-gray-600`;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => !disabled && onSelect(option.id)}
          disabled={disabled}
          className={`${getButtonClasses(option)} group animate-slide-up`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-center gap-4">
            {/* Option letter badge */}
            <span className={getBadgeClasses(option)}>
              {getOptionLetter(index)}
            </span>

            {/* Option text */}
            <span className="flex-1 font-semibold text-base">{option.text}</span>

            {/* Result icon */}
            {getIcon(option)}
          </div>

          {/* Target base indicator if present */}
          {option.targetBase && (
            <div className="mt-3 ml-14 text-sm text-gray-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-team-gold rounded-full"></span>
              Throw to {option.targetBase}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default DecisionInput;
