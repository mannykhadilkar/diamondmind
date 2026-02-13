// ============================================
// CATEGORY TYPES
// ============================================

export type CategoryType =
  // Defensive categories
  | 'force-vs-tag'
  | 'routine-plays'
  | 'popup-priority'
  | 'lead-runner'
  // Offensive categories
  | 'ground-ball-reads'
  | 'tag-up-rules'
  | 'two-out-baserunning';

export interface CategoryInfo {
  id: CategoryType;
  name: string;
  description: string;
  type: 'defensive' | 'offensive';
  icon: string; // emoji or icon identifier
}

export const CATEGORIES: CategoryInfo[] = [
  // Defensive
  {
    id: 'force-vs-tag',
    name: 'Force vs Tag Plays',
    description: 'Learn when force outs apply and when you need to tag the runner',
    type: 'defensive',
    icon: '🏃',
  },
  {
    id: 'routine-plays',
    name: 'Routine Plays',
    description: 'Master basic fielding decisions by position',
    type: 'defensive',
    icon: '⚾',
  },
  {
    id: 'popup-priority',
    name: 'Pop-Up Priority & Infield Fly',
    description: 'Know who should catch pop-ups and when infield fly applies',
    type: 'defensive',
    icon: '🎯',
  },
  {
    id: 'lead-runner',
    name: 'Lead Runner Decisions',
    description: 'Decide whether to throw to the lead runner or take the sure out',
    type: 'defensive',
    icon: '🎪',
  },
  // Offensive
  {
    id: 'ground-ball-reads',
    name: 'Ground Ball Reads',
    description: 'Know when to run, freeze, or advance on ground balls',
    type: 'offensive',
    icon: '👟',
  },
  {
    id: 'tag-up-rules',
    name: 'Tag-Up Rules',
    description: 'Master when to tag up on fly balls',
    type: 'offensive',
    icon: '✈️',
  },
  {
    id: 'two-out-baserunning',
    name: 'Two-Out Baserunning',
    description: 'Understand aggressive baserunning with two outs',
    type: 'offensive',
    icon: '🔥',
  },
];

// ============================================
// FIELD & GAME STATE TYPES
// ============================================

export interface RunnerPositions {
  first: boolean;
  second: boolean;
  third: boolean;
}

export type OutCount = 0 | 1 | 2;

export type BattedBallType =
  | 'ground-ball-left'    // Ground ball to left side (SS, 3B)
  | 'ground-ball-right'   // Ground ball to right side (2B, 1B)
  | 'ground-ball-middle'  // Ground ball up the middle
  | 'fly-ball-left'       // Fly ball to left field
  | 'fly-ball-center'     // Fly ball to center field
  | 'fly-ball-right'      // Fly ball to right field
  | 'line-drive'          // Line drive
  | 'popup-infield'       // Pop-up in the infield
  | 'bunt'                // Bunt
  | 'none';               // No batted ball (for pre-pitch scenarios)

export type FieldPosition =
  | 'pitcher'    // 1
  | 'catcher'    // 2
  | 'first-base' // 3
  | 'second-base'// 4
  | 'third-base' // 5
  | 'shortstop'  // 6
  | 'left-field' // 7
  | 'center-field' // 8
  | 'right-field'; // 9

// Position numbers for display
export const POSITION_NUMBERS: Record<FieldPosition, number> = {
  'pitcher': 1,
  'catcher': 2,
  'first-base': 3,
  'second-base': 4,
  'third-base': 5,
  'shortstop': 6,
  'left-field': 7,
  'center-field': 8,
  'right-field': 9,
};

// ============================================
// SCENARIO TYPES
// ============================================

export interface GameSituation {
  outs: OutCount;
  runners: RunnerPositions;
  battedBall: BattedBallType;
  fieldPosition?: FieldPosition; // Player's position (for defensive scenarios)
  ballLocation?: {
    x: number; // 0-100 percentage across field
    y: number; // 0-100 percentage up field
  };
  // Additional context for complex scenarios
  runnerSpeed?: 'slow' | 'average' | 'fast';
  throwDistance?: 'short' | 'medium' | 'long';
  scoreDifferential?: number; // positive = winning, negative = losing
  inning?: number;
}

