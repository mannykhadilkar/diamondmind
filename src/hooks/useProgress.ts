import { useCallback, useEffect, useState } from 'react';
import type { UserProgress, CategoryProgress, CategoryType } from '../types';
import { createEmptyCategoryProgress } from '../types';

const STORAGE_KEY = 'softball-iq-progress';

/**
 * Hook for managing user progress with localStorage persistence
 */
export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load progress from localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error('Failed to save progress to localStorage:', error);
      }
    }
  }, [progress, isLoaded]);

  /**
   * Get progress for a specific category
   */
  const getCategoryProgress = useCallback(
    (category: CategoryType): CategoryProgress => {
      return progress[category] || createEmptyCategoryProgress();
    },
    [progress]
  );

  /**
   * Update progress for a specific category
   */
  const updateCategoryProgress = useCallback(
    (category: CategoryType, update: Partial<CategoryProgress>) => {
      setProgress((prev) => ({
        ...prev,
        [category]: {
          ...createEmptyCategoryProgress(),
          ...prev[category],
          ...update,
          lastPlayedAt: new Date().toISOString(),
        },
      }));
    },
    []
  );

  /**
   * Record a completed scenario
   */
  const recordScenarioResult = useCallback(
    (category: CategoryType, scenarioId: string, isCorrect: boolean) => {
      setProgress((prev) => {
        const current = prev[category] || createEmptyCategoryProgress();
        const completedIds = current.completedScenarioIds.includes(scenarioId)
          ? current.completedScenarioIds
          : [...current.completedScenarioIds, scenarioId];

        const newCorrectCount = current.correctCount + (isCorrect ? 1 : 0);
        const newTotalAttempted = current.totalAttempted + 1;

        return {
          ...prev,
          [category]: {
            completedScenarioIds: completedIds,
            correctCount: newCorrectCount,
            totalAttempted: newTotalAttempted,
            masteryPercentage: Math.round(
              (newCorrectCount / newTotalAttempted) * 100
            ),
            lastPlayedAt: new Date().toISOString(),
          },
        };
      });
    },
    []
  );

  /**
   * Reset progress for a specific category
   */
  const resetCategoryProgress = useCallback((category: CategoryType) => {
    setProgress((prev) => ({
      ...prev,
      [category]: createEmptyCategoryProgress(),
    }));
  }, []);

  /**
   * Reset all progress
   */
  const resetAllProgress = useCallback(() => {
    setProgress({});
  }, []);

  /**
   * Calculate overall mastery across all categories
   */
  const getOverallMastery = useCallback((): number => {
    const categories = Object.values(progress);
    if (categories.length === 0) return 0;

    const totalCorrect = categories.reduce((sum, c) => sum + c.correctCount, 0);
    const totalAttempted = categories.reduce(
      (sum, c) => sum + c.totalAttempted,
      0
    );

    return totalAttempted > 0
      ? Math.round((totalCorrect / totalAttempted) * 100)
      : 0;
  }, [progress]);

  return {
    progress,
    isLoaded,
    getCategoryProgress,
    updateCategoryProgress,
    recordScenarioResult,
    resetCategoryProgress,
    resetAllProgress,
    getOverallMastery,
  };
}
