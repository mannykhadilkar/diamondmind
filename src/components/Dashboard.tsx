import type { CategoryType, CategoryProgress, UserProgress } from '../types';
import { CATEGORIES, createEmptyCategoryProgress } from '../types';

interface DashboardProps {
  progress: UserProgress;
  onSelectCategory: (category: CategoryType) => void;
  onClose: () => void;
  className?: string;
}

interface CategoryStatCardProps {
  category: typeof CATEGORIES[number];
  progress: CategoryProgress;
  onPractice: () => void;
}

function CategoryStatCard({ category, progress, onPractice }: CategoryStatCardProps) {
  const hasStarted = progress.totalAttempted > 0;
  const percentage = progress.masteryPercentage;
  const isDefensive = category.type === 'defensive';

  // Color coding based on performance
  const getPerformanceColor = () => {
    if (!hasStarted) return 'text-gray-500';
    if (percentage >= 80) return 'text-correct';
    if (percentage >= 50) return 'text-team-gold';
    return 'text-team-red';
  };

  const getProgressBarColor = () => {
    if (!hasStarted) return 'bg-gray-600';
    if (percentage >= 80) return 'bg-gradient-to-r from-correct-dark to-correct';
    if (percentage >= 50) return 'bg-gradient-to-r from-team-gold to-yellow-400';
    return 'bg-gradient-to-r from-team-red to-red-400';
  };

  const getBorderColor = () => {
    if (!hasStarted) return 'border-gray-700';
    if (percentage >= 80) return 'border-correct/50';
    if (percentage >= 50) return 'border-team-gold/50';
    return 'border-team-red/50';
  };

  return (
    <div
      className={`
        bg-gray-800/80 rounded-xl p-4 border-2 ${getBorderColor()}
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg
        animate-slide-up stripe-overlay
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`
            w-10 h-10 rounded-full flex items-center justify-center
            ${isDefensive ? 'bg-defensive-primary/30' : 'bg-offensive-primary/30'}
          `}
        >
          <span className="text-xl">{category.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-white text-sm truncate">{category.name}</h4>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              isDefensive
                ? 'bg-defensive-primary/40 text-blue-200'
                : 'bg-offensive-primary/40 text-orange-200'
            }`}
          >
            {category.type}
          </span>
        </div>
      </div>

      {/* Stats */}
      {hasStarted ? (
        <div className="space-y-3">
          {/* Percentage */}
          <div className="flex items-baseline justify-between">
            <span className={`text-3xl font-bold ${getPerformanceColor()}`}>
              {percentage}%
            </span>
            <span className="text-xs text-gray-400">
              {progress.correctCount}/{progress.totalAttempted}
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getProgressBarColor()}`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          {/* Practice button */}
          <button
            onClick={onPractice}
            className={`
              w-full py-2 rounded-lg text-sm font-bold transition-all duration-200
              ${isDefensive
                ? 'bg-defensive-primary/30 hover:bg-defensive-primary/50 text-blue-200'
                : 'bg-offensive-primary/30 hover:bg-offensive-primary/50 text-orange-200'
              }
            `}
          >
            Practice
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-gray-500 text-sm">Not started yet</div>
          <button
            onClick={onPractice}
            className={`
              w-full py-2 rounded-lg text-sm font-bold transition-all duration-200
              ${isDefensive
                ? 'bg-gradient-defensive text-white hover:shadow-glow-blue'
                : 'bg-gradient-offensive text-white hover:shadow-glow-red'
              }
            `}
          >
            Start Learning
          </button>
        </div>
      )}
    </div>
  );
}

function CircularProgress({ percentage }: { percentage: number }) {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  const getColor = () => {
    if (percentage >= 80) return '#22c55e';
    if (percentage >= 50) return '#f59e0b';
    return '#dc2626';
  };

  return (
    <div className="relative w-36 h-36">
      <svg className="w-full h-full circular-progress" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#374151"
          strokeWidth="8"
          className="circular-progress-bg"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={getColor()}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          className="circular-progress-fill"
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white">{percentage}%</span>
        <span className="text-xs text-gray-400">Overall</span>
      </div>
    </div>
  );
}

export function Dashboard({
  progress,
  onSelectCategory,
  onClose,
  className = '',
}: DashboardProps) {
  const defensiveCategories = CATEGORIES.filter((c) => c.type === 'defensive');
  const offensiveCategories = CATEGORIES.filter((c) => c.type === 'offensive');

  // Calculate overall stats
  const allProgress = CATEGORIES.map((c) => progress[c.id] || createEmptyCategoryProgress());
  const totalAttempted = allProgress.reduce((sum, p) => sum + p.totalAttempted, 0);
  const totalCorrect = allProgress.reduce((sum, p) => sum + p.correctCount, 0);
  const overallPercentage = totalAttempted > 0
    ? Math.round((totalCorrect / totalAttempted) * 100)
    : 0;

  // Calculate section stats
  const defensiveProgress = defensiveCategories
    .map((c) => progress[c.id] || createEmptyCategoryProgress());
  const defensiveAttempted = defensiveProgress.reduce((sum, p) => sum + p.totalAttempted, 0);
  const defensiveCorrect = defensiveProgress.reduce((sum, p) => sum + p.correctCount, 0);
  const defensivePercentage = defensiveAttempted > 0
    ? Math.round((defensiveCorrect / defensiveAttempted) * 100)
    : 0;

  const offensiveProgress = offensiveCategories
    .map((c) => progress[c.id] || createEmptyCategoryProgress());
  const offensiveAttempted = offensiveProgress.reduce((sum, p) => sum + p.totalAttempted, 0);
  const offensiveCorrect = offensiveProgress.reduce((sum, p) => sum + p.correctCount, 0);
  const offensivePercentage = offensiveAttempted > 0
    ? Math.round((offensiveCorrect / offensiveAttempted) * 100)
    : 0;

  const categoriesStarted = allProgress.filter((p) => p.totalAttempted > 0).length;

  return (
    <div className={`${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-hero text-white mb-1">Your Progress</h2>
          <p className="text-body">Track your softball IQ mastery</p>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800"
        >
          <span className="text-2xl">×</span>
        </button>
      </div>

      {/* Overall Stats Card */}
      <div className="bg-gradient-to-r from-team-blue/20 via-team-gold/10 to-team-red/20 rounded-2xl p-6 mb-8 border border-gray-700 animate-slide-up">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Circular Progress */}
          <CircularProgress percentage={overallPercentage} />

          {/* Stats Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-white">{totalAttempted}</div>
              <div className="text-xs text-gray-400">Questions</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-correct">{totalCorrect}</div>
              <div className="text-xs text-gray-400">Correct</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-team-gold">{categoriesStarted}</div>
              <div className="text-xs text-gray-400">Categories</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-team-blue">{CATEGORIES.length}</div>
              <div className="text-xs text-gray-400">Total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Defensive Summary */}
        <div className="bg-gradient-to-r from-defensive-primary/30 to-defensive-accent/10 rounded-xl p-5 border border-defensive-primary/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-4 bg-gradient-defensive rounded-full shadow-glow-blue"></span>
            <h3 className="font-bold text-white">Defensive Skills</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-defensive-accent">
              {defensivePercentage}%
            </span>
            <span className="text-sm text-gray-400">
              ({defensiveCorrect}/{defensiveAttempted})
            </span>
          </div>
          <div className="mt-3 h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-defensive rounded-full"
              style={{ width: `${defensivePercentage}%` }}
            />
          </div>
        </div>

        {/* Offensive Summary */}
        <div className="bg-gradient-to-r from-offensive-primary/30 to-offensive-accent/10 rounded-xl p-5 border border-offensive-primary/30">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-4 h-4 bg-gradient-offensive rounded-full shadow-glow-red"></span>
            <h3 className="font-bold text-white">Offensive Skills</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-offensive-accent">
              {offensivePercentage}%
            </span>
            <span className="text-sm text-gray-400">
              ({offensiveCorrect}/{offensiveAttempted})
            </span>
          </div>
          <div className="mt-3 h-2 bg-gray-700/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-offensive rounded-full"
              style={{ width: `${offensivePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Defensive Categories */}
      <div className="mb-8">
        <h3 className="text-section text-white mb-4 flex items-center gap-3">
          <span className="w-3 h-3 bg-gradient-defensive rounded-full"></span>
          Defensive Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {defensiveCategories.map((category) => (
            <CategoryStatCard
              key={category.id}
              category={category}
              progress={progress[category.id] || createEmptyCategoryProgress()}
              onPractice={() => onSelectCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Offensive Categories */}
      <div>
        <h3 className="text-section text-white mb-4 flex items-center gap-3">
          <span className="w-3 h-3 bg-gradient-offensive rounded-full"></span>
          Offensive Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
          {offensiveCategories.map((category) => (
            <CategoryStatCard
              key={category.id}
              category={category}
              progress={progress[category.id] || createEmptyCategoryProgress()}
              onPractice={() => onSelectCategory(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={onClose}
          className="px-8 py-3 btn-gradient-primary rounded-xl text-white font-bold"
        >
          Back to Categories
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
