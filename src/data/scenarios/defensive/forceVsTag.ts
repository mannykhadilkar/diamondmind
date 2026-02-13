import type { Scenario } from '../../../types';

export const forceVsTagScenarios: Scenario[] = [
  {
    id: 'fvt-1',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
    },
    question: 'Ground ball to you at shortstop. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to second base for the force out', targetBase: 'second' },
      { id: 'b', text: 'Throw to first base for the out', targetBase: 'first' },
      { id: 'c', text: 'Tag the runner coming from first' },
      { id: 'd', text: 'Hold the ball and check the runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on first, there is a force play at second base. Throwing to second gets the lead runner and puts you in position for a double play. This is the smart play with one out.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-2',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'second-base',
    },
    question: 'Ground ball hit right to you at second base. What\'s the play?',
    options: [
      { id: 'a', text: 'Step on second, throw to first for the double play', targetBase: 'second' },
      { id: 'b', text: 'Throw to third base for the force', targetBase: 'third' },
      { id: 'c', text: 'Throw to first base only', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner coming from first' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second and no outs, the 4-6-3 or 4-3 double play is ideal. Step on second for the force, then throw to first. Getting two outs is more valuable than one.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-3',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Ground ball to first base with runner on second. What do you do?',
    options: [
      { id: 'a', text: 'Throw to third to get the lead runner', targetBase: 'third' },
      { id: 'b', text: 'Step on first base for the out', targetBase: 'first' },
      { id: 'c', text: 'Throw to second base', targetBase: 'second' },
      { id: 'd', text: 'Chase the runner back to second' },
    ],
    correctOptionId: 'b',
    explanation:
      'With two outs and a runner on second only, there is NO force at third base - the runner doesn\'t have to advance. Take the sure out at first base. Trying to get the runner at third would require a tag and is risky.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-4',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Bases loaded, ground ball to third. What\'s the best play?',
    options: [
      { id: 'a', text: 'Step on third, throw to first for double play' },
      { id: 'b', text: 'Throw home for the force out', targetBase: 'home' },
      { id: 'c', text: 'Tag the runner coming from second' },
      { id: 'd', text: 'Throw to second base', targetBase: 'second' },
    ],
    correctOptionId: 'b',
    explanation:
      'With bases loaded, there\'s a force at every base including home. Throwing home prevents the run from scoring AND gets an out. With one out, you might even turn a 5-2-3 double play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-5',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'shortstop',
    },
    question: 'Runner on third only, ground ball to short. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home to get the runner', targetBase: 'home' },
      { id: 'b', text: 'Throw to first for the sure out', targetBase: 'first' },
      { id: 'c', text: 'Hold the ball and bluff toward third' },
      { id: 'd', text: 'Run at the batter-runner' },
    ],
    correctOptionId: 'b',
    explanation:
      'With a runner on third only, there is NO force at home - the runner can choose to stay. Take the sure out at first. The runner at third will likely score anyway on contact, so don\'t risk an error trying to get them.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-6',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
    },
    question: 'Two outs, runner on first, grounder to second. Best play?',
    options: [
      { id: 'a', text: 'Throw to first for the third out', targetBase: 'first' },
      { id: 'b', text: 'Step on second for the force out', targetBase: 'second' },
      { id: 'c', text: 'Tag the batter-runner' },
      { id: 'd', text: 'Throw to shortstop covering second', targetBase: 'second' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, you just need one more out to end the inning. Throwing to first is the shorter, easier throw. While stepping on second works too, the throw to first is typically the safer play to secure the third out.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-7',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'shortstop',
    },
    question: 'Bases loaded, no outs, grounder to short. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home to start a double play', targetBase: 'home' },
      { id: 'b', text: 'Step on second, throw to first', targetBase: 'second' },
      { id: 'c', text: 'Throw to third base', targetBase: 'third' },
      { id: 'd', text: 'Tag the runner and throw to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'With bases loaded, there\'s a force at every base. Throwing home cuts down the lead runner AND prevents a run. From there, the catcher can throw to first for the double play (6-2-3). Always prioritize preventing runs with bases loaded.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-8',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
    },
    question: 'Runners on second and third, one out, grounder to short. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw home for the force', targetBase: 'home' },
      { id: 'b', text: 'Throw to first for the sure out', targetBase: 'first' },
      { id: 'c', text: 'Throw to third to tag the runner', targetBase: 'third' },
      { id: 'd', text: 'Hold the ball and check runners' },
    ],
    correctOptionId: 'b',
    explanation:
      'With no runner on first, there\'s NO force at any base except first! The runners on second and third can stay or go - you\'d have to tag them. Take the sure out at first. Don\'t risk throwing home when there\'s no force play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-9',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'second-base',
    },
    question: 'Runners on first and third, no outs, grounder to second. Best option?',
    options: [
      { id: 'a', text: 'Throw home to get the run', targetBase: 'home' },
      { id: 'b', text: 'Start the 4-6-3 double play', targetBase: 'second' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner from first' },
    ],
    correctOptionId: 'b',
    explanation:
      'With first and third, there\'s no force at home (runner on third doesn\'t have to go). Prioritize the double play at second and first. The run might score, but getting two outs is more valuable - especially with no outs.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-10',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Two outs, runners on first and second, grounder to third. What do you do?',
    options: [
      { id: 'a', text: 'Step on third for the force out' },
      { id: 'b', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner coming from second' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second, stepping on third base is the easiest force out - no throw needed! It\'s right there at your feet. With two outs, just get the sure out and end the inning.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-11',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'shortstop',
    },
    question: 'One out, runner on second only, grounder to short. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw to third to get the lead runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'c', text: 'Flip to second base', targetBase: 'second' },
      { id: 'd', text: 'Run at the baserunner' },
    ],
    correctOptionId: 'b',
    explanation:
      'With only a runner on second, there\'s NO force play at third - the runner doesn\'t have to advance. Throwing to third would require a tag. Take the guaranteed out at first instead of risking a play that might not work.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-12',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Runners on first and second, no outs, grounder to first base. What do you do?',
    options: [
      { id: 'a', text: 'Step on first, throw to second for double play', targetBase: 'first' },
      { id: 'b', text: 'Throw to third for the force', targetBase: 'third' },
      { id: 'c', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'd', text: 'Step on first only' },
    ],
    correctOptionId: 'a',
    explanation:
      'Stepping on first removes the force play at second and third! But you get the batter out first. Then you can throw to second where the shortstop is covering - if the runner from first hesitates, you might get the double play (3-6).',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-13',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Runners on corners, one out, grounder fielded at third. What\'s the play?',
    options: [
      { id: 'a', text: 'Tag the runner from third, then throw to first' },
      { id: 'b', text: 'Throw home to get the lead runner', targetBase: 'home' },
      { id: 'c', text: 'Step on third, throw to first', targetBase: 'first' },
      { id: 'd', text: 'Throw to first only', targetBase: 'first' },
    ],
    correctOptionId: 'd',
    explanation:
      'There\'s no force at third or home! The runner on third can stay put. The only force is at second (runner from first) but you\'re at third. Throw to first for the sure out. Don\'t try to tag a runner who might not be running.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-14',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
    },
    question: 'Bases loaded, no outs, slow grounder to second. Best play?',
    options: [
      { id: 'a', text: 'Flip to shortstop at second, turn two', targetBase: 'second' },
      { id: 'b', text: 'Throw home for the force', targetBase: 'home' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Step on second yourself' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a slow roller with bases loaded, the double play is unlikely. Throw home immediately to cut down the lead runner and prevent the run. Getting the out at home is the highest priority - you can still get an out and prevent a run.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-15',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
    },
    question: 'Two outs, runner on third only, grounder to short. What do you do?',
    options: [
      { id: 'a', text: 'Throw home to get the runner', targetBase: 'home' },
      { id: 'b', text: 'Throw to first for the third out', targetBase: 'first' },
      { id: 'c', text: 'Run at the batter' },
      { id: 'd', text: 'Fake to home, then throw to first' },
    ],
    correctOptionId: 'b',
    explanation:
      'With only a runner on third, there is NO force at home - you\'d need to tag the runner. The batter is a force at first. Get the guaranteed out at first to end the inning. Don\'t risk an error trying to get the runner at home.',
    errorVarianceApplies: true,
  },
];
