import type { Scenario } from '../../../types';

export const routinePlaysScenarios: Scenario[] = [
  {
    id: 'rp-1',
    category: 'routine-plays',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'shortstop',
    },
    question: 'Routine grounder to you at shortstop, no runners on. What do you do?',
    options: [
      { id: 'a', text: 'Field it cleanly and throw to first base', targetBase: 'first' },
      { id: 'b', text: 'Charge the ball aggressively' },
      { id: 'c', text: 'Let it come to you and flip to second', targetBase: 'second' },
      { id: 'd', text: 'Backhand it and throw off-balance' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a routine grounder with no runners, field it cleanly in front of you, set your feet, and make a strong throw to first. Don\'t rush or try to make it fancy - fundamentals win games.',
    errorVarianceApplies: true,
  },
  {
    id: 'rp-2',
    category: 'routine-plays',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'second-base',
    },
    question: 'Ground ball right at you at second base, no one on. What\'s the play?',
    options: [
      { id: 'a', text: 'Field and throw to first base', targetBase: 'first' },
      { id: 'b', text: 'Field and flip to shortstop', targetBase: 'second' },
      { id: 'c', text: 'Let it go through to right field' },
      { id: 'd', text: 'Dive for it to make a highlight play' },
    ],
    correctOptionId: 'a',
    explanation:
      'With no runners on, the only play is to first base. Field the ball, set your feet, and make a chest-high throw to first. Keep it simple and get the out.',
    errorVarianceApplies: true,
  },
  {
    id: 'rp-3',
    category: 'routine-plays',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-right',
      fieldPosition: 'first-base',
    },
    question: 'Grounder to you at first base, no runners. What do you do?',
    options: [
      { id: 'a', text: 'Field it and tag first base yourself' },
      { id: 'b', text: 'Field it and throw to second base', targetBase: 'second' },
      { id: 'c', text: 'Field it and throw to the pitcher covering first' },
      { id: 'd', text: 'Let the second baseman field it' },
    ],
    correctOptionId: 'a',
    explanation:
      'If the ball is hit close enough to first base, field it yourself and step on the bag! This is the safest play - no throw needed. Only throw to the pitcher if you\'re too far from the base.',
    errorVarianceApplies: false,
  },
  {
    id: 'rp-4',
    category: 'routine-plays',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: false },
      battedBall: 'ground-ball-left',
      fieldPosition: 'third-base',
    },
    question: 'Slow roller to third base, runner sprinting to first. What\'s your play?',
    options: [
      { id: 'a', text: 'Charge hard, barehand, and throw in one motion' },
      { id: 'b', text: 'Wait for it to come to you' },
      { id: 'c', text: 'Field it with two hands and set your feet' },
      { id: 'd', text: 'Let the pitcher field it' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a slow roller, you must charge aggressively. Barehand the ball if necessary and throw in one motion. Waiting allows the runner to beat it out. This is one of the toughest plays for a third baseman.',
    errorVarianceApplies: true,
  },
  {
    id: 'rp-5',
    category: 'routine-plays',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: false },
      battedBall: 'fly-ball-left',
      fieldPosition: 'left-field',
    },
    question: 'Fly ball to left field, no one on. What should you do?',
    options: [
      { id: 'a', text: 'Catch it and throw to the cutoff' },
      { id: 'b', text: 'Catch it and hold the ball' },
      { id: 'c', text: 'Let it bounce to play it safe' },
      { id: 'd', text: 'Dive for it dramatically' },
    ],
    correctOptionId: 'b',
    explanation:
      'With no runners on and two outs, simply catch the ball to end the inning. There\'s no reason to throw anywhere - hold the ball and jog it in. Don\'t risk an unnecessary throw that could lead to an error.',
    errorVarianceApplies: false,
  },
  {
    id: 'rp-6',
    category: 'routine-plays',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'bunt',
      fieldPosition: 'pitcher',
    },
    question: 'Bunt back to the pitcher, runner heading to first. What\'s the play?',
    options: [
      { id: 'a', text: 'Field it and throw to first base', targetBase: 'first' },
      { id: 'b', text: 'Let the catcher field it' },
      { id: 'c', text: 'Field it and throw to second base', targetBase: 'second' },
      { id: 'd', text: 'Hold the ball and check the runner' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a bunt back to the mound, the pitcher fields it and throws to first. Be quick but accurate. This is a routine play that pitchers must practice regularly.',
    errorVarianceApplies: true,
  },
  {
    id: 'rp-7',
    category: 'routine-plays',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: false },
      battedBall: 'fly-ball-center',
      fieldPosition: 'center-field',
    },
    question: 'Fly ball to straightaway center field. You\'re the center fielder. What do you do?',
    options: [
      { id: 'a', text: 'Call for it loudly and make the catch' },
      { id: 'b', text: 'Let the left fielder take it' },
      { id: 'c', text: 'Let the right fielder take it' },
      { id: 'd', text: 'Wait to see who else calls for it' },
    ],
    correctOptionId: 'a',
    explanation:
      'Center fielder has priority over corner outfielders on fly balls. Call "I got it!" loudly and early, wave off other fielders, and make the catch. Taking charge prevents collisions and confusion.',
    errorVarianceApplies: false,
  },
];
