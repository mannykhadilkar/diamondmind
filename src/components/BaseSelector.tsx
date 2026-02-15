import type { RunnerBase, CategoryType } from '../types';
import { BASE_NAMES, CATEGORIES } from '../types';

interface BaseSelectorProps {
  category: CategoryType;
  onSelectBase: (base: RunnerBase | undefined) => void;
  onBack: () => void;
  className?: string;
}

// Base coordinates on the diamond (percentage of viewBox)
const BASE_COORDS: Record<RunnerBase, { x: number; y: number }> = {
  'first': { x: 72, y: 60 },
  'second': { x: 50, y: 42 },
  'third': { x: 28, y: 60 },
};

interface BaseButtonProps {
  base: RunnerBase;
  onClick: () => void;
  coords: { x: number; y: number };
}

function BaseButton({ base, onClick, coords }: BaseButtonProps) {
  const name = BASE_NAMES[base];

  return (
    <g
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className="base-button"
    >
      {/* Pulsing glow ring */}
      <circle
        cx={coords.x}
        cy={coords.y}
        r="10"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
        opacity="0.4"
      >
        <animate
          attributeName="r"
          values="8;12;8"
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

      {/* Runner circle */}
      <circle
        cx={coords.x}
        cy={coords.y}
        r="7"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="1.5"
        className="hover:fill-[#fbbf24] transition-colors"
      />

      {/* Runner icon (simple figure) */}
      <circle
        cx={coords.x}
        cy={coords.y - 1}
        r="2"
        fill="#92400e"
      />
      <path
        d={`M ${coords.x} ${coords.y + 1} L ${coords.x} ${coords.y + 4}`}
        stroke="#92400e"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Base name label */}
      <text
        x={coords.x}
        y={coords.y + 14}
        textAnchor="middle"
        fontSize="4"
        fill="#fbbf24"
        fontWeight="bold"
        style={{ pointerEvents: 'none' }}
      >
        {name}
      </text>
    </g>
  );
}

export function BaseSelector({
  category,
  onSelectBase,
  onBack,
  className = '',
}: BaseSelectorProps) {
  const categoryInfo = CATEGORIES.find((c) => c.id === category);
  const allBases: RunnerBase[] = ['first', 'second', 'third'];

  return (
    <div className={`max-w-lg mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-4xl mb-3">{categoryInfo?.icon}</div>
        <h2 className="text-2xl font-bold mb-2 text-white">Select Your Base</h2>
        <p className="text-gray-400 text-sm">
          Choose which base you're running from, or practice all situations.
        </p>
      </div>

      {/* Random/All Button */}
      <button
        onClick={() => onSelectBase(undefined)}
        className="w-full mb-6 p-4 btn-gradient-action rounded-xl font-bold
                   transition-all duration-200 animate-glow-pulse"
      >
        Random Base
        <span className="block text-sm font-normal text-gray-800 mt-1">
          Practice from all bases randomly
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
            <radialGradient id="offFieldGradient" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
            </radialGradient>
          </defs>

          {/* Background */}
          <rect x="0" y="0" width="100" height="100" fill="#0f4d2a" rx="4" />
          <rect x="0" y="0" width="100" height="100" fill="url(#offFieldGradient)" rx="4" />

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
          <line x1="50" y1="82" x2="72" y2="60" stroke="white" strokeWidth="0.8" opacity="0.8" />
          <line x1="72" y1="60" x2="50" y2="42" stroke="white" strokeWidth="0.8" opacity="0.8" />
          <line x1="50" y1="42" x2="28" y2="60" stroke="white" strokeWidth="0.8" opacity="0.8" />
          <line x1="28" y1="60" x2="50" y2="82" stroke="white" strokeWidth="0.8" opacity="0.8" />

          {/* Foul lines */}
          <line x1="50" y1="82" x2="5" y2="50" stroke="white" strokeWidth="0.4" strokeDasharray="2,1" opacity="0.5" />
          <line x1="50" y1="82" x2="95" y2="50" stroke="white" strokeWidth="0.4" strokeDasharray="2,1" opacity="0.5" />

          {/* Home plate (highlighted as destination) */}
          <polygon
            points="50,80 46,83 46,87 54,87 54,83"
            fill="white"
            stroke="#22c55e"
            strokeWidth="1"
          />
          <text
            x="50"
            y="94"
            textAnchor="middle"
            fontSize="3.5"
            fill="#22c55e"
            fontWeight="bold"
          >
            HOME
          </text>

          {/* Static bases (dimmed) */}
          <rect x="70" y="58" width="5" height="5" fill="white" opacity="0.3" transform="rotate(45, 72.5, 60.5)" />
          <rect x="47.5" y="39.5" width="5" height="5" fill="white" opacity="0.3" transform="rotate(45, 50, 42)" />
          <rect x="25" y="58" width="5" height="5" fill="white" opacity="0.3" transform="rotate(45, 27.5, 60.5)" />

          {/* Running path arrows */}
          <defs>
            <marker id="arrowGreen" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
              <polygon points="0 0, 4 2, 0 4" fill="#22c55e" opacity="0.6" />
            </marker>
          </defs>

          {/* Arrow from 3rd to home */}
          <path
            d="M 32 64 Q 40 75 46 80"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1"
            strokeDasharray="3,2"
            opacity="0.5"
            markerEnd="url(#arrowGreen)"
          />

          {/* Arrow from 2nd to 3rd */}
          <path
            d="M 46 46 Q 35 52 32 56"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="3,2"
            opacity="0.4"
          />

          {/* Arrow from 1st to 2nd */}
          <path
            d="M 68 56 Q 60 48 54 44"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeDasharray="3,2"
            opacity="0.4"
          />

          {/* Base buttons (runners) */}
          {allBases.map((base) => (
            <BaseButton
              key={base}
              base={base}
              onClick={() => onSelectBase(base)}
              coords={BASE_COORDS[base]}
            />
          ))}
        </svg>

        {/* Instructions */}
        <div className="mt-4 text-center text-xs text-gray-400">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-team-gold"></span>
            Tap a runner to practice from that base
          </span>
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

export default BaseSelector;
