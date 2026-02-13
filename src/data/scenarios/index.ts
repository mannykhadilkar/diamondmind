import type { Scenario, CategoryType } from '../../types';

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
