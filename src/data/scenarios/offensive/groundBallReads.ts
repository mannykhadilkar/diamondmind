import type { Scenario } from '../../../types';

export const groundBallReadsScenarios: Scenario[] = [
  {
    id: 'gbr-1',
    category: 'ground-ball-reads',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
    },
    question: 'You\'re the runner on second. Ground ball to the right side. What do you do?',
    options: [
      { id: 'a', text: 'Go! Advance to third on the ground ball' },
      { id: 'b', text: 'Stay at second base' },
      { id: 'c', text: 'Freeze and wait to see if it\'s caught' },
      { id: 'd', text: 'Go back to first base' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a ground ball hit to the RIGHT side (1B or 2B), runners on second should advance to third. The first baseman and second baseman have their backs to you while fielding, making it hard to throw you out at third.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-2',
    category: 'ground-ball-reads',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
    },
    question: 'You\'re on second. Ground ball to shortstop. What\'s your move?',
    options: [
      { id: 'a', text: 'Run to third immediately' },
      { id: 'b', text: 'Stay at second - don\'t risk it' },
      { id: 'c', text: 'Go halfway and read the play' },
      { id: 'd', text: 'Run back toward first' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a ground ball to the LEFT side (SS or 3B), stay at second! The shortstop is already facing third base and can easily throw you out. Only advance to third on ground balls hit to the right side or if the ball gets through.',
    errorVarianceApplies: false,
  },
  {
    id: 'gbr-3',
    category: 'ground-ball-reads',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, you\'re on first. Ground ball to the infield. What do you do?',
    options: [
      { id: 'a', text: 'Stay close to first and wait' },
      { id: 'b', text: 'Run hard! Go on contact with two outs' },
      { id: 'c', text: 'Take a few steps and freeze' },
      { id: 'd', text: 'Wait to see if it gets through' },
    ],
    correctOptionId: 'b',
    explanation:
      'With two outs, you RUN ON CONTACT! There\'s no double play to worry about, and you need to be aggressive to advance. If the ball is fielded and thrown to first, the inning is over anyway - so run hard and try to get into scoring position.',
    errorVarianceApplies: false,
  },
  {
    id: 'gbr-4',
    category: 'ground-ball-reads',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-middle',
    },
    question: 'You\'re on third with no outs. Ground ball to short. What do you do?',
    options: [
      { id: 'a', text: 'Run home immediately on contact' },
      { id: 'b', text: 'Stay at third - it\'s too risky with no outs' },
      { id: 'c', text: 'Go halfway and read the throw' },
      { id: 'd', text: 'Break for home after the throw to first' },
    ],
    correctOptionId: 'b',
    explanation:
      'With no outs, stay at third on a ground ball to the infield. You have two more chances to score (sacrifice fly, another hit, etc.). Running into an out at home with no outs is a major baserunning mistake.',
    errorVarianceApplies: false,
  },
  {
    id: 'gbr-5',
    category: 'ground-ball-reads',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-middle',
      throwDistance: 'medium',
    },
    question: 'One out, you\'re on third. Ground ball to second baseman. What\'s the play?',
    options: [
      { id: 'a', text: 'Go! Try to score on the ground ball' },
      { id: 'b', text: 'Stay at third - too risky' },
      { id: 'c', text: 'Go halfway, score if throw goes to first' },
      { id: 'd', text: 'Tag up like it\'s a fly ball' },
    ],
    correctOptionId: 'c',
    explanation:
      'With one out, read the play! Go halfway toward home. If the throw goes to first (most likely), break for home - you can often score. If they look you back, return safely to third. This is "reading the play" at its finest.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-6',
    category: 'ground-ball-reads',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'line-drive',
    },
    question: 'You\'re on first. Sharp line drive hit. What do you do?',
    options: [
      { id: 'a', text: 'Run hard to second' },
      { id: 'b', text: 'Freeze! See if it\'s caught first' },
      { id: 'c', text: 'Go back to first immediately' },
      { id: 'd', text: 'Take a walking lead' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a line drive, FREEZE! Line drives can be caught, and if you\'re too far off the base, you can be doubled off. Wait to see if it drops or gets through, then react. This is one of the most important baserunning rules.',
    errorVarianceApplies: false,
  },
];
