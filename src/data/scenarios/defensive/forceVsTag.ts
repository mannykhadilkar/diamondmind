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
];
