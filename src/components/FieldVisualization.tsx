import type { RunnerPositions, BattedBallType, FieldPosition } from '../types';
import { POSITION_NUMBERS } from '../types';

// ============================================
// TYPES
// ============================================

interface FieldVisualizationProps {
  runners?: RunnerPositions;
  fielderPosition?: FieldPosition; // Highlighted fielder (player's position)
  battedBall?: BattedBallType;
  ballLocation?: { x: number; y: number }; // Custom ball position (0-100)
  showFielderNumbers?: boolean;
  className?: string;
}

// ============================================
// POSITION COORDINATES
// ============================================

// Base positions (percentage of viewBox)
const BASE_POSITIONS = {
  home: { x: 50, y: 85 },
  first: { x: 72, y: 63 },
  second: { x: 50, y: 45 },
  third: { x: 28, y: 63 },
};

// Fielder positions (percentage of viewBox)
const FIELDER_POSITIONS: Record<FieldPosition, { x: number; y: number }> = {
  'pitcher': { x: 50, y: 60 },
  'catcher': { x: 50, y: 92 },
  'first-base': { x: 68, y: 55 },
  'second-base': { x: 58, y: 45 },
  'third-base': { x: 32, y: 55 },
  'shortstop': { x: 42, y: 45 },
  'left-field': { x: 22, y: 25 },
  'center-field': { x: 50, y: 15 },
  'right-field': { x: 78, y: 25 },
};

// Ball trajectory end points based on batted ball type
const BALL_TRAJECTORIES: Record<BattedBallType, { x: number; y: number } | null> = {
  'ground-ball-left': { x: 35, y: 50 },
  'ground-ball-right': { x: 65, y: 50 },
  'ground-ball-middle': { x: 50, y: 45 },
  'fly-ball-left': { x: 20, y: 20 },
  'fly-ball-center': { x: 50, y: 10 },
  'fly-ball-right': { x: 80, y: 20 },
  'line-drive': { x: 50, y: 35 },
  'popup-infield': { x: 50, y: 50 },
  'bunt': { x: 50, y: 70 },
  'none': null,
};

// ============================================
// SUB-COMPONENTS
// ============================================

function Diamond() {
  return (
    <g id="diamond">
      {/* Outer boundary arc - darker grass */}
      <path
        d="M 50 0 L 100 50 L 50 100 L 0 50 Z"
        fill="#15803d"
        stroke="#166534"
        strokeWidth="0.5"
      />

      {/* Outfield grass - vibrant green */}
      <path
        d="M 50 5 L 95 50 L 50 95 L 5 50 Z"
        fill="#16a34a"
        stroke="#15803d"
        strokeWidth="1"
      />

      {/* Infield dirt - enhanced color */}
      <path
        d="M 50 35 L 75 60 L 50 85 L 25 60 Z"
        fill="#d4a574"
        stroke="#b8956a"
        strokeWidth="0.8"
      />

      {/* Pitcher's mound - elevated look */}
      <ellipse
        cx="50"
        cy="60"
        rx="5"
        ry="4"
        fill="#c9a06a"
        stroke="#a08050"
        strokeWidth="0.5"
      />
      <rect x="49" y="59" width="2" height="3" fill="white" />

      {/* Base paths - brighter white */}
      <line x1="50" y1="85" x2="72" y2="63" stroke="white" strokeWidth="0.8" opacity="0.9" />
      <line x1="72" y1="63" x2="50" y2="45" stroke="white" strokeWidth="0.8" opacity="0.9" />
      <line x1="50" y1="45" x2="28" y2="63" stroke="white" strokeWidth="0.8" opacity="0.9" />
      <line x1="28" y1="63" x2="50" y2="85" stroke="white" strokeWidth="0.8" opacity="0.9" />

      {/* Foul lines extending to outfield */}
      <line x1="50" y1="85" x2="5" y2="50" stroke="white" strokeWidth="0.5" strokeDasharray="3,2" />
      <line x1="50" y1="85" x2="95" y2="50" stroke="white" strokeWidth="0.5" strokeDasharray="3,2" />

      {/* Warning track suggestion */}
      <path
        d="M 50 8 L 92 50 L 50 92 L 8 50 Z"
        fill="none"
        stroke="#d4a574"
        strokeWidth="3"
        opacity="0.3"
      />
    </g>
  );
}

