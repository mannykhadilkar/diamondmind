import { setup, assign } from 'xstate';
import type {
  AppContext,
  CategoryType,
  UserProgress,
  DrillSession,
} from '../types';
import { createEmptyCategoryProgress, evaluateWithVariance } from '../types';
import { getScenariosByCategory } from '../data/scenarios';

// ============================================
// MACHINE TYPES
// ============================================

export type AppEvent =
  | { type: 'SELECT_CATEGORY'; category: CategoryType }
  | { type: 'SUBMIT_ANSWER'; optionId: string }
  | { type: 'NEXT_SCENARIO' }
  | { type: 'RETURN_TO_MENU' }
  | { type: 'PLAY_AGAIN' }
  | { type: 'REVIEW_PROGRESS' }
  | { type: 'CLOSE_REVIEW' };

// ============================================
// INITIAL CONTEXT
// ============================================

const initialContext: AppContext = {
  session: null,
  progress: {},
  lastResult: null,
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function loadProgressFromStorage(): UserProgress {
  try {
    const stored = localStorage.getItem('softball-iq-progress');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function saveProgressToStorage(progress: UserProgress): void {
  try {
    localStorage.setItem('softball-iq-progress', JSON.stringify(progress));
  } catch {
    console.error('Failed to save progress to localStorage');
  }
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ============================================
// APP STATE MACHINE
// ============================================

export const appMachine = setup({
  types: {
    context: {} as AppContext,
    events: {} as AppEvent,
  },
  actions: {
    loadProgress: assign({
      progress: () => loadProgressFromStorage(),
    }),

    startDrillSession: assign(({ event }) => {
      if (event.type !== 'SELECT_CATEGORY') {
        return {};
      }

      const scenarios = getScenariosByCategory(event.category);

      return {
        session: {
          category: event.category,
          scenarios: shuffleArray(scenarios),
          currentScenarioIndex: 0,
          results: [],
        } satisfies DrillSession,
        lastResult: null,
      };
    }),

    evaluateAnswer: assign(({ context, event }) => {
      if (event.type !== 'SUBMIT_ANSWER' || !context.session) {
        return {};
      }

      const currentScenario =
        context.session.scenarios[context.session.currentScenarioIndex];

      if (!currentScenario) return {};

      const result = evaluateWithVariance(
        event.optionId,
        currentScenario.correctOptionId,
        currentScenario.errorVarianceApplies
      );

      return {
        lastResult: result,
        session: {
          ...context.session,
          results: [...context.session.results, result],
        },
      };
    }),

    advanceToNextScenario: assign(({ context }) => {
      if (!context.session) return {};
      return {
        session: {
          ...context.session,
          currentScenarioIndex: context.session.currentScenarioIndex + 1,
        },
        lastResult: null,
      };
    }),

    updateProgress: assign(({ context }) => {
      if (!context.session) return {};

      const { category, results, scenarios } = context.session;
      const currentProgress =
        context.progress[category] || createEmptyCategoryProgress();

      const sessionCorrectCount = results.filter((r) => r.isCorrectDecision).length;
      const sessionTotalAttempted = results.length;

      // Get IDs of completed scenarios in this session
      const completedIds = scenarios
        .slice(0, sessionTotalAttempted)
        .map((s) => s.id);

      // Merge with existing completed IDs (avoid duplicates)
      const allCompletedIds = [
        ...new Set([...currentProgress.completedScenarioIds, ...completedIds]),
      ];

      const newCorrectCount = currentProgress.correctCount + sessionCorrectCount;
      const newTotalAttempted = currentProgress.totalAttempted + sessionTotalAttempted;

      const newProgress: UserProgress = {
        ...context.progress,
        [category]: {
          completedScenarioIds: allCompletedIds,
          correctCount: newCorrectCount,
          totalAttempted: newTotalAttempted,
          masteryPercentage:
            newTotalAttempted > 0
              ? Math.round((newCorrectCount / newTotalAttempted) * 100)
              : 0,
          lastPlayedAt: new Date().toISOString(),
        },
      };

      // Persist to localStorage
      saveProgressToStorage(newProgress);

      return { progress: newProgress };
    }),

    clearSession: assign(() => ({
      session: null,
      lastResult: null,
    })),

    restartSession: assign(({ context }) => {
      if (!context.session) return {};

      const scenarios = getScenariosByCategory(context.session.category);

      return {
        session: {
          category: context.session.category,
          scenarios: shuffleArray(scenarios),
          currentScenarioIndex: 0,
          results: [],
        },
        lastResult: null,
      };
    }),
  },
  guards: {
    hasMoreScenarios: ({ context }) => {
      if (!context.session) return false;
      return (
        context.session.currentScenarioIndex <
        context.session.scenarios.length - 1
      );
    },
    isLastScenario: ({ context }) => {
      if (!context.session) return false;
      return (
        context.session.currentScenarioIndex >=
        context.session.scenarios.length - 1
      );
    },
    hasScenarios: ({ context }) => {
      return (
        context.session !== null && context.session.scenarios.length > 0
      );
    },
  },
}).createMachine({
  id: 'softballIQ',
  initial: 'initializing',
  context: initialContext,

  states: {
    // Load saved progress on startup
    initializing: {
      entry: 'loadProgress',
      always: 'idle',
    },

    // Category selection screen
    idle: {
      on: {
        SELECT_CATEGORY: {
          target: 'drilling',
          actions: 'startDrillSession',
        },
        REVIEW_PROGRESS: 'reviewingProgress',
      },
    },

    // Active drill session
    drilling: {
      initial: 'presentingScenario',
      states: {
        presentingScenario: {
          on: {
            SUBMIT_ANSWER: {
              target: 'showingFeedback',
              actions: 'evaluateAnswer',
            },
            RETURN_TO_MENU: {
              target: '#softballIQ.idle',
              actions: ['updateProgress', 'clearSession'],
            },
          },
        },

        showingFeedback: {
          on: {
            NEXT_SCENARIO: [
              {
                target: 'presentingScenario',
                guard: 'hasMoreScenarios',
                actions: 'advanceToNextScenario',
              },
              {
                target: '#softballIQ.categoryComplete',
                guard: 'isLastScenario',
              },
            ],
            RETURN_TO_MENU: {
              target: '#softballIQ.idle',
              actions: ['updateProgress', 'clearSession'],
            },
          },
        },
      },
    },

    // Category drill completed
    categoryComplete: {
      entry: 'updateProgress',
      on: {
        RETURN_TO_MENU: {
          target: 'idle',
          actions: 'clearSession',
        },
        PLAY_AGAIN: {
          target: 'drilling',
          actions: 'restartSession',
        },
      },
    },

    // Viewing overall progress
    reviewingProgress: {
      on: {
        CLOSE_REVIEW: 'idle',
        SELECT_CATEGORY: {
          target: 'drilling',
          actions: 'startDrillSession',
        },
      },
    },
  },
});

export type AppMachine = typeof appMachine;
export type AppState = ReturnType<typeof appMachine.getInitialSnapshot>;
