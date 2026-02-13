# Softball-IQ-Simulator MVP Implementation Plan

## Current Sprint: Infrastructure Setup

**Scope:** Steps 1 & 2 only (no scenarios yet)

**Deliverables:**
1. Scaffolded Vite + React + TypeScript project with Tailwind
2. Complete TypeScript type definitions (`src/types/index.ts`)
3. XState machine skeleton (`src/machines/appMachine.ts`)
4. Directory structure ready for components/hooks/utils

**Critical Logic to Implement:**
- Infield fly rule: `outs < 2 && runners.first && runners.second`
- Variance engine: `Math.random() < 0.2`
- Persistence: localStorage hook pattern

---

## Overview
A client-side React application for training high school/travel ball softball players through systematic skill drills. Uses a finite state machine architecture to guide players through categorized scenarios.

## Tech Stack
- **Framework:** React 18 with Vite
- **State Management:** XState v5 (FSM)
- **Styling:** Tailwind CSS
- **Deployment:** AWS S3 + CloudFront (static hosting)
- **Language:** TypeScript

## MVP Scope

### Skill Categories (7 total, ~40-50 scenarios)

**Defensive (4 categories):**
1. Force Play vs Tag Play Decisions (5-8 scenarios)
2. Routine Plays by Position (5-8 scenarios)
3. Pop-Up Priority & Infield Fly Rule (5-8 scenarios)
4. Lead Runner Decisions (5-8 scenarios)

**Offensive (3 categories):**
1. Ground Ball Reads (5-8 scenarios)
2. Tag-Up Rules (5-8 scenarios)
3. Two-Out Baserunning (5-8 scenarios)

### Features
- Category selection screen
- Scenario presentation with field visualization
- Multiple choice decision input
- Immediate feedback with rule explanations
- Progress tracking per category (local storage)
- 20% fielder error variance on outcomes

---

## Architecture

### State Machine (XState)

```
AppMachine
├── idle (category selection)
├── drilling
│   ├── presenting_scenario
│   ├── awaiting_input
│   ├── evaluating (apply error variance)
│   ├── showing_feedback
│   └── next_or_complete
├── category_complete (show mastery stats)
└── reviewing_progress
```

### Data Structures

```typescript
// Scenario definition
interface Scenario {
  id: string;
  category: CategoryType;
  situation: {
    outs: 0 | 1 | 2;
    runners: RunnerPositions; // { first?: boolean, second?: boolean, third?: boolean }
    battedBall: BattedBallType;
    fieldPosition?: Position; // for defensive scenarios
  };
  question: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  errorVarianceApplies: boolean; // can fielder error affect this?
}

// User progress (localStorage)
interface Progress {
  [categoryId: string]: {
    completed: string[]; // scenario IDs
    correct: number;
    total: number;
    mastery: number; // percentage
  };
}
```

---

## File Structure

```
/softball-iq-simulator
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── machines/
│   │   └── appMachine.ts          # XState machine definition
│   ├── components/
│   │   ├── CategorySelect.tsx     # Drill category picker
│   │   ├── FieldVisualization.tsx # SVG softball field
│   │   ├── ScenarioDisplay.tsx    # Question + situation display
│   │   ├── DecisionInput.tsx      # Multiple choice buttons
│   │   ├── FeedbackPanel.tsx      # Correct/incorrect + explanation
│   │   ├── ProgressBar.tsx        # Category progress indicator
│   │   └── MasteryStats.tsx       # Category completion stats
│   ├── data/
│   │   ├── scenarios/
│   │   │   ├── defensive/
│   │   │   │   ├── forceVsTag.ts
│   │   │   │   ├── routinePlays.ts
│   │   │   │   ├── popUpPriority.ts
│   │   │   │   └── leadRunner.ts
│   │   │   └── offensive/
│   │   │       ├── groundBallReads.ts
│   │   │       ├── tagUpRules.ts
│   │   │       └── twoOutBaserunning.ts
│   │   └── index.ts               # Scenario aggregator
│   ├── hooks/
│   │   ├── useProgress.ts         # localStorage progress hook
│   │   └── useErrorVariance.ts    # 20% error chance logic
│   ├── utils/
│   │   ├── evaluateAnswer.ts      # Check correctness + apply variance
│   │   └── shuffleScenarios.ts    # Randomize scenario order
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   └── styles/
│       └── index.css              # Tailwind imports + custom styles
└── public/
    └── favicon.ico
```

---

## Implementation Steps

