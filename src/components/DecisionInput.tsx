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
      w-full p-4 rounded-lg text-left transition-all duration-200
      border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
    `;

    if (showResult && correctOptionId) {
      // Showing results
      if (option.id === correctOptionId) {
        return `${baseClasses} bg-green-900 border-green-500 text-green-100`;
      }
      if (option.id === selectedOptionId && option.id !== correctOptionId) {
        return `${baseClasses} bg-red-900 border-red-500 text-red-100`;
      }
      return `${baseClasses} bg-gray-800 border-gray-700 text-gray-400 opacity-60`;
    }

    if (selectedOptionId === option.id) {
      return `${baseClasses} bg-blue-900 border-blue-500 text-blue-100`;
    }

    if (disabled) {
      return `${baseClasses} bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed`;
    }

    return `${baseClasses} bg-gray-800 border-gray-700 text-white
            hover:bg-gray-750 hover:border-gray-600 cursor-pointer
            focus:ring-blue-500`;
  };

  const getIcon = (option: Option) => {
    if (!showResult || !correctOptionId) return null;

    if (option.id === correctOptionId) {
      return (
        <span className="text-green-400 text-xl">✓</span>
      );
    }
    if (option.id === selectedOptionId && option.id !== correctOptionId) {
      return (
        <span className="text-red-400 text-xl">✗</span>
      );
    }
    return null;
  };

  // Map option index to letter
  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index); // A, B, C, D...
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option, index) => (
        <button
          key={option.id}
          onClick={() => !disabled && onSelect(option.id)}
          disabled={disabled}
          className={getButtonClasses(option)}
        >
          <div className="flex items-center gap-3">
            {/* Option letter */}
            <span
              className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${showResult && option.id === correctOptionId
                  ? 'bg-green-700 text-green-100'
                  : showResult && option.id === selectedOptionId
                    ? 'bg-red-700 text-red-100'
                    : 'bg-gray-700 text-gray-300'
                }
              `}
            >
              {getOptionLetter(index)}
            </span>

            {/* Option text */}
            <span className="flex-1 font-medium">{option.text}</span>

            {/* Result icon */}
            {getIcon(option)}
          </div>

          {/* Target base indicator if present */}
          {option.targetBase && (
            <div className="mt-2 ml-11 text-xs text-gray-400">
              → Throw to {option.targetBase}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

export default DecisionInput;
