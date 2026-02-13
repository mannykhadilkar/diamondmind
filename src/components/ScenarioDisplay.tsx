import type { Scenario } from '../types';
import { FieldVisualization } from './FieldVisualization';
import { CATEGORIES } from '../types';

interface ScenarioDisplayProps {
  scenario: Scenario;
  scenarioNumber: number;
  totalScenarios: number;
  className?: string;
}

export function ScenarioDisplay({
  scenario,
  scenarioNumber,
  totalScenarios,
  className = '',
}: ScenarioDisplayProps) {
  const category = CATEGORIES.find((c) => c.id === scenario.category);
  const { situation } = scenario;

  // Format the situation description
  const outsText = situation.outs === 0 ? 'No outs' : situation.outs === 1 ? '1 out' : '2 outs';

  const runnersText = (() => {
    const onBase: string[] = [];
    if (situation.runners.first) onBase.push('1st');
    if (situation.runners.second) onBase.push('2nd');
    if (situation.runners.third) onBase.push('3rd');

    if (onBase.length === 0) return 'Bases empty';
    if (onBase.length === 3) return 'Bases loaded';
    return `Runner${onBase.length > 1 ? 's' : ''} on ${onBase.join(' & ')}`;
  })();

  return (
    <div className={className}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{category?.icon}</span>
          <span className="text-gray-400 text-sm">{category?.name}</span>
        </div>
        <span className="text-sm text-gray-500">
          {scenarioNumber} of {totalScenarios}
        </span>
      </div>

      {/* Situation Summary */}
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="px-3 py-1 bg-gray-700 rounded-full">
            {outsText}
          </span>
          <span className="px-3 py-1 bg-gray-700 rounded-full">
            {runnersText}
          </span>
          {situation.battedBall !== 'none' && (
            <span className="px-3 py-1 bg-red-900 text-red-200 rounded-full">
              {situation.battedBall.replace(/-/g, ' ')}
            </span>
          )}
          {situation.fieldPosition && (
            <span className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full">
              You: {situation.fieldPosition.replace(/-/g, ' ')}
            </span>
          )}
        </div>

        {/* Additional context */}
        {(situation.runnerSpeed || situation.throwDistance) && (
          <div className="flex flex-wrap gap-3 text-sm mt-2 pt-2 border-t border-gray-700">
            {situation.runnerSpeed && (
              <span className="text-gray-400">
                Runner speed: <span className="text-white">{situation.runnerSpeed}</span>
              </span>
            )}
            {situation.throwDistance && (
              <span className="text-gray-400">
                Throw: <span className="text-white">{situation.throwDistance}</span>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Field Visualization */}
      <div className="mb-4">
        <FieldVisualization
          runners={situation.runners}
          battedBall={situation.battedBall}
          fielderPosition={situation.fieldPosition}
          ballLocation={situation.ballLocation}
          showFielderNumbers={true}
        />
      </div>

      {/* Question */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-white">
          {scenario.question}
        </h2>
      </div>
    </div>
  );
}

export default ScenarioDisplay;
