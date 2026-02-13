import type { CategoryType, CategoryInfo, CategoryProgress } from '../types';
import { CATEGORIES, createEmptyCategoryProgress } from '../types';
import { ProgressBar } from './ProgressBar';

interface CategorySelectProps {
  progress: Record<string, CategoryProgress>;
  onSelectCategory: (category: CategoryType) => void;
  className?: string;
}

interface CategoryCardProps {
  category: CategoryInfo;
  progress: CategoryProgress;
  onClick: () => void;
}

function CategoryCard({ category, progress, onClick }: CategoryCardProps) {
  const hasStarted = progress.totalAttempted > 0;

  return (
    <button
      onClick={onClick}
      className="bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600
                 rounded-lg p-4 text-left transition-all duration-200
                 hover:transform hover:scale-[1.02] hover:shadow-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{category.icon}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            category.type === 'defensive'
              ? 'bg-blue-900 text-blue-300'
              : 'bg-orange-900 text-orange-300'
          }`}
        >
          {category.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-white mb-1">{category.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">
        {category.description}
      </p>

      {/* Progress */}
      {hasStarted ? (
        <div>
          <ProgressBar percentage={progress.masteryPercentage} size="sm" />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>{progress.correctCount}/{progress.totalAttempted} correct</span>
            <span>{progress.masteryPercentage}% mastery</span>
          </div>
        </div>
      ) : (
        <div className="text-xs text-gray-500 italic">Not started</div>
      )}
    </button>
  );
}

export function CategorySelect({
  progress,
  onSelectCategory,
  className = '',
}: CategorySelectProps) {
  const defensiveCategories = CATEGORIES.filter((c) => c.type === 'defensive');
  const offensiveCategories = CATEGORIES.filter((c) => c.type === 'offensive');

  return (
    <div className={className}>
      {/* Defensive Categories */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          Defensive Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {defensiveCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              progress={progress[category.id] || createEmptyCategoryProgress()}
              onClick={() => onSelectCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Offensive Categories */}
      <div>
        <h2 className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
          Offensive Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {offensiveCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              progress={progress[category.id] || createEmptyCategoryProgress()}
              onClick={() => onSelectCategory(category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySelect;
