import type { Scenario, CategoryType, FieldPosition, RunnerBase } from '../../types';

// Defensive scenarios
import { forceVsTagScenarios } from './defensive/forceVsTag';
import { popUpPriorityScenarios } from './defensive/popUpPriority';
import { routinePlaysScenarios } from './defensive/routinePlays';
import { leadRunnerScenarios } from './defensive/leadRunner';

// Offensive scenarios
import { groundBallReadsScenarios } from './offensive/groundBallReads';
import { tagUpRulesScenarios } from './offensive/tagUpRules';
import { twoOutBaserunningScenarios } from './offensive/twoOutBaserunning';

// ============================================
// SCENARIO REGISTRY
// ============================================

const scenariosByCategory: Record<CategoryType, Scenario[]> = {
  'force-vs-tag': forceVsTagScenarios,
  'routine-plays': routinePlaysScenarios,
  'popup-priority': popUpPriorityScenarios,
  'lead-runner': leadRunnerScenarios,
  'ground-ball-reads': groundBallReadsScenarios,
  'tag-up-rules': tagUpRulesScenarios,
  'two-out-baserunning': twoOutBaserunningScenarios,
};

/**
 * Get all scenarios for a specific category
 */
export function getScenariosByCategory(category: CategoryType): Scenario[] {
  return scenariosByCategory[category] || [];
}

/**
 * Get all scenarios across all categories
 */
export function getAllScenarios(): Scenario[] {
  return Object.values(scenariosByCategory).flat();
}

/**
 * Get a specific scenario by ID
 */
export function getScenarioById(id: string): Scenario | undefined {
  return getAllScenarios().find((s) => s.id === id);
}

/**
 * Get count of scenarios per category
 */
export function getScenarioCounts(): Record<CategoryType, number> {
  const counts = {} as Record<CategoryType, number>;
  for (const [category, scenarios] of Object.entries(scenariosByCategory)) {
    counts[category as CategoryType] = scenarios.length;
  }
  return counts;
}

/**
 * Check if a category has scenarios available
 */
export function categoryHasScenarios(category: CategoryType): boolean {
  return (scenariosByCategory[category]?.length || 0) > 0;
}

/**
 * Get all unique field positions that have scenarios in a category
 */
export function getPositionsForCategory(category: CategoryType): FieldPosition[] {
  const scenarios = scenariosByCategory[category] || [];
  const positions = new Set<FieldPosition>();

  for (const scenario of scenarios) {
    if (scenario.situation.fieldPosition) {
      positions.add(scenario.situation.fieldPosition);
    }
  }

  return Array.from(positions);
}

/**
 * Filter scenarios by a specific field position
 * If position is undefined, returns all scenarios (no filtering)
 */
export function filterScenariosByPosition(
  scenarios: Scenario[],
  position: FieldPosition | undefined
): Scenario[] {
  if (!position) {
    return scenarios;
  }

  return scenarios.filter(
    (scenario) => scenario.situation.fieldPosition === position
  );
}

/**
 * Filter scenarios by a specific runner base (for offensive drills)
 * If base is undefined, returns all scenarios (no filtering)
 * Filters based on which base has a runner in the situation
 */
export function filterScenariosByBase(
  scenarios: Scenario[],
  base: RunnerBase | undefined
): Scenario[] {
  if (!base) {
    return scenarios;
  }

  return scenarios.filter((scenario) => {
    const { runners } = scenario.situation;
    // Filter scenarios where the player is on the specified base
    switch (base) {
      case 'first':
        return runners.first;
      case 'second':
        return runners.second;
      case 'third':
        return runners.third;
      default:
        return true;
    }
  });
}
