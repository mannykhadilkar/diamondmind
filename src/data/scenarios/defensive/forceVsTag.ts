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
  // Additional Shortstop scenarios (need 3-5 more, currently 5)
  {
    id: 'fvt-16',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
    },
    question: 'Runners on corners, no outs, grounder to short. What\'s the priority?',
    options: [
      { id: 'a', text: 'Start the double play at second', targetBase: 'second' },
      { id: 'b', text: 'Throw home for the force', targetBase: 'home' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner and throw to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and third, there\'s NO force at home. The runner on third doesn\'t have to go. Start the double play - getting two outs is worth giving up the run.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-17',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
      runnerSpeed: 'slow',
    },
    question: 'Runner on first (slow), one out, grounder to short. Best play?',
    options: [
      { id: 'a', text: 'Turn the 6-4-3 double play', targetBase: 'second' },
      { id: 'b', text: 'Throw to first for one out', targetBase: 'first' },
      { id: 'c', text: 'Tag the runner' },
      { id: 'd', text: 'Hold and check' },
    ],
    correctOptionId: 'a',
    explanation:
      'With one out and a slow runner, you still have time for the double play. Flip to second and let the pivot man turn two. A slow runner gives you extra time.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-18',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
    },
    question: 'Bases loaded, no outs, hard grounder to short. What\'s the smart play?',
    options: [
      { id: 'a', text: 'Throw home to cut off the run', targetBase: 'home' },
      { id: 'b', text: 'Turn the double play at second', targetBase: 'second' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Throw to first', targetBase: 'first' },
    ],
    correctOptionId: 'a',
    explanation:
      'With bases loaded and no outs, throw home! It\'s a force play, it prevents the run, and the catcher can still throw to first for the double play. Home is the priority.',
    errorVarianceApplies: true,
  },
  // Additional Second Base scenarios (need 4-6 more, currently 4)
  {
    id: 'fvt-19',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
    },
    question: 'Runner on first, no outs, grounder right at you. What\'s the play?',
    options: [
      { id: 'a', text: 'Step on second yourself, throw to first', targetBase: 'second' },
      { id: 'b', text: 'Flip to shortstop at second', targetBase: 'second' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner coming from first' },
    ],
    correctOptionId: 'a',
    explanation:
      'When the ball is hit right at you, step on second yourself for the force, then throw to first for the double play. No need to flip when you\'re right there.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-20',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
    },
    question: 'Runners on second and third, one out, grounder to second. What do you do?',
    options: [
      { id: 'a', text: 'Throw to first for the sure out', targetBase: 'first' },
      { id: 'b', text: 'Throw home to get the runner', targetBase: 'home' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Hold and freeze the runners' },
    ],
    correctOptionId: 'a',
    explanation:
      'With no runner on first, there\'s no force at home or third. The runners can stay put or try to advance. Take the sure out at first base.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-21',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'second-base',
    },
    question: 'Runners on first and second, no outs, grounder up the middle. You field it. Best play?',
    options: [
      { id: 'a', text: 'Flip to shortstop for the 4-6-3 double play', targetBase: 'second' },
      { id: 'b', text: 'Throw to third for the force', targetBase: 'third' },
      { id: 'c', text: 'Throw to first', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner and throw to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second, start the double play! Flip to shortstop covering second, and they\'ll relay to first. Getting two outs is the priority.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-22',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
    },
    question: 'Two outs, bases loaded, grounder to second. What\'s the quickest out?',
    options: [
      { id: 'a', text: 'Step on second for the force', targetBase: 'second' },
      { id: 'b', text: 'Throw home', targetBase: 'home' },
      { id: 'c', text: 'Throw to first', targetBase: 'first' },
      { id: 'd', text: 'Throw to third', targetBase: 'third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs and bases loaded, any force out ends the inning. Stepping on second is the quickest - no throw required. Take the easy out.',
    errorVarianceApplies: false,
  },
  // Additional Third Base scenarios (need 5-7 more, currently 3)
  {
    id: 'fvt-23',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Runners on first and second, no outs, grounder to third. Best double play?',
    options: [
      { id: 'a', text: 'Step on third, throw to first', targetBase: 'first' },
      { id: 'b', text: 'Throw to second for the 5-4-3', targetBase: 'second' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner and throw to second' },
    ],
    correctOptionId: 'a',
    explanation:
      'Stepping on third gives you the force out on the lead runner - no throw needed! Then fire to first for the 5-3 double play. Quickest double play from third.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-24',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'One out, runner on second only, grounder to third. Runner is going to third. What do you do?',
    options: [
      { id: 'a', text: 'Tag the runner - no force at third', targetBase: 'third' },
      { id: 'b', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'c', text: 'Step on third for the force' },
      { id: 'd', text: 'Hold and freeze the runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'With only a runner on second, there\'s no force at third! You must TAG the runner. If they\'re running into your tag, make it. Otherwise throw to first for the sure out.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-25',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Bases loaded, no outs, grounder right at you at third. What\'s the play?',
    options: [
      { id: 'a', text: 'Step on third, throw home for the double play' },
      { id: 'b', text: 'Throw home first, then to first', targetBase: 'home' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Throw to first', targetBase: 'first' },
    ],
    correctOptionId: 'a',
    explanation:
      'Right at you at third with bases loaded - step on third for the easy force! Then fire home for the 5-2 double play. You remove the force at home by getting the out at third first.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-26',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Runners on first and third, one out, grounder to third. Runner at third is staying. Play?',
    options: [
      { id: 'a', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'b', text: 'Throw home', targetBase: 'home' },
      { id: 'c', text: 'Tag the runner at third' },
      { id: 'd', text: 'Start the double play at second', targetBase: 'second' },
    ],
    correctOptionId: 'a',
    explanation:
      'No force at third or home - the runner on third doesn\'t have to go. Take the sure out at first. Don\'t try to tag a runner who\'s staying put.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-27',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Runners on second and third, no outs, grounder to third. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'b', text: 'Step on third for the force' },
      { id: 'c', text: 'Throw home', targetBase: 'home' },
      { id: 'd', text: 'Tag the runner from second' },
    ],
    correctOptionId: 'a',
    explanation:
      'No force at third or home with runners on second and third! The runners don\'t have to advance. Take the sure out at first base.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-28',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
      runnerSpeed: 'fast',
    },
    question: 'Two outs, runners on first and second, fast runner heading to third. Grounder to you. Play?',
    options: [
      { id: 'a', text: 'Step on third for the force', targetBase: 'third' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Tag the runner' },
      { id: 'd', text: 'Throw to second', targetBase: 'second' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, any out ends the inning. Stepping on third is the easiest - no throw needed, and even a fast runner has to beat you there.',
    errorVarianceApplies: false,
  },
  // Additional First Base scenarios (need 5-7 more, currently 3)
  {
    id: 'fvt-29',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Bases loaded, no outs, grounder to first. What\'s the priority?',
    options: [
      { id: 'a', text: 'Throw home for the force', targetBase: 'home' },
      { id: 'b', text: 'Step on first for one out', targetBase: 'first' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Throw to third', targetBase: 'third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With bases loaded, home is a force! Throw home to cut off the run. The catcher can then fire to first for the double play. Prevent runs first.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-30',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Runner on first, one out, grounder to first. What\'s the play?',
    options: [
      { id: 'a', text: 'Step on first, look for the double play at second', targetBase: 'second' },
      { id: 'b', text: 'Throw to second first', targetBase: 'second' },
      { id: 'c', text: 'Step on first only', targetBase: 'first' },
      { id: 'd', text: 'Tag the batter-runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'Step on first to get the easy out. Then look to second - if the runner from first hesitated or is going back, you might get the double play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-31',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Runners on second and third, no outs, grounder to first. What do you do?',
    options: [
      { id: 'a', text: 'Step on first for the out', targetBase: 'first' },
      { id: 'b', text: 'Throw home', targetBase: 'home' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Hold and check the runners' },
    ],
    correctOptionId: 'a',
    explanation:
      'No force at home or third! The runners don\'t have to advance. Step on first for the sure out. Don\'t throw home unless you\'re certain of a tag play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-32',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Two outs, runners on first and third, grounder to first. What\'s the play?',
    options: [
      { id: 'a', text: 'Step on first to end the inning', targetBase: 'first' },
      { id: 'b', text: 'Throw home', targetBase: 'home' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Tag the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - step on first to end the inning! Quickest out, no throw needed. The run doesn\'t score if you get the third out at first.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-33',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
      runnerSpeed: 'slow',
    },
    question: 'Runners on first and second (slow), no outs, grounder to first. Best play?',
    options: [
      { id: 'a', text: 'Step on first, throw to second for the double play', targetBase: 'second' },
      { id: 'b', text: 'Throw to third', targetBase: 'third' },
      { id: 'c', text: 'Step on first only', targetBase: 'first' },
      { id: 'd', text: 'Throw to second first', targetBase: 'second' },
    ],
    correctOptionId: 'a',
    explanation:
      'Step on first removes the force at second and third. But with slow runners, you might catch the runner from first going back or hesitating at second - look for the extra out!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-34',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Runner on third only, one out, grounder to first. Runner breaks for home. What do you do?',
    options: [
      { id: 'a', text: 'Step on first for the sure out', targetBase: 'first' },
      { id: 'b', text: 'Throw home for the tag play', targetBase: 'home' },
      { id: 'c', text: 'Chase the runner back' },
      { id: 'd', text: 'Hold and see what happens' },
    ],
    correctOptionId: 'a',
    explanation:
      'With one out, the run WILL count if the runner crosses home before you get the out at first. However, throwing home requires a tag play on a running player - risky! Take the sure out at first. Conceding one run to get a sure out is usually the right choice with one out.',
    errorVarianceApplies: true,
  },
  // ============================================
  // PITCHER SCENARIOS
  // ============================================
  {
    id: 'fvt-35',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Comebacker hit right to you on the mound. Runner on first. What\'s the play?',
    options: [
      { id: 'a', text: 'Turn and throw to second for the force', targetBase: 'second' },
      { id: 'b', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'c', text: 'Tag the batter-runner' },
      { id: 'd', text: 'Hold and check the runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on first, there\'s a force at second. Turning the 1-6-3 or 1-4-3 double play is the ideal outcome. Get the lead runner first!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-36',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Bases loaded, one out, comebacker to you. What\'s the priority?',
    options: [
      { id: 'a', text: 'Throw home for the force out', targetBase: 'home' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Tag the batter and throw home' },
    ],
    correctOptionId: 'a',
    explanation:
      'With bases loaded, home is a force play! Throw home to cut off the run. The catcher can then relay to first for the double play (1-2-3).',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-37',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'bunt',
      fieldPosition: 'pitcher',
    },
    question: 'Runner on second, bunt back to you. Runner is holding at second. What do you do?',
    options: [
      { id: 'a', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'b', text: 'Throw to third to get the runner', targetBase: 'third' },
      { id: 'c', text: 'Tag the batter and throw to third' },
      { id: 'd', text: 'Hold and check the runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'With only a runner on second, there\'s no force at third - the runner doesn\'t have to go. Take the sure out at first. Don\'t risk throwing to third for a tag play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-38',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Two outs, runner on first, slow roller back to you. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw to first for the third out', targetBase: 'first' },
      { id: 'b', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Tag the batter-runner' },
      { id: 'd', text: 'Run at the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, just get one more out to end the inning. First base is typically the easier throw from the mound - make the sure play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-39',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'bunt',
      fieldPosition: 'pitcher',
    },
    question: 'Runners on first and second, sacrifice bunt to you. Best play?',
    options: [
      { id: 'a', text: 'Throw to third for the force on the lead runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Tag the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second, there\'s a force at third! If you field it quickly, throw to third to get the lead runner. This is the best outcome on a bunt.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-40',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Runners on second and third, one out, comebacker to you. What do you do?',
    options: [
      { id: 'a', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'b', text: 'Throw home', targetBase: 'home' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Hold and freeze the runners' },
    ],
    correctOptionId: 'a',
    explanation:
      'No force at home or third - the runners don\'t have to advance! Take the sure out at first. The run might score, but don\'t risk an error trying for a tag play.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-41',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Runners on corners, no outs, comebacker. What\'s the smart play?',
    options: [
      { id: 'a', text: 'Start the 1-6-3 double play at second', targetBase: 'second' },
      { id: 'b', text: 'Throw home', targetBase: 'home' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Look the runner back to third, then throw to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'No force at home with runners on corners. Turn the double play! Getting two outs is more valuable than preventing one run. The 1-6-3 or 1-4-3 is the right call.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-42',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: true },
      battedBall: 'bunt',
      fieldPosition: 'pitcher',
    },
    question: 'Two outs, bases loaded, bunt back to you. What\'s the quickest out?',
    options: [
      { id: 'a', text: 'Throw home for the force', targetBase: 'home' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Tag the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs and bases loaded, any force ends the inning. Home is often the shortest throw from a bunt near the mound, and it prevents the run!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-43',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'pitcher',
    },
    question: 'Runner on first, one out, grounder to the right side. First baseman fields it. You\'re covering first. What do you do?',
    options: [
      { id: 'a', text: 'Take the throw and step on first for the force', targetBase: 'first' },
      { id: 'b', text: 'Tell them to throw to second', targetBase: 'second' },
      { id: 'c', text: 'Tag the batter-runner' },
      { id: 'd', text: 'Let the first baseman handle it' },
    ],
    correctOptionId: 'a',
    explanation:
      'When covering first on a ball hit to the right side, take the throw and step on the bag. The batter-runner is a force out at first base.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-44',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
      runnerSpeed: 'slow',
    },
    question: 'Bases loaded, no outs, comebacker with slow runners. What\'s the best play?',
    options: [
      { id: 'a', text: 'Throw home, start the 1-2-3 double play', targetBase: 'home' },
      { id: 'b', text: 'Step on the rubber and throw to first' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Throw to third', targetBase: 'third' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bases loaded with slow runners? Perfect double play opportunity! Throw home for the force, catcher fires to first for the 1-2-3 double play.',
    errorVarianceApplies: true,
  },
  // ============================================
  // CATCHER SCENARIOS
  // ============================================
  {
    id: 'fvt-45',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
    },
    question: 'Runners on first and second, bunt in front of the plate. You field it. Best play?',
    options: [
      { id: 'a', text: 'Throw to third for the force on the lead runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Tag the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second, there\'s a force at third! If you field the bunt quickly, throw to third to get the lead runner out.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-46',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: false },
      battedBall: 'none',
      fieldPosition: 'catcher',
    },
    question: 'Two outs, nobody on, dropped third strike. Ball rolls away. What do you do?',
    options: [
      { id: 'a', text: 'Retrieve the ball and throw to first', targetBase: 'first' },
      { id: 'b', text: 'Tag the batter before they run' },
      { id: 'c', text: 'Let the umpire call it - batter is out anyway' },
      { id: 'd', text: 'Chase the batter down' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a dropped third strike with two outs, the batter CAN run to first (first base is unoccupied). Retrieve the ball and throw to first for the force out!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-47',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'none',
      fieldPosition: 'catcher',
    },
    question: 'One out, runner on first, dropped third strike. What\'s the rule?',
    options: [
      { id: 'a', text: 'Batter is automatically out - first base is occupied', targetBase: 'first' },
      { id: 'b', text: 'Throw to first for the force', targetBase: 'first' },
      { id: 'c', text: 'Tag the batter' },
      { id: 'd', text: 'Throw to second for the force', targetBase: 'second' },
    ],
    correctOptionId: 'a',
    explanation:
      'With less than two outs AND a runner on first, the batter is automatically out on a dropped third strike. This rule prevents an easy double play.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-48',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
    },
    question: 'Bases loaded, no outs, bunt right in front of you. What\'s the play?',
    options: [
      { id: 'a', text: 'Step on home for the force out', targetBase: 'home' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Tag the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bases loaded means force at home! Step on the plate for the easiest out - no throw needed. Then you can throw to first for the double play.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-49',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
    },
    question: 'Runner on third, one out, squeeze bunt. Runner is charging home. What do you do?',
    options: [
      { id: 'a', text: 'Tag the runner - no force at home', targetBase: 'home' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Step on home for the force' },
      { id: 'd', text: 'Throw to third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With only a runner on third, there\'s NO force at home! You must TAG the runner. On a squeeze play, be ready to catch and apply the tag.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-50',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
    },
    question: 'Runner on first, no outs, bunt fielded by you. Best play?',
    options: [
      { id: 'a', text: 'Throw to second for the force on the lead runner', targetBase: 'second' },
      { id: 'b', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'c', text: 'Tag the batter' },
      { id: 'd', text: 'Hold and check the runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on first, there\'s a force at second. If you field the bunt quickly and the runner isn\'t too far along, throw to second to get the lead runner!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-51',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
    },
    question: 'Two outs, runners on first and second, bunt to you. Quickest out?',
    options: [
      { id: 'a', text: 'Throw to third for the force', targetBase: 'third' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Throw to second', targetBase: 'second' },
      { id: 'd', text: 'Tag the batter' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, any force out ends the inning. Third base is often the closest throw on a bunt in front of the plate - take the quick out!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-52',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
    },
    question: 'Runners on second and third, one out, bunt to you. Runner from third breaks for home. What do you do?',
    options: [
      { id: 'a', text: 'Tag the runner - no force at home', targetBase: 'home' },
      { id: 'b', text: 'Throw to first', targetBase: 'first' },
      { id: 'c', text: 'Throw to third' },
      { id: 'd', text: 'Step on home' },
    ],
    correctOptionId: 'a',
    explanation:
      'No runner on first means no force at home! You must TAG the runner coming from third. Stay home, receive the ball, and make the tag.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-53',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'bunt',
      fieldPosition: 'catcher',
      runnerSpeed: 'fast',
    },
    question: 'Bases loaded, no outs, bunt with fast runners. Ball is fielded by pitcher. What\'s your call?',
    options: [
      { id: 'a', text: 'Call "Home! Home!" and receive the throw', targetBase: 'home' },
      { id: 'b', text: 'Call for the throw to first' },
      { id: 'c', text: 'Call for the throw to third' },
      { id: 'd', text: 'Go cover third' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bases loaded is always a force at home! Call for the throw home. Even with fast runners, cutting off the run is the priority with bases loaded.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-54',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: false },
      battedBall: 'none',
      fieldPosition: 'catcher',
    },
    question: 'Two outs, no one on, dropped third strike. Ball bounces toward first base. What do you do?',
    options: [
      { id: 'a', text: 'Chase the ball and throw to first', targetBase: 'first' },
      { id: 'b', text: 'Tag the batter' },
      { id: 'c', text: 'Let the first baseman field it' },
      { id: 'd', text: 'Just let it go - batter is out' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs and first base unoccupied, the batter CAN run on a dropped third strike! Chase the ball and make the throw to first for the force out.',
    errorVarianceApplies: true,
  },
  // ============================================
  // LEFT FIELD SCENARIOS
  // ============================================
  {
    id: 'fvt-55',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'One out, runner on first, fly ball caught in left. Runner tagged up. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to second - must tag the runner', targetBase: 'second' },
      { id: 'b', text: 'Throw to first - force play', targetBase: 'first' },
      { id: 'c', text: 'Hold the ball' },
      { id: 'd', text: 'Throw to the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'After a caught fly ball, the runner must tag up and can advance. There\'s no force play - they don\'t HAVE to go. If they go, throw to second where they must be TAGGED.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-56',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Runner on third, no outs, fly ball caught in shallow left. Runner tagging. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home - must tag the runner', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Hold the ball - too shallow to score' },
      { id: 'd', text: 'Throw to the cutoff at shortstop' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a sacrifice fly, the runner must be TAGGED at home - there\'s no force. Fire the ball home to try to get the runner. Hit your cutoff if it\'s deep.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-57',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Runners on first and second, one out, single to left. Both runners advancing. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to third - must tag the runner from second', targetBase: 'third' },
      { id: 'b', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Throw home', targetBase: 'home' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'Once the ball is in the outfield, all runners advance at their own risk - no forces except on the batter going to first. The runner from second must be TAGGED at third.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-58',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Two outs, runner on second, single to left. Runner trying to score. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home - runner must be tagged', targetBase: 'home' },
      { id: 'b', text: 'Throw to second for the force' },
      { id: 'c', text: 'Throw to third', targetBase: 'third' },
      { id: 'd', text: 'Hold the ball - can\'t get them' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, preventing the run is huge. The runner must be TAGGED at home - no force. Make a strong throw to the plate!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-59',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Runner on first, no outs, single to left. Runner going to third. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to third - must tag the runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Hold the ball - too risky' },
      { id: 'd', text: 'Throw behind the runner to second' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a single, the runner from first advances at their own risk - no force at third! If you have a play, throw to third where the runner must be TAGGED.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-60',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Runners on second and third, one out, medium-depth fly ball caught. Runners tagging. What\'s the priority?',
    options: [
      { id: 'a', text: 'Throw home - tag play on the runner from third', targetBase: 'home' },
      { id: 'b', text: 'Throw to third to get the runner from second', targetBase: 'third' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'Both runners are tagging up, but the runner from third is trying to score. Home is the priority - it\'s a TAG play, not a force. Prevent the run if you can!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-61',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Two outs, runners on first and second, single to left. Runner from second rounding third. What do you do?',
    options: [
      { id: 'a', text: 'Throw home to get the runner - tag play', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hit the cutoff and hold' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, if the runner is trying to score from second on a single, fire home! It\'s a TAG play. Getting the third out prevents the run.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-62',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'fly-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Bases loaded, no outs, fly ball caught in left. Runner from third tagging. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home - must TAG the runner', targetBase: 'home' },
      { id: 'b', text: 'Step on third - force play', targetBase: 'third' },
      { id: 'c', text: 'Throw to the cutoff' },
      { id: 'd', text: 'Hold the ball - runners will stay' },
    ],
    correctOptionId: 'a',
    explanation:
      'After a fly ball is caught, force plays are OFF! The runner from third must be TAGGED at home. Throw home to try to prevent the run on the sac fly.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-63',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'left-field',
      runnerSpeed: 'fast',
    },
    question: 'Fast runner on second, one out, single to left. Runner going home. What do you do?',
    options: [
      { id: 'a', text: 'Hit the cutoff - relay to home for the tag', targetBase: 'home' },
      { id: 'b', text: 'Throw directly home' },
      { id: 'c', text: 'Throw to third to prevent the extra base' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a single from deep left with a fast runner, hit your cutoff for the relay home. A two-throw relay is often more accurate than a one-hop throw. It\'s still a TAG play at home!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-64',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Two outs, runner on first, single to left. Runner rounding second, trying for third. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw to third - must tag the runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to second for the force' },
      { id: 'c', text: 'Throw to first' },
      { id: 'd', text: 'Hold - can\'t get them' },
    ],
    correctOptionId: 'a',
    explanation:
      'If the runner is being aggressive going first to third on a single, you might have a play. It\'s a TAG play at third - no force once the ball is in the outfield!',
    errorVarianceApplies: true,
  },
  // ============================================
  // CENTER FIELD SCENARIOS
  // ============================================
  {
    id: 'fvt-65',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
    },
    question: 'Runner on third, one out, fly ball caught in center. Runner tagging up. What do you do?',
    options: [
      { id: 'a', text: 'Throw home - must TAG the runner', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Hold - too deep to get them' },
      { id: 'd', text: 'Throw to second' },
    ],
    correctOptionId: 'a',
    explanation:
      'Classic sacrifice fly situation. The runner must be TAGGED at home - there\'s no force after a caught fly ball. Make a strong throw!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-66',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
    },
    question: 'Runners on first and second, no outs, fly ball caught in center. Runner from second tagging to third. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw to third - must TAG the runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to second - the runner left early', targetBase: 'second' },
      { id: 'c', text: 'Throw to first', targetBase: 'first' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'After the catch, the runner is advancing at their own risk. Third is a TAG play, not a force. If you think you can get them, fire to third!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-67',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'center-field',
    },
    question: 'Two outs, runner on second, single up the middle. Runner rounding third. What do you do?',
    options: [
      { id: 'a', text: 'Throw home - must TAG the runner', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs and the runner trying to score from second on a single, fire home! It\'s a TAG play. Getting the out at home ends the inning and prevents the run.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-68',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'center-field',
    },
    question: 'Runner on first, one out, single to center. Runner going to third. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to third - TAG play on the runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Throw to first' },
      { id: 'd', text: 'Hold - can\'t make the play' },
    ],
    correctOptionId: 'a',
    explanation:
      'The runner from first is advancing at their own risk - it\'s a TAG play at third, not a force. If you have a chance to get them, make the throw!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-69',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
    },
    question: 'Runners on second and third, no outs, fly ball caught in medium center. Both runners tagging. Priority throw?',
    options: [
      { id: 'a', text: 'Throw home - TAG play, prevent the run', targetBase: 'home' },
      { id: 'b', text: 'Throw to third - get the lead runner' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'When both runners are tagging, prioritize home to prevent the run. It\'s a TAG play - no force after the catch. A runner at third is less damaging than a run scored.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-70',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'center-field',
    },
    question: 'Two outs, runners on first and second, single to center. Runner from second trying to score. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home - TAG the runner to end the inning', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, getting the runner at home ends the inning! It\'s a TAG play. Make a strong throw to the plate.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-71',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: true },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
    },
    question: 'Bases loaded, one out, fly ball caught in center. Runner from third tagging. What do you do?',
    options: [
      { id: 'a', text: 'Throw home - must TAG the runner', targetBase: 'home' },
      { id: 'b', text: 'Step on second - force still on' },
      { id: 'c', text: 'Throw to third' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'After a fly ball is caught, ALL force plays are removed! The runner from third must be TAGGED at home. Make the throw to try to prevent the run.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-72',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
    },
    question: 'Runner on first, no outs, fly ball caught in shallow center. Runner didn\'t tag up and is halfway to second. What do you do?',
    options: [
      { id: 'a', text: 'Throw to first - runner must return and can be doubled off', targetBase: 'first' },
      { id: 'b', text: 'Throw to second for the force' },
      { id: 'c', text: 'Chase the runner' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'After a catch, runners must "tag up" (touch their original base) before advancing. If they\'re off the base, throw behind them to double them off - but it\'s still a TAG play at first, not a force!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-73',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'center-field',
    },
    question: 'Two outs, runner on third, single up the middle. Runner scores easily. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to second - hold the batter to a single', targetBase: 'second' },
      { id: 'b', text: 'Throw home anyway' },
      { id: 'c', text: 'Throw to third' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'If the runner scores easily, don\'t waste a throw home. Throw to second to hold the batter to a single and prevent extra bases. Live to fight another batter!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-74',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
      runnerSpeed: 'fast',
    },
    question: 'Fast runner on second, one out, fly ball caught in deep center. Runner tagging to third. What\'s the play?',
    options: [
      { id: 'a', text: 'Hit the cutoff - can\'t get a fast runner at third' },
      { id: 'b', text: 'Throw directly to third', targetBase: 'third' },
      { id: 'c', text: 'Throw home' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'Deep in center with a fast runner? You probably won\'t beat them to third. Hit the cutoff to keep the ball in the infield and prevent extra advancement. Pick your battles!',
    errorVarianceApplies: true,
  },
  // ============================================
  // RIGHT FIELD SCENARIOS
  // ============================================
  {
    id: 'fvt-75',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Runner on first, one out, fly ball caught in right. Runner tagged and is going to second. What\'s the throw?',
    options: [
      { id: 'a', text: 'Throw to second - TAG play', targetBase: 'second' },
      { id: 'b', text: 'Throw to first - double them off', targetBase: 'first' },
      { id: 'c', text: 'Hold the ball' },
      { id: 'd', text: 'Throw to the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'After a fly out, runners advance at their own risk - TAG play, not force! If the runner is going first to second, throw to second where they must be tagged.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-76',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Runner on third, no outs, fly ball caught in shallow right. Runner tagging up. What do you do?',
    options: [
      { id: 'a', text: 'Throw home - TAG play, might get them', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Hold - too risky' },
      { id: 'd', text: 'Throw to second' },
    ],
    correctOptionId: 'a',
    explanation:
      'Shallow fly ball in right is a chance to throw out the runner at home! It\'s a TAG play. Make a strong, accurate throw - you might surprise them!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-77',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Two outs, runner on second, single to right. Runner trying to score. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home - TAG play to end the inning', targetBase: 'home' },
      { id: 'b', text: 'Throw to third' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, the throw home could end the inning and prevent the run. It\'s a TAG play - no force. Make a strong throw to the plate!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-78',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Runners on first and second, one out, single to right. Lead runner going to third. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to third - TAG play on the lead runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Throw home' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a single, runners advance at their own risk. The runner going to third is a TAG play. Right field has a good angle to third - make the throw!',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-79',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Runner on first, no outs, single to right. Runner rounding second hard. What do you do?',
    options: [
      { id: 'a', text: 'Throw to third - TAG play if runner tries for three', targetBase: 'third' },
      { id: 'b', text: 'Throw to second - force play', targetBase: 'second' },
      { id: 'c', text: 'Throw to first' },
      { id: 'd', text: 'Hold and keep runner at second' },
    ],
    correctOptionId: 'a',
    explanation:
      'If the runner is being aggressive going first to third on a single, right field has the best arm angle for third. It\'s a TAG play - no force once the ball is in the outfield.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-80',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Runners on second and third, one out, fly ball caught in right. Both tagging up. Priority?',
    options: [
      { id: 'a', text: 'Throw home - TAG play, prevent the run', targetBase: 'home' },
      { id: 'b', text: 'Throw to third to get the trail runner' },
      { id: 'c', text: 'Hold the ball' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'Prioritize home! Preventing the run is more important than preventing the runner from reaching third. It\'s a TAG play at the plate.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-81',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Two outs, runners on first and second, single to right. Runner from second rounding third. What do you do?',
    options: [
      { id: 'a', text: 'Throw home - TAG play to end the inning', targetBase: 'home' },
      { id: 'b', text: 'Throw to third for the force' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs and the runner is going home? Fire it! Getting the out at home ends the inning and prevents the run. TAG play at the plate.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-82',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: true },
      battedBall: 'fly-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Bases loaded, no outs, fly ball caught in right. Runner from third tagging. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw home - TAG play, try to prevent the run', targetBase: 'home' },
      { id: 'b', text: 'Throw to first - force still on' },
      { id: 'c', text: 'Throw to third' },
      { id: 'd', text: 'Hold - run will score anyway' },
    ],
    correctOptionId: 'a',
    explanation:
      'After the catch, ALL forces are off! The runner from third must be TAGGED at home. On a sac fly, make your best throw to try to prevent the run.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-83',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'right-field',
      runnerSpeed: 'slow',
    },
    question: 'Slow runner on second, one out, single to right. Runner rounding third slowly. What do you do?',
    options: [
      { id: 'a', text: 'Throw home - TAG play, might get the slow runner', targetBase: 'home' },
      { id: 'b', text: 'Throw to third' },
      { id: 'c', text: 'Throw to second' },
      { id: 'd', text: 'Hit the cutoff' },
    ],
    correctOptionId: 'a',
    explanation:
      'A slow runner trying to score from second on a single? You might have a play! Fire home for the TAG. Right field has a good angle to the plate.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-84',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'right-field',
    },
    question: 'Two outs, runner on third, single to right. Runner will score easily. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to second - hold the batter to a single', targetBase: 'second' },
      { id: 'b', text: 'Throw home anyway' },
      { id: 'c', text: 'Throw to first' },
      { id: 'd', text: 'Hold the ball' },
    ],
    correctOptionId: 'a',
    explanation:
      'If the runner scores easily, don\'t make a hopeless throw home. Throw to second to hold the batter to a single - limit the damage and get ready for the next batter.',
    errorVarianceApplies: true,
  },
  // ============================================
  // BACKUP SCENARIOS - RIGHT FIELD
  // ============================================
  {
    id: 'fvt-85',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'right-field',
    },
    question: 'Ground ball to shortstop, nobody on base. As the right fielder, what\'s your job?',
    options: [
      { id: 'a', text: 'Sprint to back up first base in case of a throwing error' },
      { id: 'b', text: 'Stay in position - not your play' },
      { id: 'c', text: 'Back up second base' },
      { id: 'd', text: 'Move toward center field' },
    ],
    correctOptionId: 'a',
    explanation:
      'On any ground ball to the left side of the infield, right field MUST back up first base. If the throw is wild, you\'re there to prevent extra bases. This is one of your most important jobs!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-86',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'right-field',
    },
    question: 'Runner on first, ground ball to second base. Double play attempt. Where do you go?',
    options: [
      { id: 'a', text: 'Back up first base for the relay throw' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Move toward the infield' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a double play attempt, the throw to first is the second throw and more likely to be off-target. Sprint to back up first base in case the relay throw is wild.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-87',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'right-field',
    },
    question: 'Runner on second, grounder to third. Third baseman throws to first. Your responsibility?',
    options: [
      { id: 'a', text: 'Back up first base' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Watch the runner at second' },
      { id: 'd', text: 'Stay home' },
    ],
    correctOptionId: 'a',
    explanation:
      'Any throw to first base from the left side of the infield should be backed up by right field. A wild throw could let the runner from second score!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-88',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'bunt',
      fieldPosition: 'right-field',
    },
    question: 'Bunt fielded by the pitcher, throwing to first. What\'s your job?',
    options: [
      { id: 'a', text: 'Back up first base' },
      { id: 'b', text: 'Stay in position - it\'s just a bunt' },
      { id: 'c', text: 'Back up home plate' },
      { id: 'd', text: 'Move to cover second' },
    ],
    correctOptionId: 'a',
    explanation:
      'ANY throw to first base needs a backup. On a bunt play, the throw might be rushed or off-balance. Right field backs up first on every infield play!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-89',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'right-field',
    },
    question: 'Runners on first and second, grounder to short. Shortstop starts the double play. Your job?',
    options: [
      { id: 'a', text: 'Back up first base for the double play relay' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Back up third base' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a 6-4-3 double play, the throw from second to first is the critical one. A wild throw lets both runners advance. Back up first base!',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - LEFT FIELD
  // ============================================
  {
    id: 'fvt-90',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'left-field',
    },
    question: 'Runner on first, ground ball to second base. Where should you go as the left fielder?',
    options: [
      { id: 'a', text: 'Back up second base in case of a wild throw' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up the shortstop' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a ground ball to the right side with a runner on first, the throw is going to second base. Left field backs up second base on balls hit to the right side of the infield.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-91',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'left-field',
    },
    question: 'Runner on second, single to center. Center fielder throwing to third. Your assignment?',
    options: [
      { id: 'a', text: 'Back up third base' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Back up center field' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'When the throw is going to third base, left field backs it up. A wild throw could let the runner score. Always back up the base the throw is going to!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-92',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'left-field',
    },
    question: 'Runners on first and second, grounder to first. First baseman steps on base. What do you do?',
    options: [
      { id: 'a', text: 'Back up second base - runner from first might try to advance' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up home' },
    ],
    correctOptionId: 'a',
    explanation:
      'After the out at first, the runner from first might try to advance to second. Left field backs up second base on plays to the right side.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-93',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'left-field',
    },
    question: 'Nobody on, grounder to first base. First baseman throws to second for the tag on an aggressive runner. Your job?',
    options: [
      { id: 'a', text: 'Back up second base' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Stay in position - no runners' },
      { id: 'd', text: 'Back up first base' },
    ],
    correctOptionId: 'a',
    explanation:
      'Even with nobody on, if a runner tries to stretch a single, the throw goes to second. Left field should always be moving to back up second on balls to the right side.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-94',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-right',
      fieldPosition: 'left-field',
    },
    question: 'Runner on second, fly ball to right field. Right fielder catches it, runner tags and goes to third. Your job?',
    options: [
      { id: 'a', text: 'Back up third base for the throw' },
      { id: 'b', text: 'Stay in position' },
      { id: 'c', text: 'Back up center field' },
      { id: 'd', text: 'Back up home plate' },
    ],
    correctOptionId: 'a',
    explanation:
      'Right fielder is throwing to third - left field backs it up! If the throw gets by the third baseman, you prevent the runner from scoring.',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - CENTER FIELD
  // ============================================
  {
    id: 'fvt-95',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'center-field',
    },
    question: 'Runner on first, grounder to shortstop starting a double play. As center fielder, where do you go?',
    options: [
      { id: 'a', text: 'Back up second base for the force play' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up left field' },
    ],
    correctOptionId: 'a',
    explanation:
      'Center field backs up second base on almost every play! The throw from shortstop to second could be wild. Be there to prevent extra bases.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-96',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'center-field',
    },
    question: 'Runner on second, grounder to second base. Second baseman throws to first. Your backup assignment?',
    options: [
      { id: 'a', text: 'Back up second base in case of a throw from first' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'Even though the play is at first, the runner on second might try to advance. Center field stays near second base to back up any throw there.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-97',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'center-field',
    },
    question: 'Nobody on, ground ball up the middle to shortstop. Shortstop throws to first. What do you do?',
    options: [
      { id: 'a', text: 'Back up second base in case the batter tries for two' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up the shortstop' },
    ],
    correctOptionId: 'a',
    explanation:
      'Center field backs up second on virtually every ground ball. If the batter gets aggressive and tries for second, the throw is coming your way.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-98',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'center-field',
    },
    question: 'Runners on first and second, grounder up the middle. Shortstop fields it, looks to turn two. Your job?',
    options: [
      { id: 'a', text: 'Back up second base for the force play' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Back up left field' },
      { id: 'd', text: 'Stay deep in case of extra-base hit' },
    ],
    correctOptionId: 'a',
    explanation:
      'Center field ALWAYS backs up second base on ground balls. A wild throw at second could let both runners advance. Be there!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-99',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-left',
      fieldPosition: 'center-field',
    },
    question: 'Runner on third, fly ball to left field. Left fielder catches it, runner tagging. What\'s your assignment?',
    options: [
      { id: 'a', text: 'Back up the throw to home plate' },
      { id: 'b', text: 'Back up left field' },
      { id: 'c', text: 'Back up third base' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a sac fly to left, center field should move in to back up the throw home. A wild throw lets the run score AND potentially lets the batter advance.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-100',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-right',
      fieldPosition: 'center-field',
    },
    question: 'Runner on first, fly ball to right field. Caught, runner tagging to second. Your job?',
    options: [
      { id: 'a', text: 'Back up second base for the throw from right' },
      { id: 'b', text: 'Back up right field' },
      { id: 'c', text: 'Back up first base' },
      { id: 'd', text: 'Stay in center' },
    ],
    correctOptionId: 'a',
    explanation:
      'Right field is throwing to second - center field backs it up! Get behind second base in case the throw gets through.',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - PITCHER
  // ============================================
  {
    id: 'fvt-101',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Runner on second, single to center. Center fielder throwing home. As the pitcher, where do you go?',
    options: [
      { id: 'a', text: 'Back up home plate behind the catcher' },
      { id: 'b', text: 'Stay on the mound' },
      { id: 'c', text: 'Cover first base' },
      { id: 'd', text: 'Back up third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'On ANY throw to home plate from the outfield, the pitcher backs up home! Get behind the catcher in foul territory. A wild throw could let the run score AND the batter advance.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-102',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-center',
      fieldPosition: 'pitcher',
    },
    question: 'Runner on third, fly ball to center. Caught, runner tagging. Center fielder throwing home. Your job?',
    options: [
      { id: 'a', text: 'Sprint to back up home plate' },
      { id: 'b', text: 'Cover home plate' },
      { id: 'c', text: 'Stay on the mound and watch' },
      { id: 'd', text: 'Back up third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a sac fly, the pitcher MUST back up home. The throw might be offline or skip past the catcher. Be in foul territory behind the plate!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-103',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'pitcher',
    },
    question: 'Runner on first, grounder to the first baseman who fields it. What\'s your responsibility?',
    options: [
      { id: 'a', text: 'Sprint to cover first base' },
      { id: 'b', text: 'Stay on the mound' },
      { id: 'c', text: 'Back up second base' },
      { id: 'd', text: 'Back up home plate' },
    ],
    correctOptionId: 'a',
    explanation:
      'When the first baseman fields the ball, the pitcher MUST cover first base! Run hard to the bag and give them a target. This is a basic pitcher responsibility.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-104',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'pitcher',
    },
    question: 'Runners on first and second, grounder to second base. Second baseman throws to short for the force. Where do you go?',
    options: [
      { id: 'a', text: 'Cover first base for the relay throw' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Stay on the mound' },
      { id: 'd', text: 'Back up third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a double play with the ball hit to the right side, the pitcher covers first! The first baseman might be out of position. Get to the bag!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-105',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-right',
      fieldPosition: 'pitcher',
    },
    question: 'Runner on second, fly ball caught in right. Runner tags to third. Right fielder throws to third. Your backup?',
    options: [
      { id: 'a', text: 'Back up third base' },
      { id: 'b', text: 'Back up home plate' },
      { id: 'c', text: 'Stay on the mound' },
      { id: 'd', text: 'Cover first base' },
    ],
    correctOptionId: 'a',
    explanation:
      'When the throw is going to third base from right field, the pitcher backs up third! The left fielder might not get there in time. Be the safety net.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-106',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
    },
    question: 'Two outs, runners on second and third, single to center. Runner from third scores easily. Runner from second rounding third. Where do you go?',
    options: [
      { id: 'a', text: 'Back up home plate for a possible play on the second runner' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Stay on the mound' },
      { id: 'd', text: 'Cover first base' },
    ],
    correctOptionId: 'a',
    explanation:
      'Even if one runner scores, another runner might try to score too! Back up home plate. You never know when a wild throw might happen.',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - SHORTSTOP
  // ============================================
  {
    id: 'fvt-107',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'shortstop',
    },
    question: 'Runner on first, grounder to second base. Second baseman going to turn a double play. Where do you go?',
    options: [
      { id: 'a', text: 'Cover second base to receive the throw and turn two' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Cover third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a ball hit to the right side of the infield, the shortstop covers second base! Get to the bag, receive the throw, and turn the double play.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-108',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-center',
      fieldPosition: 'shortstop',
    },
    question: 'Runner on second, fly ball to center. Caught, runner tagging to third. What\'s your responsibility?',
    options: [
      { id: 'a', text: 'Move toward third to back up the throw or cover if third baseman is pulled' },
      { id: 'b', text: 'Cover second base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up the center fielder' },
    ],
    correctOptionId: 'a',
    explanation:
      'When the throw is going to third, shortstop moves toward third base to back up or help. You\'re the safety valve if the throw gets past the third baseman.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-109',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'shortstop',
    },
    question: 'Nobody on, grounder to first base. First baseman throws to pitcher covering. What do you do?',
    options: [
      { id: 'a', text: 'Move to cover second in case batter tries to advance on a wild throw' },
      { id: 'b', text: 'Stay in position' },
      { id: 'c', text: 'Back up first base' },
      { id: 'd', text: 'Cover third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'Even with nobody on, the shortstop should drift toward second base. If the throw to first is wild, the batter might try for second. Be ready!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-110',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'bunt',
      fieldPosition: 'shortstop',
    },
    question: 'Runner on first, bunt fielded by the catcher. Catcher throwing to first. Your job?',
    options: [
      { id: 'a', text: 'Cover second base in case of a throw there' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Cover third base' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a bunt with a runner on first, the shortstop covers second base. If the catcher or first baseman tries to get the lead runner, you need to be at the bag!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-111',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'shortstop',
    },
    question: 'Runner on second, grounder to first. First baseman steps on the bag. Runner holds at second. What should you be doing?',
    options: [
      { id: 'a', text: 'Cover second base to keep the runner honest' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Stay in your position' },
      { id: 'd', text: 'Move toward third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on second and the ball hit to the right side, the shortstop covers second. If the runner gets a big lead or the first baseman wants to throw behind them, you\'re there.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-112',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'shortstop',
    },
    question: 'Runners on first and second, grounder to second base. What\'s your role?',
    options: [
      { id: 'a', text: 'Cover second base for the force and pivot for the double play' },
      { id: 'b', text: 'Cover third base' },
      { id: 'c', text: 'Back up second base' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'Ball hit to the right side means shortstop covers second! Take the throw from the second baseman, touch the bag for the force, and fire to first for the double play.',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - SECOND BASE
  // ============================================
  {
    id: 'fvt-113',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'second-base',
    },
    question: 'Runner on first, grounder to shortstop starting a double play. What\'s your job?',
    options: [
      { id: 'a', text: 'Cover second base to receive the throw and turn two' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Cover first base' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a ball hit to the left side, the second baseman covers second base! Get to the bag quickly, receive the throw, and pivot to throw to first for the double play.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-114',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'second-base',
    },
    question: 'Nobody on, grounder to third. Third baseman throws to first. What do you do?',
    options: [
      { id: 'a', text: 'Move toward first base to back up the throw' },
      { id: 'b', text: 'Cover second base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up the third baseman' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a throw from the left side to first, the second baseman moves toward first to help back up. You\'re closer than the right fielder on some plays.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-115',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'second-base',
    },
    question: 'Runner on second, grounder to short. Shortstop throws to first. Where do you go?',
    options: [
      { id: 'a', text: 'Cover second base to keep the runner from advancing' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up the shortstop' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on second and the ball hit to the left side, cover second base! If the runner rounds second too far, the first baseman might throw behind them.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-116',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'bunt',
      fieldPosition: 'second-base',
    },
    question: 'Runner on first, bunt fielded by the pitcher. Pitcher looks to second. Your responsibility?',
    options: [
      { id: 'a', text: 'Cover first base - the first baseman charged the bunt' },
      { id: 'b', text: 'Cover second base' },
      { id: 'c', text: 'Back up the pitcher' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a bunt, the first baseman often charges. The second baseman must cover first base! If the pitcher can\'t get the lead runner, they\'ll throw to you at first.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-117',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-left',
      fieldPosition: 'second-base',
    },
    question: 'Runner on second, fly ball to left. Caught, runner tagging to third. Your job?',
    options: [
      { id: 'a', text: 'Move toward second base - be ready for a throw if runner rounds third too far' },
      { id: 'b', text: 'Back up third base' },
      { id: 'c', text: 'Back up the left fielder' },
      { id: 'd', text: 'Cover first base' },
    ],
    correctOptionId: 'a',
    explanation:
      'Stay near second base and read the play. If the runner rounds third too far and there\'s a throw, you might need to cover second or relay the ball.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-118',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'second-base',
    },
    question: 'Runners on first and second, grounder to third. Third baseman steps on third for the force. What do you do?',
    options: [
      { id: 'a', text: 'Cover second base for a possible throw there' },
      { id: 'b', text: 'Cover first base' },
      { id: 'c', text: 'Back up third base' },
      { id: 'd', text: 'Stay in position' },
    ],
    correctOptionId: 'a',
    explanation:
      'After the out at third, the runner from first might be heading to second. Cover the bag in case the third baseman or catcher wants to make a play there!',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - THIRD BASE
  // ============================================
  {
    id: 'fvt-119',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'third-base',
    },
    question: 'Runner on second, grounder to first. First baseman steps on the bag. Runner holds. What should you do?',
    options: [
      { id: 'a', text: 'Stay at third base in case the runner tries to advance on a wild throw' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Move toward home' },
      { id: 'd', text: 'Back up second base' },
    ],
    correctOptionId: 'a',
    explanation:
      'The third baseman stays home at third base. If there\'s a wild throw to first, the runner from second might try to advance to third. Be ready at your bag!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-120',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'third-base',
    },
    question: 'Runners on first and second, grounder to second. Double play attempt. What\'s your role?',
    options: [
      { id: 'a', text: 'Cover third base - the runner from second might advance on the play' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Back up first base' },
      { id: 'd', text: 'Stay in shortstop area' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a double play attempt, the runner from second might try to advance to third. Stay at your bag! Be ready in case there\'s a play at third.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-121',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-right',
      fieldPosition: 'third-base',
    },
    question: 'Runner on third, grounder to second. Second baseman throws to first. What do you do?',
    options: [
      { id: 'a', text: 'Stay at third and keep the runner from scoring on a wild throw' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Move toward home to back up' },
      { id: 'd', text: 'Move toward the mound' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on third, stay home! If the throw to first is wild, you need to keep the runner at third from scoring. Never leave third base unattended with a runner there.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-122',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'bunt',
      fieldPosition: 'third-base',
    },
    question: 'Runner on first, bunt toward third base line. Pitcher fields it. What do you do?',
    options: [
      { id: 'a', text: 'Cover third base in case the runner tries for third on a wild throw' },
      { id: 'b', text: 'Back up the pitcher' },
      { id: 'c', text: 'Go back to position' },
      { id: 'd', text: 'Cover home plate' },
    ],
    correctOptionId: 'a',
    explanation:
      'After charging a bunt, get back to third base! If the throw to first is wild, an aggressive runner might try to go first to third. Cover your bag!',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-123',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'third-base',
    },
    question: 'Runner on second, grounder up the middle fielded by shortstop. Shortstop throws to first. What\'s your responsibility?',
    options: [
      { id: 'a', text: 'Cover third base - runner might try to advance' },
      { id: 'b', text: 'Back up shortstop' },
      { id: 'c', text: 'Back up first base' },
      { id: 'd', text: 'Stay in position between second and third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a runner on second, always cover third! The runner might try to advance on the throw to first. Be at the bag ready to receive a throw if needed.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-124',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'third-base',
    },
    question: 'Nobody on, grounder to first. First baseman tosses to pitcher covering. Batter running hard. What do you do?',
    options: [
      { id: 'a', text: 'Stay at third base - be ready if batter tries for extra bases on error' },
      { id: 'b', text: 'Back up first base' },
      { id: 'c', text: 'Run toward second base' },
      { id: 'd', text: 'Move toward the mound' },
    ],
    correctOptionId: 'a',
    explanation:
      'Even with nobody on, stay near third base. If something goes wrong at first - wild throw, dropped ball - an aggressive runner might try to take extra bases. You\'re the last line of defense on that side.',
    errorVarianceApplies: false,
  },
  // ============================================
  // BACKUP SCENARIOS - FIRST BASE
  // ============================================
  {
    id: 'fvt-125',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Runners on second and third, fly ball caught in right. Runner from third tagging. Right fielder throwing home. What do you do?',
    options: [
      { id: 'a', text: 'Move toward home to back up the throw' },
      { id: 'b', text: 'Stay at first base' },
      { id: 'c', text: 'Cover second base' },
      { id: 'd', text: 'Back up right field' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a throw home from right field, the first baseman can help back up! Move toward the first base side of home in foul territory. The pitcher has the third base side.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-126',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'first-base',
    },
    question: 'Runner on first, grounder to shortstop starting a double play. Your job?',
    options: [
      { id: 'a', text: 'Get to first base quickly to receive the relay throw' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Stay in position' },
      { id: 'd', text: 'Back up the shortstop' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a double play from the left side, get to first base! Stretch toward second to receive the relay throw and complete the double play.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-127',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'first-base',
    },
    question: 'Nobody on, grounder to third. Third baseman throwing to you. What\'s your job?',
    options: [
      { id: 'a', text: 'Get to the bag, give a good target, stretch toward the throw' },
      { id: 'b', text: 'Back up second base' },
      { id: 'c', text: 'Stay off the bag to field a bad throw' },
      { id: 'd', text: 'Run toward third to shorten the throw' },
    ],
    correctOptionId: 'a',
    explanation:
      'Your primary job is to receive the throw at first! Get to the bag, set up, give a good target, and stretch toward the throw to help out your infielder.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-128',
    category: 'force-vs-tag',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'bunt',
      fieldPosition: 'first-base',
    },
    question: 'Runners on first and second, bunt toward you. You field it. Where\'s your throw and who covers first?',
    options: [
      { id: 'a', text: 'Throw to third for the force - second baseman covers first' },
      { id: 'b', text: 'Throw to second' },
      { id: 'c', text: 'Step on first yourself' },
      { id: 'd', text: 'Throw home' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second and you fielding the bunt, throw to third for the force on the lead runner! The second baseman should be covering first in case you need it.',
    errorVarianceApplies: true,
  },
  {
    id: 'fvt-129',
    category: 'force-vs-tag',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'first-base',
    },
    question: 'Runner on second, grounder up the middle. Shortstop fields it, looks to you at first. Runner holding at second. What do you focus on?',
    options: [
      { id: 'a', text: 'Receive the throw and get the sure out, then check the runner' },
      { id: 'b', text: 'Fake like you\'re going to throw to third' },
      { id: 'c', text: 'Back up second base' },
      { id: 'd', text: 'Tell the shortstop to throw to third' },
    ],
    correctOptionId: 'a',
    explanation:
      'Your job is to catch the throw and get the out at first! After you secure the out, look to second in case the runner wandered too far off the bag.',
    errorVarianceApplies: false,
  },
  {
    id: 'fvt-130',
    category: 'force-vs-tag',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-left',
      fieldPosition: 'first-base',
    },
    question: 'Two outs, runner on third, grounder to short. Shortstop throwing to you. Runner from third breaking for home. What do you do?',
    options: [
      { id: 'a', text: 'Catch the ball and step on first - that ends the inning before the run scores' },
      { id: 'b', text: 'Cut the throw and fire home' },
      { id: 'c', text: 'Let the ball go to the catcher' },
      { id: 'd', text: 'Tag the batter instead of using the base' },
    ],
    correctOptionId: 'a',
    explanation:
      'With two outs, the run doesn\'t count if you get the third out! Catch the throw, step on first, and end the inning. The runner from third is irrelevant once you record the out.',
    errorVarianceApplies: false,
  },
];