export interface Option {
  id: string;
  text: string;
  // For displaying on field visualization
  targetBase?: 'first' | 'second' | 'third' | 'home';
}

export interface Scenario {
  id: string;
  category: CategoryType;
  situation: GameSituation;
  question: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  // Whether fielder errors can affect the outcome
  errorVarianceApplies: boolean;
  // Difficulty rating for potential future features
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

// ============================================
// EVALUATION & RESULT TYPES
// ============================================

export type EvaluationOutcome =
  | 'correct'
  | 'incorrect'
  | 'correct_but_error'    // Made right decision but fielder error occurred
  | 'incorrect_but_error'; // Made wrong decision but error "helped"

export interface EvaluationResult {
  outcome: EvaluationOutcome;
  isCorrectDecision: boolean; // The actual decision correctness (ignoring error)
  errorOccurred: boolean;
  message?: string; // e.g., "Fielder error! The ball was bobbled."
}

// ============================================
// PROGRESS & PERSISTENCE TYPES
// ============================================

export interface CategoryProgress {
  completedScenarioIds: string[];
  correctCount: number;
  totalAttempted: number;
  masteryPercentage: number; // 0-100
  lastPlayedAt?: string; // ISO date string
}

export interface UserProgress {
  [categoryId: string]: CategoryProgress;
}

// Default empty progress for a category
export const createEmptyCategoryProgress = (): CategoryProgress => ({
  completedScenarioIds: [],
  correctCount: 0,
  totalAttempted: 0,
  masteryPercentage: 0,
});

// ============================================
// STATE MACHINE CONTEXT TYPES
// ============================================

export interface DrillSession {
  category: CategoryType;
  scenarios: Scenario[];
  currentScenarioIndex: number;
  results: EvaluationResult[];
}

export interface AppContext {
  // Current drill session (null when in category selection)
  session: DrillSession | null;
  // User's saved progress
  progress: UserProgress;
  // Last evaluation result (for showing feedback)
  lastResult: EvaluationResult | null;
}

// ============================================
// INFIELD FLY RULE HELPER
// ============================================

/**
 * Determines if the infield fly rule is in effect
 * Conditions:
 * - Less than 2 outs
 * - Runners on 1st & 2nd OR bases loaded
 * - Fair fly ball that can be caught by infielder with ordinary effort
 */
export function isInfieldFlyPossible(
  outs: OutCount,
  runners: RunnerPositions,
  battedBall: BattedBallType
): boolean {
  // Must have less than 2 outs
  if (outs >= 2) return false;

  // Must have runners on first AND second (can also have third)
  if (!runners.first || !runners.second) return false;

  // Must be a popup in the infield (fair fly ball)
  if (battedBall !== 'popup-infield') return false;

  return true;
}

// ============================================
// ERROR VARIANCE ENGINE
// ============================================

const ERROR_VARIANCE_RATE = 0.2; // 20% chance of fielder error

/**
 * Evaluates an answer with potential error variance
 */
export function evaluateWithVariance(
  selectedOptionId: string,
  correctOptionId: string,
  errorVarianceApplies: boolean
): EvaluationResult {
  const isCorrectDecision = selectedOptionId === correctOptionId;

  // If error variance doesn't apply, return straightforward result
  if (!errorVarianceApplies) {
    return {
      outcome: isCorrectDecision ? 'correct' : 'incorrect',
      isCorrectDecision,
      errorOccurred: false,
    };
  }

  // Roll for error (20% chance)
  const errorOccurred = Math.random() < ERROR_VARIANCE_RATE;

  if (errorOccurred) {
    return {
      outcome: isCorrectDecision ? 'correct_but_error' : 'incorrect_but_error',
      isCorrectDecision,
      errorOccurred: true,
      message: 'Fielder error! The ball was bobbled.',
    };
  }

  return {
    outcome: isCorrectDecision ? 'correct' : 'incorrect',
    isCorrectDecision,
    errorOccurred: false,
  };
}