function Bases() {
  return (
    <g id="bases">
      {/* Home plate - pentagon shape */}
      <polygon
        points="50,82 46,85 46,89 54,89 54,85"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth="0.5"
      >
        <animate
          attributeName="filter"
          values="drop-shadow(0 0 2px rgba(255,255,255,0.5));drop-shadow(0 0 4px rgba(255,255,255,0.8));drop-shadow(0 0 2px rgba(255,255,255,0.5))"
          dur="3s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* First base */}
      <rect
        x={BASE_POSITIONS.first.x - 2.5}
        y={BASE_POSITIONS.first.y - 2.5}
        width="5"
        height="5"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth="0.5"
        transform={`rotate(45, ${BASE_POSITIONS.first.x}, ${BASE_POSITIONS.first.y})`}
      />

      {/* Second base */}
      <rect
        x={BASE_POSITIONS.second.x - 2.5}
        y={BASE_POSITIONS.second.y - 2.5}
        width="5"
        height="5"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth="0.5"
        transform={`rotate(45, ${BASE_POSITIONS.second.x}, ${BASE_POSITIONS.second.y})`}
      />

      {/* Third base */}
      <rect
        x={BASE_POSITIONS.third.x - 2.5}
        y={BASE_POSITIONS.third.y - 2.5}
        width="5"
        height="5"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth="0.5"
        transform={`rotate(45, ${BASE_POSITIONS.third.x}, ${BASE_POSITIONS.third.y})`}
      />
    </g>
  );
}

interface RunnerProps {
  position: 'first' | 'second' | 'third';
}

function Runner({ position }: RunnerProps) {
  const pos = BASE_POSITIONS[position];
  // Offset runners slightly from the base
  const offset = {
    first: { x: 3, y: -3 },
    second: { x: 0, y: -4 },
    third: { x: -3, y: -3 },
  };

  return (
    <g className="runner">
      {/* Runner glow effect */}
      <circle
        cx={pos.x + offset[position].x}
        cy={pos.y + offset[position].y}
        r="5"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1"
        opacity="0.5"
      >
        <animate
          attributeName="r"
          values="4;6;4"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.5;0.2;0.5"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Runner body */}
      <circle
        cx={pos.x + offset[position].x}
        cy={pos.y + offset[position].y}
        r="3.5"
        fill="#f59e0b"
        stroke="#d97706"
        strokeWidth="0.8"
      >
        <animate
          attributeName="r"
          values="3.5;4;3.5"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Direction indicator arrow */}
      <circle
        cx={pos.x + offset[position].x}
        cy={pos.y + offset[position].y}
        r="1.2"
        fill="#92400e"
      />
    </g>
  );
}

interface FielderProps {
  position: FieldPosition;
  isHighlighted?: boolean;
  showNumber?: boolean;
}

function Fielder({ position, isHighlighted, showNumber }: FielderProps) {
  const pos = FIELDER_POSITIONS[position];
  const number = POSITION_NUMBERS[position];

  return (
    <g className="fielder">
      {/* Highlight glow for selected fielder */}
      {isHighlighted && (
        <>
          <circle
            cx={pos.x}
            cy={pos.y}
            r="7"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            opacity="0.6"
          >
            <animate
              attributeName="r"
              values="6;9;6"
              dur="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0.2;0.6"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={pos.x}
            cy={pos.y}
            r="5"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            opacity="0.8"
          >
            <animate
              attributeName="r"
              values="5;7;5"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </>
      )}

      {/* Fielder body */}
      <circle
        cx={pos.x}
        cy={pos.y}
        r={isHighlighted ? 4.5 : 3.5}
        fill={isHighlighted ? '#3b82f6' : '#4b5563'}
        stroke={isHighlighted ? '#1d4ed8' : '#374151'}
        strokeWidth={isHighlighted ? 1.2 : 0.8}
      />

      {/* Position number */}
      {showNumber && (
        <text
          x={pos.x}
          y={pos.y + 1.2}
          textAnchor="middle"
          fontSize="4"
          fill="white"
          fontWeight="bold"
          style={{ textShadow: '0 0 2px rgba(0,0,0,0.5)' }}
        >
          {number}
        </text>
      )}
    </g>
  );
}

