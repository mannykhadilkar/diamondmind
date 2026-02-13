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
      {/* Outfield grass */}
      <path
        d="M 50 5 L 95 50 L 50 95 L 5 50 Z"
        fill="#2d5a27"
        stroke="#1e4620"
        strokeWidth="0.5"
      />

      {/* Infield dirt */}
      <path
        d="M 50 35 L 75 60 L 50 85 L 25 60 Z"
        fill="#c4a574"
        stroke="#a08050"
        strokeWidth="0.5"
      />

      {/* Pitcher's circle */}
      <circle
        cx="50"
        cy="60"
        r="4"
        fill="#c4a574"
        stroke="#a08050"
        strokeWidth="0.3"
      />

      {/* Base paths */}
      <line x1="50" y1="85" x2="72" y2="63" stroke="white" strokeWidth="0.5" />
      <line x1="72" y1="63" x2="50" y2="45" stroke="white" strokeWidth="0.5" />
      <line x1="50" y1="45" x2="28" y2="63" stroke="white" strokeWidth="0.5" />
      <line x1="28" y1="63" x2="50" y2="85" stroke="white" strokeWidth="0.5" />

      {/* Foul lines extending to outfield */}
      <line x1="50" y1="85" x2="5" y2="50" stroke="white" strokeWidth="0.3" strokeDasharray="2,1" />
      <line x1="50" y1="85" x2="95" y2="50" stroke="white" strokeWidth="0.3" strokeDasharray="2,1" />
    </g>
  );
}

function Bases() {
  return (
    <g id="bases">
      {/* Home plate */}
      <polygon
        points="50,83 47,85 47,88 53,88 53,85"
        fill="white"
        stroke="#888"
        strokeWidth="0.3"
      />

      {/* First base */}
      <rect
        x={BASE_POSITIONS.first.x - 2}
        y={BASE_POSITIONS.first.y - 2}
        width="4"
        height="4"
        fill="white"
        stroke="#888"
        strokeWidth="0.3"
        transform={`rotate(45, ${BASE_POSITIONS.first.x}, ${BASE_POSITIONS.first.y})`}
      />

      {/* Second base */}
      <rect
        x={BASE_POSITIONS.second.x - 2}
        y={BASE_POSITIONS.second.y - 2}
        width="4"
        height="4"
        fill="white"
        stroke="#888"
        strokeWidth="0.3"
        transform={`rotate(45, ${BASE_POSITIONS.second.x}, ${BASE_POSITIONS.second.y})`}
      />

      {/* Third base */}
      <rect
        x={BASE_POSITIONS.third.x - 2}
        y={BASE_POSITIONS.third.y - 2}
        width="4"
        height="4"
        fill="white"
        stroke="#888"
        strokeWidth="0.3"
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
    first: { x: 2, y: -2 },
    second: { x: 0, y: -3 },
    third: { x: -2, y: -2 },
  };

  return (
    <g className="runner">
      <circle
        cx={pos.x + offset[position].x}
        cy={pos.y + offset[position].y}
        r="3"
        fill="#fbbf24"
        stroke="#b45309"
        strokeWidth="0.5"
      />
      {/* Runner direction indicator */}
      <circle
        cx={pos.x + offset[position].x}
        cy={pos.y + offset[position].y}
        r="1"
        fill="#b45309"
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
      <circle
        cx={pos.x}
        cy={pos.y}
        r={isHighlighted ? 4 : 3}
        fill={isHighlighted ? '#3b82f6' : '#6b7280'}
        stroke={isHighlighted ? '#1d4ed8' : '#374151'}
        strokeWidth={isHighlighted ? 1 : 0.5}
      />
      {showNumber && (
        <text
          x={pos.x}
          y={pos.y + 1}
          textAnchor="middle"
          fontSize="3"
          fill="white"
          fontWeight="bold"
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

  return (
    <g className="ball-trajectory">
      {/* Trajectory line */}
      <line
        x1={startPoint.x}
        y1={startPoint.y}
        x2={endPoint.x}
        y2={endPoint.y}
        stroke={isGroundBall ? '#dc2626' : '#f59e0b'}
        strokeWidth="0.8"
        strokeDasharray={isGroundBall ? 'none' : '2,1'}
        markerEnd="url(#arrowhead)"
      />

      {/* Ball */}
      <circle
        cx={endPoint.x}
        cy={endPoint.y}
        r={isPopup ? 3 : 2}
        fill="#fef3c7"
        stroke="#dc2626"
        strokeWidth="0.5"
      >
        {/* Pulsing animation for the ball */}
        <animate
          attributeName="r"
          values={isPopup ? '3;4;3' : '2;2.5;2'}
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
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
        className="w-full h-auto max-w-md mx-auto"
        style={{ maxHeight: '400px' }}
      >
        {/* Definitions for markers */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="4"
            markerHeight="4"
            refX="2"
            refY="2"
            orient="auto"
          >
            <polygon points="0 0, 4 2, 0 4" fill="#dc2626" />
          </marker>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="100" height="100" fill="#1a4d1a" />

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
