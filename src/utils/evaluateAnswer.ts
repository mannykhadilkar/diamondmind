import type { EvaluationResult, Scenario } from '../types';
import { evaluateWithVariance } from '../types';

/**
 * Evaluate a user's answer for a given scenario
 */
export function evaluateAnswer(
  scenario: Scenario,
  selectedOptionId: string
): EvaluationResult {
  return evaluateWithVariance(
    selectedOptionId,
    scenario.correctOptionId,
    scenario.errorVarianceApplies
  );
}

/**
 * Get feedback message based on evaluation result
 */
export function getFeedbackMessage(result: EvaluationResult): string {
  switch (result.outcome) {
    case 'correct':
      return 'Correct! Great decision.';
    case 'incorrect':
      return 'Not quite. Let\'s review the correct play.';
    case 'correct_but_error':
      return 'Right decision, but a fielder error occurred! That\'s softball - errors happen.';
    case 'incorrect_but_error':
      return 'That wasn\'t the best choice, and there was also a fielder error.';
  }
}

/**
 * Get CSS class for feedback styling based on result
 */
export function getFeedbackClass(result: EvaluationResult): string {
  switch (result.outcome) {
    case 'correct':
      return 'bg-correct text-white';
    case 'incorrect':
      return 'bg-incorrect text-white';
    case 'correct_but_error':
      return 'bg-warning text-white';
    case 'incorrect_but_error':
      return 'bg-incorrect text-white';
  }
}

/**
 * Check if the result should be counted as "correct" for mastery purposes
 * Note: We count the decision, not the outcome
 */
export function isCorrectForMastery(result: EvaluationResult): boolean {
  return result.isCorrectDecision;
}
