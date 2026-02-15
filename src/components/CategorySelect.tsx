import { useState } from 'react';
import type { CategoryType, CategoryInfo, CategoryProgress } from '../types';
import { CATEGORIES, createEmptyCategoryProgress } from '../types';

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
  const isDefensive = category.type === 'defensive';

  const cardGradient = isDefensive
    ? 'from-defensive-primary/30 via-defensive-primary/20 to-defensive-accent/10'
    : 'from-offensive-primary/30 via-offensive-primary/20 to-offensive-accent/10';

  const hoverGlow = isDefensive ? 'hover:shadow-glow-blue' : 'hover:shadow-glow-red';
  const borderHover = isDefensive ? 'hover:border-defensive-accent' : 'hover:border-offensive-accent';
  const iconBg = isDefensive ? 'bg-defensive-primary/40' : 'bg-offensive-primary/40';
  const iconBorder = isDefensive ? 'border-defensive-accent' : 'border-offensive-accent';

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-gradient-to-br ${cardGradient}
        border border-gray-700 ${borderHover}
        rounded-xl p-5 text-left transition-all duration-300
        hover:transform hover:scale-[1.03] ${hoverGlow}
        focus:outline-none focus:ring-2 focus:ring-team-gold
        animate-slide-up stripe-overlay
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        {/* Icon with colored background circle */}
        <div
          className={`
            w-14 h-14 rounded-full flex items-center justify-center
            ${iconBg} border-2 ${iconBorder}
            transition-transform duration-300 group-hover:scale-110
          `}
        >
          <span className="text-3xl">{category.icon}</span>
        </div>

        {/* Category type badge */}
        <span
          className={`
            text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider
            ${isDefensive
              ? 'bg-defensive-primary text-blue-100'
              : 'bg-offensive-primary text-orange-100'
            }
          `}
        >
          {category.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        {category.description}
      </p>

      {/* Progress */}
      {hasStarted ? (
        <div className="space-y-2">
          <div className="progress-bar-enhanced">
            <div
              className={`progress-fill ${progress.masteryPercentage >= 80 ? 'success' : progress.masteryPercentage < 50 ? 'danger' : ''}`}
              style={{ width: `${progress.masteryPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-400">
              {progress.correctCount}/{progress.totalAttempted} correct
            </span>
            <span
              className={`font-bold ${
                progress.masteryPercentage >= 80
                  ? 'text-correct'
                  : progress.masteryPercentage >= 50
                    ? 'text-team-gold'
                    : 'text-gray-400'
              }`}
            >
              {progress.masteryPercentage}% mastery
            </span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
          <span>Not started</span>
        </div>
      )}
    </button>
  );
}

type TabType = 'all' | 'defensive' | 'offensive';

export function CategorySelect({
  progress,
  onSelectCategory,
  className = '',
}: CategorySelectProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const defensiveCategories = CATEGORIES.filter((c) => c.type === 'defensive');
  const offensiveCategories = CATEGORIES.filter((c) => c.type === 'offensive');

  const getFilteredCategories = () => {
    switch (activeTab) {
      case 'defensive':
        return defensiveCategories;
      case 'offensive':
        return offensiveCategories;
      default:
        return CATEGORIES;
    }
  };

  const filteredCategories = getFilteredCategories();

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-800/80 rounded-full p-1 gap-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`
              tab-pill
              ${activeTab === 'all'
                ? 'bg-gradient-to-r from-gray-600 to-gray-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }
            `}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveTab('defensive')}
            className={`
              tab-pill tab-pill-defensive
              ${activeTab === 'defensive' ? 'active' : 'text-gray-400'}
            `}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-defensive-accent rounded-full"></span>
              Defensive
            </span>
          </button>
          <button
            onClick={() => setActiveTab('offensive')}
            className={`
              tab-pill tab-pill-offensive
              ${activeTab === 'offensive' ? 'active' : 'text-gray-400'}
            `}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-offensive-accent rounded-full"></span>
              Offensive
            </span>
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      {activeTab === 'all' ? (
        <>
          {/* Defensive Categories */}
          <div className="mb-10">
            <h2 className="text-section text-white mb-5 flex items-center gap-3">
              <span className="w-4 h-4 bg-gradient-defensive rounded-full shadow-glow-blue"></span>
              Defensive Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
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
            <h2 className="text-section text-white mb-5 flex items-center gap-3">
              <span className="w-4 h-4 bg-gradient-offensive rounded-full shadow-glow-red"></span>
              Offensive Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
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
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              progress={progress[category.id] || createEmptyCategoryProgress()}
              onClick={() => onSelectCategory(category.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategorySelect;
