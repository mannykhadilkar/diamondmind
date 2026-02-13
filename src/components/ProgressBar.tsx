interface ProgressBarProps {
  percentage: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  color?: 'default' | 'success' | 'warning';
  className?: string;
}

export function ProgressBar({
  percentage,
  size = 'md',
  showLabel = false,
  color = 'default',
  className = '',
}: ProgressBarProps) {
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  const colorClasses = {
    default: 'bg-blue-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
  };

  // Determine color based on percentage if using default
  const barColor =
    color === 'default'
      ? clampedPercentage >= 80
        ? 'bg-green-500'
        : clampedPercentage >= 50
          ? 'bg-yellow-500'
          : 'bg-blue-500'
      : colorClasses[color];

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>{clampedPercentage}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`${barColor} ${sizeClasses[size]} rounded-full transition-all duration-300`}
          style={{ width: `${clampedPercentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