### Step 1: Project Setup
- Initialize Vite + React + TypeScript project
- Install dependencies: xstate, @xstate/react, tailwindcss
- Configure Tailwind CSS
- Set up project structure

### Step 2: Define Types & Data Structures
- Create TypeScript interfaces in `src/types/`
- Define scenario schema
- Define progress tracking schema

### Step 3: Build XState Machine
- Implement `appMachine.ts` with all states and transitions
- Handle category selection → drilling → completion flow
- Integrate error variance into evaluation state

### Step 4: Create Field Visualization Component
- Build SVG softball diamond
- Add runner position indicators
- Add fielder position indicators
- Add batted ball trajectory indicator
- Make responsive for tablet/laptop

### Step 5: Build Core UI Components
- CategorySelect: Grid of 7 category cards with progress indicators
- ScenarioDisplay: Situation description + field visual
- DecisionInput: Multiple choice buttons (2-4 options)
- FeedbackPanel: Correct/incorrect state, explanation text, next button

### Step 6: Implement Progress System
- useProgress hook with localStorage
- Track completed scenarios per category
- Calculate mastery percentage
- MasteryStats component for category completion

### Step 7: Create Scenario Content
- Write 5-8 scenarios for each of 7 categories
- Include varied situations (different outs, runners, ball locations)
- Write clear explanations for correct answers
- Mark which scenarios can be affected by error variance

### Step 8: Integration & Polish
- Wire all components together with XState
- Add transitions/animations for feedback
- Responsive design testing (tablet vs laptop)
- Error variance visual feedback ("Fielder bobbled the ball!")

### Step 9: Deployment
- Build production bundle
- Create S3 bucket with static website hosting
- Configure CloudFront distribution
- Deploy and test

---

## Key Implementation Details

### Error Variance (20%)
```typescript
function evaluateWithVariance(isCorrect: boolean, varianceApplies: boolean): Result {
  if (!varianceApplies) return { outcome: isCorrect ? 'correct' : 'incorrect' };

  const errorOccurred = Math.random() < 0.2;

  if (errorOccurred) {
    return {
      outcome: isCorrect ? 'correct_but_error' : 'incorrect_but_error',
      message: "Fielder error! The ball was bobbled."
    };
  }
  return { outcome: isCorrect ? 'correct' : 'incorrect' };
}
```

### Infield Fly Rule Logic
Conditions to trigger:
- Less than 2 outs
- Runners on 1st & 2nd OR bases loaded
- Fair fly ball that can be caught by infielder with ordinary effort
- Batter is automatically out (runners do NOT have to run)

### Lead Runner Decision Factors
Scenario should present:
- Runner speed (fast/average/slow)
- Out count
- Score differential
- Fielder arm strength
- Throw distance

Player must weigh: sure out at first vs. riskier throw to lead runner.

---

## Verification Plan

### Manual Testing
1. **Category Selection:** Verify all 7 categories load, show correct progress
2. **Scenario Flow:** Complete full drill in each category
3. **Correct Answer:** Verify positive feedback + explanation displays
4. **Incorrect Answer:** Verify constructive feedback + explanation
5. **Error Variance:** Run 20+ scenarios, verify ~20% show error messages
6. **Progress Persistence:** Refresh browser, verify progress saved
7. **Category Mastery:** Complete all scenarios, verify completion state
8. **Responsive:** Test on tablet viewport (768px) and laptop (1280px)

### Automated Tests (Optional for MVP)
- Unit tests for `evaluateAnswer` utility
- Unit tests for XState machine transitions
- Integration test for localStorage progress

---

## Future Phases (Post-MVP)

### Phase 2 - Intermediate Skills
- Double Play Execution
- Cutoffs & Relays
- Bunt Defense (basic)
- Advancing on Throws
- First-to-Third on Singles
- Primary/Secondary Leads

### Phase 3 - Advanced Skills
- First & Third Defense
- Rundowns
- Wheel Play
- Steal Coverage
- Steal Decisions
- Delayed Steal

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `package.json` | Create | Dependencies and scripts |
| `vite.config.ts` | Create | Vite configuration |
| `tailwind.config.js` | Create | Tailwind setup |
| `tsconfig.json` | Create | TypeScript config |
| `src/machines/appMachine.ts` | Create | XState FSM |
| `src/components/*.tsx` | Create | All UI components |
| `src/data/scenarios/**/*.ts` | Create | Scenario content |
| `src/hooks/*.ts` | Create | Progress + variance hooks |
| `src/types/index.ts` | Create | TypeScript interfaces |
