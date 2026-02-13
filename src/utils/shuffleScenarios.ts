import type { Scenario } from '../types';

/**
 * Fisher-Yates shuffle algorithm for randomizing scenario order
 */
export function shuffleScenarios(scenarios: Scenario[]): Scenario[] {
  const shuffled = [...scenarios];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Get a random subset of scenarios
 */
export function getRandomScenarios(
  scenarios: Scenario[],
  count: number
): Scenario[] {
  const shuffled = shuffleScenarios(scenarios);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Filter scenarios that haven't been completed yet
 */
export function getIncompleteScenarios(
  scenarios: Scenario[],
  completedIds: string[]
): Scenario[] {
  return scenarios.filter((s) => !completedIds.includes(s.id));
}
