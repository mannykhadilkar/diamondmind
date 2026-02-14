import type { FieldPosition, CategoryType } from '../types';
import { POSITION_NAMES, POSITION_NUMBERS } from '../types';
import { getPositionsForCategory } from '../data/scenarios';

interface PositionSelectorProps {
  category: CategoryType;
  onSelectPosition: (position: FieldPosition | undefined) => void;
  onBack: () => void;
  className?: string;
}

// Group positions by area
const BATTERY_POSITIONS: FieldPosition[] = ['pitcher', 'catcher'];
const INFIELD_POSITIONS: FieldPosition[] = ['first-base', 'second-base', 'third-base', 'shortstop'];
const OUTFIELD_POSITIONS: FieldPosition[] = ['left-field', 'center-field', 'right-field'];

interface PositionButtonProps {
  position: FieldPosition;
  hasScenarios: boolean;
  onClick: () => void;
}

function PositionButton({ position, hasScenarios, onClick }: PositionButtonProps) {
  const number = POSITION_NUMBERS[position];
  const name = POSITION_NAMES[position];

  return (
    <button
      onClick={onClick}
      disabled={!hasScenarios}
      className={`
        flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200
        ${
          hasScenarios
            ? 'bg-gray-800 border-gray-600 hover:border-blue-500 hover:bg-gray-750 cursor-pointer'
            : 'bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed opacity-50'
        }
      `}
    >
      <span className={`text-lg font-bold ${hasScenarios ? 'text-blue-400' : 'text-gray-600'}`}>
        {number}
      </span>
      <span className={`text-xs mt-1 ${hasScenarios ? 'text-gray-300' : 'text-gray-600'}`}>
        {name}
      </span>
    </button>
  );
}

export function PositionSelector({
  category,
  onSelectPosition,
  onBack,
  className = '',
}: PositionSelectorProps) {
  const availablePositions = getPositionsForCategory(category);
  const hasPosition = (pos: FieldPosition) => availablePositions.includes(pos);

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Select Your Position</h2>
        <p className="text-gray-400 text-sm">
          Practice scenarios specific to your fielding position, or select "All Positions" to practice everything.
        </p>
      </div>

      {/* All Positions Button */}
      <button
        onClick={() => onSelectPosition(undefined)}
        className="w-full mb-6 p-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold
                   transition-all duration-200 text-white"
      >
        All Positions
        <span className="block text-sm font-normal text-blue-200 mt-1">
          Practice all {availablePositions.length > 0 ? 'scenarios' : 'available scenarios'}
        </span>
      </button>

      {/* Position Groups */}
      <div className="space-y-6">
        {/* Battery */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Battery
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {BATTERY_POSITIONS.map((position) => (
              <PositionButton
                key={position}
                position={position}
                hasScenarios={hasPosition(position)}
                onClick={() => onSelectPosition(position)}
              />
            ))}
          </div>
        </div>

        {/* Infield */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Infield
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {INFIELD_POSITIONS.map((position) => (
              <PositionButton
                key={position}
                position={position}
                hasScenarios={hasPosition(position)}
                onClick={() => onSelectPosition(position)}
              />
            ))}
          </div>
        </div>

        {/* Outfield */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Outfield
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {OUTFIELD_POSITIONS.map((position) => (
              <PositionButton
                key={position}
                position={position}
                hasScenarios={hasPosition(position)}
                onClick={() => onSelectPosition(position)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Categories
        </button>
      </div>
    </div>
  );
}

export default PositionSelector;
