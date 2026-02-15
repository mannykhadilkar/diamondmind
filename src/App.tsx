import { useMachine } from '@xstate/react';
import { useState } from 'react';
import { appMachine } from './machines/appMachine';
import {
  BaseSelector,
  CategorySelect,
  Dashboard,
  PositionSelector,
  ScenarioDisplay,
  DecisionInput,
  FeedbackPanel,
  MasteryStats,
} from './components';
import { categoryHasScenarios, getScenarioCounts } from './data/scenarios';
import type { CategoryType, FieldPosition, RunnerBase } from './types';
import { CATEGORIES } from './types';

function App() {
  const [state, send] = useMachine(appMachine);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const { session, progress, lastResult, pendingCategory } = state.context;

  // Get current scenario if in a drilling session
  const currentScenario = session?.scenarios[session.currentScenarioIndex];

  // Determine which view to show based on state
  const isIdle = state.matches('idle');
  const isSelectingPosition = state.matches('selectingPosition');
  const isSelectingBase = state.matches('selectingBase');
  const isDrilling = state.matches('drilling');
  const isPresentingScenario = state.matches({ drilling: 'presentingScenario' });
  const isShowingFeedback = state.matches({ drilling: 'showingFeedback' });
  const isCategoryComplete = state.matches('categoryComplete');
  const isViewingDashboard = state.matches('viewingDashboard');

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

  // Handle position selection
  const handleSelectPosition = (position: FieldPosition | undefined) => {
    send({ type: 'SELECT_POSITION', position });
  };

  // Handle back to categories from position selection
  const handleBackToCategories = () => {
    send({ type: 'BACK_TO_CATEGORIES' });
  };

  // Handle base selection for offensive categories
  const handleSelectBase = (base: RunnerBase | undefined) => {
    send({ type: 'SELECT_BASE', base });
  };

  // Handle dashboard navigation
  const handleViewDashboard = () => {
    send({ type: 'VIEW_DASHBOARD' });
  };

  const handleCloseDashboard = () => {
    send({ type: 'CLOSE_DASHBOARD' });
  };

  // Get scenario counts for display
  const scenarioCounts = getScenarioCounts();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/90 border-b border-gray-700 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={handleReturnToMenu}
            className="flex items-center gap-3 hover:text-team-gold transition-colors group"
          >
            <span className="text-3xl group-hover:animate-bounce">⚾</span>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-team-gold to-yellow-300 bg-clip-text text-transparent">
                Softball IQ
              </h1>
              <span className="text-xs text-gray-500 hidden sm:block">Master the Game</span>
            </div>
          </button>

          <div className="flex items-center gap-4">
            {/* Session progress indicator */}
            {isDrilling && session && (
              <div className="flex items-center gap-2 bg-gray-700/50 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-team-gold rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-300">
                  {session.currentScenarioIndex + 1} / {session.scenarios.length}
                </span>
              </div>
            )}

            {/* View Progress button - show only on idle */}
            {isIdle && (
              <button
                onClick={handleViewDashboard}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-team-blue/30 to-defensive-accent/30
                           border border-team-blue/50 rounded-lg text-sm font-medium text-white
                           hover:from-team-blue/50 hover:to-defensive-accent/50 hover:border-team-blue
                           transition-all duration-200"
              >
                <span className="text-lg">📊</span>
                <span className="hidden sm:inline">View Progress</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 pb-20">
        {/* IDLE STATE - Category Selection */}
        {isIdle && (
          <div className="animate-slide-up">
            <div className="text-center mb-10">
              <h2 className="text-hero mb-3 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Choose a Skill Category to Master
              </h2>
              <p className="text-body max-w-xl mx-auto">
                Build your IQ so you know ball.
              </p>
            </div>

            <CategorySelect
              progress={progress}
              onSelectCategory={handleSelectCategory}
            />
          </div>
        )}

        {/* VIEWING DASHBOARD STATE */}
        {isViewingDashboard && (
          <Dashboard
            progress={progress}
            onSelectCategory={handleSelectCategory}
            onClose={handleCloseDashboard}
          />
        )}

        {/* SELECTING POSITION STATE - Position Selection */}
        {isSelectingPosition && pendingCategory && (
          <div className="animate-slide-up">
            <PositionSelector
              category={pendingCategory}
              onSelectPosition={handleSelectPosition}
              onBack={handleBackToCategories}
            />
          </div>
        )}

        {/* SELECTING BASE STATE - Base Selection for Offensive */}
        {isSelectingBase && pendingCategory && (
          <div className="animate-slide-up">
            <BaseSelector
              category={pendingCategory}
              onSelectBase={handleSelectBase}
              onBack={handleBackToCategories}
            />
          </div>
        )}

        {/* DRILLING STATE - Presenting Scenario */}
        {isPresentingScenario && currentScenario && session && (
          <div className="max-w-2xl mx-auto animate-slide-up">
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
              className="mb-8"
            />

            <div className="flex justify-between items-center">
              <button
                onClick={handleReturnToMenu}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors
                           hover:bg-gray-800 rounded-lg"
              >
                ← Exit Drill
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedOption}
                className={`px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                  selectedOption
                    ? 'btn-gradient-action animate-glow-pulse'
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
      <footer className="fixed bottom-0 left-0 right-0 bg-gray-800/95 border-t border-gray-700 backdrop-blur-sm z-40">
        {/* Available Drills - show only on idle */}
        {isIdle && (
          <div className="max-w-5xl mx-auto px-4 py-3 border-b border-gray-700/50">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
              <span className="text-xs font-bold text-team-gold uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-team-gold rounded-full"></span>
                Available
              </span>
              <div className="flex gap-2">
                {CATEGORIES.map((cat) => {
                  const count = scenarioCounts[cat.id];
                  const available = count > 0;
                  return (
                    <span
                      key={cat.id}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${
                        available
                          ? 'bg-correct/20 text-correct border border-correct/30'
                          : 'bg-gray-700/50 text-gray-500 border border-gray-600'
                      }`}
                    >
                      {cat.name}: {count > 0 ? count : 'Soon'}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="max-w-5xl mx-auto px-4 py-2 text-center text-xs text-gray-500">
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-team-gold rounded-full"></span>
            Softball IQ Simulator
            <span className="w-1.5 h-1.5 bg-team-gold rounded-full"></span>
            Training for High School & Travel Ball Players
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
