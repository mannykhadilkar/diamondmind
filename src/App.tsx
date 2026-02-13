import { useMachine } from '@xstate/react';
import { useState } from 'react';
import { appMachine } from './machines/appMachine';
import {
  CategorySelect,
  ScenarioDisplay,
  DecisionInput,
  FeedbackPanel,
  MasteryStats,
} from './components';
import { categoryHasScenarios, getScenarioCounts } from './data/scenarios';
import type { CategoryType } from './types';
import { CATEGORIES } from './types';

function App() {
  const [state, send] = useMachine(appMachine);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { session, progress, lastResult } = state.context;

  // Get current scenario if in a drilling session
  const currentScenario = session?.scenarios[session.currentScenarioIndex];

  // Determine which view to show based on state
  const isIdle = state.matches('idle');
  const isDrilling = state.matches('drilling');
  const isPresentingScenario = state.matches({ drilling: 'presentingScenario' });
  const isShowingFeedback = state.matches({ drilling: 'showingFeedback' });
  const isCategoryComplete = state.matches('categoryComplete');

  // Handle category selection
  const handleSelectCategory = (category: CategoryType) => {
    if (!categoryHasScenarios(category)) {
      alert('This category is coming soon! Try Force vs Tag, Pop-Up Priority, or Ground Ball Reads.');
      return;
    }
    setSelectedOption(null);
    send({ type: 'SELECT_CATEGORY', category });
  };

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (selectedOption) {
      send({ type: 'SUBMIT_ANSWER', optionId: selectedOption });
    }
  };

  // Handle next scenario
  const handleNext = () => {
    setSelectedOption(null);
    send({ type: 'NEXT_SCENARIO' });
  };

  // Handle return to menu
  const handleReturnToMenu = () => {
    setSelectedOption(null);
    send({ type: 'RETURN_TO_MENU' });
  };

  // Handle play again
  const handlePlayAgain = () => {
    setSelectedOption(null);
    send({ type: 'PLAY_AGAIN' });
  };

  // Get scenario counts for display
  const scenarioCounts = getScenarioCounts();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleReturnToMenu}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <span className="text-2xl">⚾</span>
            <h1 className="text-xl font-bold">Softball IQ</h1>
          </button>

          {/* Session progress indicator */}
          {isDrilling && session && (
            <div className="text-sm text-gray-400">
              {session.currentScenarioIndex + 1} / {session.scenarios.length}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* IDLE STATE - Category Selection */}
        {isIdle && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Choose a Skill Category</h2>
              <p className="text-gray-400">
                Master softball situations through focused practice drills
              </p>
            </div>

            {/* Available scenarios indicator */}
            <div className="mb-6 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Available Drills
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const count = scenarioCounts[cat.id];
                  const available = count > 0;
                  return (
                    <span
                      key={cat.id}
                      className={`text-xs px-2 py-1 rounded ${
                        available
                          ? 'bg-green-900 text-green-300'
                          : 'bg-gray-700 text-gray-500'
                      }`}
                    >
                      {cat.name}: {count > 0 ? `${count} scenarios` : 'Coming soon'}
                    </span>
                  );
                })}
              </div>
            </div>

            <CategorySelect
              progress={progress}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        )}

        {/* DRILLING STATE - Presenting Scenario */}
        {isPresentingScenario && currentScenario && session && (
          <div className="max-w-2xl mx-auto">
            <ScenarioDisplay
              scenario={currentScenario}
              scenarioNumber={session.currentScenarioIndex + 1}
              totalScenarios={session.scenarios.length}
              className="mb-6"
            />

            <DecisionInput
              options={currentScenario.options}
              onSelect={setSelectedOption}
              selectedOptionId={selectedOption || undefined}
              className="mb-6"
            />

            <div className="flex justify-between items-center">
              <button
                onClick={handleReturnToMenu}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                ← Exit Drill
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOption}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedOption
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            </div>
          </div>
        )}

        {/* DRILLING STATE - Showing Feedback */}
        {isShowingFeedback && currentScenario && session && lastResult && (
          <div className="max-w-2xl mx-auto">
            <ScenarioDisplay
              scenario={currentScenario}
              scenarioNumber={session.currentScenarioIndex + 1}
              totalScenarios={session.scenarios.length}
              className="mb-6"
            />

            <DecisionInput
              options={currentScenario.options}
              onSelect={() => {}}
              disabled
              selectedOptionId={
                session.results[session.currentScenarioIndex]
                  ? currentScenario.options.find(
                      (_, i) =>
                        currentScenario.options[i].id ===
                        (selectedOption || currentScenario.correctOptionId)
                    )?.id || selectedOption || undefined
                  : undefined
              }
              correctOptionId={currentScenario.correctOptionId}
              showResult
              className="mb-6"
            />

            <FeedbackPanel
              result={lastResult}
              explanation={currentScenario.explanation}
              onNext={handleNext}
              onReturnToMenu={handleReturnToMenu}
              isLastScenario={
                session.currentScenarioIndex >= session.scenarios.length - 1
              }
            />
          </div>
        )}

        {/* CATEGORY COMPLETE STATE */}
        {isCategoryComplete && session && (
          <div className="max-w-md mx-auto">
            <MasteryStats
              category={session.category}
              results={session.results}
              onReturnToMenu={handleReturnToMenu}
              onPlayAgain={handlePlayAgain}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 py-2">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-gray-500">
          Softball IQ Simulator • Training for High School & Travel Ball Players
        </div>
      </footer>
    </div>
  );
}

export default App;
