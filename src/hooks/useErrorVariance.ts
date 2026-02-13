import { useCallback, useState } from 'react';
import type { EvaluationResult } from '../types';
import { evaluateWithVariance } from '../types';

/**
 * Hook for handling answer evaluation with error variance
 */
export function useErrorVariance() {
  const [lastResult, setLastResult] = useState<EvaluationResult | null>(null);

  /**
   * Evaluate an answer with potential 20% error variance
   */
  const evaluate = useCallback(
    (
      selectedOptionId: string,
      correctOptionId: string,
      errorVarianceApplies: boolean
    ): EvaluationResult => {
      const result = evaluateWithVariance(
        selectedOptionId,
        correctOptionId,
        errorVarianceApplies
      );
      setLastResult(result);
      return result;
    },
    []
  );

  /**
   * Clear the last result
   */
  const clearResult = useCallback(() => {
    setLastResult(null);
  }, []);

  return {
    lastResult,
    evaluate,
    clearResult,
  };
}