interface BallTrajectoryProps {
  battedBall: BattedBallType;
  customLocation?: { x: number; y: number };
}

function BallTrajectory({ battedBall, customLocation }: BallTrajectoryProps) {
  const endPoint = customLocation || BALL_TRAJECTORIES[battedBall];

  if (!endPoint) return null;

  const startPoint = BASE_POSITIONS.home;
  const isGroundBall = battedBall.startsWith('ground') || battedBall === 'bunt';
  const isPopup = battedBall === 'popup-infield';
  const isFlyBall = battedBall.startsWith('fly');

  return (
    <g className="ball-trajectory">
      {/* Trajectory line with glow */}
      <line
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
        stroke={isGroundBall ? '#dc2626' : '#f59e0b'}
        strokeWidth="1.5"
        strokeDasharray={isGroundBall ? 'none' : '4,2'}
        strokeLinecap="round"
        filter="url(#trajectoryGlow)"
      />

      {/* Ball shadow (for fly balls) */}
      {isFlyBall && (
        <ellipse
          cx={endPoint.x}
          cy={endPoint.y + 8}
          rx="2"
          ry="0.8"
          fill="rgba(0,0,0,0.3)"
        >
          <animate
            attributeName="rx"
            values="2;3;2"
            dur="1s"
            repeatCount="indefinite"
          />
        </ellipse>
      )}

      {/* Ball with glow effect */}
      <circle
        cx={endPoint.x}
        cy={endPoint.y}
        r={isPopup ? 4 : 3}
        fill="#fef3c7"
        stroke="#dc2626"
        strokeWidth="1"
        filter="url(#ballGlow)"
      >
        <animate
          attributeName="r"
          values={isPopup ? '4;5;4' : '3;3.8;3'}
          dur="0.8s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Ball seams detail */}
      <path
        d={`M ${endPoint.x - 1.5} ${endPoint.y} Q ${endPoint.x} ${endPoint.y - 1.5} ${endPoint.x + 1.5} ${endPoint.y}`}
        fill="none"
        stroke="#dc2626"
        strokeWidth="0.4"
        opacity="0.6"
      />
    </g>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export function FieldVisualization({
  runners = { first: false, second: false, third: false },
  fielderPosition,
  battedBall = 'none',
  ballLocation,
  showFielderNumbers = true,
  className = '',
}: FieldVisualizationProps) {
  const allFielders: FieldPosition[] = [
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
    <div className={`field-container ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
        style={{ maxHeight: '450px' }}
      >
        {/* Definitions for effects */}
        <defs>
          {/* Ball glow filter */}
          <filter id="ballGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Trajectory glow filter */}
          <filter id="trajectoryGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Field lighting gradient */}
          <radialGradient id="fieldLighting" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
          </radialGradient>

          {/* Arrow marker for trajectory */}
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="3"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 6 3, 0 6" fill="#dc2626" />
          </marker>
        </defs>

        {/* Background with gradient */}
        <rect x="0" y="0" width="100" height="100" fill="#0f4d2a" />
        <rect x="0" y="0" width="100" height="100" fill="url(#fieldLighting)" />

        {/* Field elements */}
        <Diamond />
        <Bases />

        {/* Fielders */}
        {allFielders.map((pos) => (
          <Fielder
            key={pos}
            position={pos}
            isHighlighted={pos === fielderPosition}
            showNumber={showFielderNumbers}
          />
        ))}

        {/* Runners */}
        {runners.first && <Runner position="first" />}
        {runners.second && <Runner position="second" />}
        {runners.third && <Runner position="third" />}

        {/* Ball trajectory */}
        {battedBall !== 'none' && (
          <BallTrajectory battedBall={battedBall} customLocation={ballLocation} />
        )}
      </svg>
    </div>
  );
}

export default FieldVisualization;
