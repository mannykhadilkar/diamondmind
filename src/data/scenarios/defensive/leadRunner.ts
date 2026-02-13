import type { Scenario } from '../../../types';

export const leadRunnerScenarios: Scenario[] = [
  {
    id: 'lr-1',
    category: 'lead-runner',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
      runnerSpeed: 'slow',
    },
    question: 'Slow runner on first, grounder to short. Where do you throw?',
    options: [
      { id: 'a', text: 'Throw to second for the force and possible double play', targetBase: 'second' },
      { id: 'b', text: 'Throw directly to first', targetBase: 'first' },
      { id: 'c', text: 'Hold the ball and check the runner' },
      { id: 'd', text: 'Throw to third base', targetBase: 'third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With a slow runner and no outs, throw to second for the force. A slow runner gives you time for the double play (6-4-3). Getting the lead runner and having a chance at two outs is the best play.',
    errorVarianceApplies: true,
  },
  {
    id: 'lr-2',
    category: 'lead-runner',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
      runnerSpeed: 'fast',
    },
    question: 'Two outs, fast runner on first, grounder to short. Best throw?',
    options: [
      { id: 'a', text: 'Throw to second for the force', targetBase: 'second' },
      { id: 'b', text: 'Throw to first - it\'s the sure out', targetBase: 'first' },
      { id: 'c', text: 'Tag the runner yourself' },
      { id: 'd', text: 'Flip to the pitcher' },
    ],
    correctOptionId: 'b',
    explanation:
      'With two outs, you only need one out. Against a fast runner, the throw to first is the sure out - shorter throw, bigger target. Don\'t risk the runner beating the throw to second when first base is easier.',
    errorVarianceApplies: true,
  },
  {
    id: 'lr-3',
    category: 'lead-runner',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
      runnerSpeed: 'average',
    },
    question: 'Runners on first and second, grounder to third. Where\'s the throw?',
    options: [
      { id: 'a', text: 'Step on third, throw to first for double play' },
      { id: 'b', text: 'Throw to second base', targetBase: 'second' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner coming from second' },
    ],
    correctOptionId: 'a',
    explanation:
      'With runners on first and second, stepping on third gives you the force out, then throw to first for the 5-3 double play. This is better than the longer throw to second. Always look for the easiest double play.',
    errorVarianceApplies: true,
  },
  {
    id: 'lr-4',
    category: 'lead-runner',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'pitcher',
      runnerSpeed: 'fast',
    },
    question: 'Bases loaded, one out, comebacker to the pitcher. Best play?',
    options: [
      { id: 'a', text: 'Throw home for the force out', targetBase: 'home' },
      { id: 'b', text: 'Throw to first for the sure out', targetBase: 'first' },
      { id: 'c', text: 'Step on the mound and throw to second', targetBase: 'second' },
      { id: 'd', text: 'Throw to third base', targetBase: 'third' },
    ],
    correctOptionId: 'a',
    explanation:
      'With bases loaded, home is the shortest throw AND prevents a run from scoring. The 1-2-3 double play (pitcher to catcher to first) is ideal. Getting the lead runner at home is the priority.',
    errorVarianceApplies: true,
  },
  {
    id: 'lr-5',
    category: 'lead-runner',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
      runnerSpeed: 'fast',
    },
    question: 'Fast runner on second, grounder to second base. What\'s the play?',
    options: [
      { id: 'a', text: 'Throw to third to get the lead runner', targetBase: 'third' },
      { id: 'b', text: 'Throw to first for the sure out', targetBase: 'first' },
      { id: 'c', text: 'Hold the ball and freeze the runner' },
      { id: 'd', text: 'Flip to shortstop covering second', targetBase: 'second' },
    ],
    correctOptionId: 'b',
    explanation:
      'There\'s NO force at third with only a runner on second. The runner doesn\'t have to go, so you\'d need to tag them. Take the sure out at first. Don\'t give up a sure out chasing a runner who might stop.',
    errorVarianceApplies: true,
  },
  {
    id: 'lr-6',
    category: 'lead-runner',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-middle',
      fieldPosition: 'shortstop',
      runnerSpeed: 'slow',
      throwDistance: 'medium',
    },
    question: 'Runners on corners (1st and 3rd), no outs, grounder to short. What do you do?',
    options: [
      { id: 'a', text: 'Throw home to get the lead runner', targetBase: 'home' },
      { id: 'b', text: 'Start the 6-4-3 double play', targetBase: 'second' },
      { id: 'c', text: 'Throw to first only', targetBase: 'first' },
      { id: 'd', text: 'Check the runner at third, then throw to first' },
    ],
    correctOptionId: 'b',
    explanation:
      'With runners on first and third, prioritize the double play. The run might score, but getting two outs is worth it with no outs. Conceding one run to get two outs is usually the right trade-off.',
    errorVarianceApplies: true,
  },
  {
    id: 'lr-7',
    category: 'lead-runner',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
      runnerSpeed: 'average',
    },
    question: 'Two outs, runners on first and second, grounder to short. Best throw?',
    options: [
      { id: 'a', text: 'Throw to third for the force', targetBase: 'third' },
      { id: 'b', text: 'Flip to second for the force', targetBase: 'second' },
      { id: 'c', text: 'Throw to first for the out', targetBase: 'first' },
      { id: 'd', text: 'Tag the runner coming from second' },
    ],
    correctOptionId: 'c',
    explanation:
      'With two outs, take the easiest out. First base is typically the safest throw - bigger target, stationary. While any force out works, don\'t overcomplicate it. Get the third out and end the inning.',
    errorVarianceApplies: true,
  },
];
