import type { FieldPosition, CategoryType } from '../types';
import { POSITION_NAMES, POSITION_NUMBERS } from '../types';
import { getPositionsForCategory } from '../data/scenarios';

interface PositionSelectorProps {
  category: CategoryType;
  onSelectPosition: (position: FieldPosition | undefined) => void;
  onBack: () => void;
  className?: string;
}

// Position coordinates on the diamond (percentage of viewBox)
const POSITION_COORDS: Record<FieldPosition, { x: number; y: number }> = {
  'pitcher': { x: 50, y: 58 },
  'catcher': { x: 50, y: 88 },
  'first-base': { x: 72, y: 52 },
  'second-base': { x: 58, y: 40 },
  'third-base': { x: 28, y: 52 },
  'shortstop': { x: 42, y: 40 },
  'left-field': { x: 20, y: 22 },
  'center-field': { x: 50, y: 12 },
  'right-field': { x: 80, y: 22 },
};

interface PositionButtonProps {
  position: FieldPosition;
  hasScenarios: boolean;
  onClick: () => void;
  coords: { x: number; y: number };
}

function PositionButton({ position, hasScenarios, onClick, coords }: PositionButtonProps) {
  const number = POSITION_NUMBERS[position];
  const name = POSITION_NAMES[position];

  return (
    <g
      onClick={hasScenarios ? onClick : undefined}
      style={{ cursor: hasScenarios ? 'pointer' : 'not-allowed' }}
      className="position-button"
    >
      {/* Hover/active glow ring */}
      {hasScenarios && (
        <circle
          cx={coords.x}
          cy={coords.y}
          r="8"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1.5"
          opacity="0"
          className="position-glow"
        >
          <animate
            attributeName="r"
            values="7;10;7"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      )}

      {/* Position circle */}
      <circle
        cx={coords.x}
        cy={coords.y}
        r="6"
        fill={hasScenarios ? '#1e40af' : '#374151'}
        stroke={hasScenarios ? '#3b82f6' : '#4b5563'}
        strokeWidth="1.5"
        className={hasScenarios ? 'hover:fill-[#2563eb] transition-colors' : ''}
      />

      {/* Position number */}
      <text
        x={coords.x}
        y={coords.y + 1.5}
        textAnchor="middle"
        fontSize="5"
        fill="white"
        fontWeight="bold"
        style={{ pointerEvents: 'none' }}
      >
        {number}
      </text>

      {/* Position name label */}
      <text
        x={coords.x}
        y={coords.y + 12}
        textAnchor="middle"
        fontSize="3.5"
        fill={hasScenarios ? '#93c5fd' : '#6b7280'}
        fontWeight="500"
        style={{ pointerEvents: 'none' }}
      >
        {name}
      </text>
    </g>
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

  const allPositions: FieldPosition[] = [
    'pitcher',
    'catcher',
    'first-base',
    'second-base',
    'third-base',
    'shortstop',
    'left-field',
    'center-field',
    'right-field',
  ];

  return (
    <div className={`max-w-lg mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-white">Select Your Position</h2>
        <p className="text-gray-400 text-sm">
          Tap your fielding position on the diamond, or practice all positions.
        </p>
      </div>

      {/* All Positions Button */}
      <button
        onClick={() => onSelectPosition(undefined)}
        className="w-full mb-6 p-4 btn-gradient-primary rounded-xl font-bold
                   transition-all duration-200 text-white"
      >
        All Positions
        <span className="block text-sm font-normal text-blue-200 mt-1">
          Practice all available scenarios
        </span>
      </button>

      {/* Diamond Visualization */}
      <div className="relative bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-auto"
          style={{ maxHeight: '400px' }}
        >
          {/* Definitions */}
          <defs>
            <radialGradient id="fieldGradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect x="0" y="0" width="100" height="100" fill="#0f4d2a" rx="4" />
          <rect x="0" y="0" width="100" height="100" fill="url(#fieldGradient)" rx="4" />

          {/* Outfield grass */}
          <path
            d="M 50 5 L 95 50 L 50 95 L 5 50 Z"
            fill="#16a34a"
            stroke="#15803d"
            strokeWidth="1"
          />

          {/* Infield dirt */}
          <path
            d="M 50 35 L 75 60 L 50 85 L 25 60 Z"
            fill="#d4a574"
            stroke="#b8956a"
            strokeWidth="0.8"
          />

          {/* Pitcher's mound */}
          <ellipse
            cx="50"
            cy="58"
            rx="4"
            ry="3"
            fill="#c9a06a"
            stroke="#a08050"
            strokeWidth="0.5"
          />

          {/* Base paths */}
          <line x1="50" y1="82" x2="72" y2="60" stroke="white" strokeWidth="0.6" opacity="0.7" />
          <line x1="72" y1="60" x2="50" y2="42" stroke="white" strokeWidth="0.6" opacity="0.7" />
          <line x1="50" y1="42" x2="28" y2="60" stroke="white" strokeWidth="0.6" opacity="0.7" />
          <line x1="28" y1="60" x2="50" y2="82" stroke="white" strokeWidth="0.6" opacity="0.7" />

          {/* Foul lines */}
          <line x1="50" y1="82" x2="5" y2="50" stroke="white" strokeWidth="0.4" strokeDasharray="2,1" opacity="0.5" />
          <line x1="50" y1="82" x2="95" y2="50" stroke="white" strokeWidth="0.4" strokeDasharray="2,1" opacity="0.5" />

          {/* Bases */}
          <polygon points="50,80 47,82 47,85 53,85 53,82" fill="white" /> {/* Home */}
          <rect x="70" y="58" width="4" height="4" fill="white" transform="rotate(45, 72, 60)" /> {/* First */}
          <rect x="48" y="40" width="4" height="4" fill="white" transform="rotate(45, 50, 42)" /> {/* Second */}
          <rect x="26" y="58" width="4" height="4" fill="white" transform="rotate(45, 28, 60)" /> {/* Third */}

          {/* Position buttons */}
          {allPositions.map((position) => (
            <PositionButton
              key={position}
              position={position}
              hasScenarios={hasPosition(position)}
              onClick={() => onSelectPosition(position)}
              coords={POSITION_COORDS[position]}
            />
          ))}
        </svg>

        {/* Legend */}
        <div className="mt-4 flex justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-defensive-primary border border-blue-400"></span>
            <span className="text-gray-400">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-600 border border-gray-500"></span>
            <span className="text-gray-500">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors
                     hover:bg-gray-800 rounded-lg"
        >
          ← Back to Categories
        </button>
      </div>
    </div>
  );
}

export default PositionSelector;
