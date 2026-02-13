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
  {
    id: 'gbr-7',
    category: 'ground-ball-reads',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
    },
    question: 'You\'re on second, one out. Slow grounder up the middle. What do you do?',
    options: [
      { id: 'a', text: 'Stay at second' },
      { id: 'b', text: 'Break for third if it gets through' },
      { id: 'c', text: 'Go back toward first' },
      { id: 'd', text: 'Tag up' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a ball up the middle, read it! If the shortstop or second baseman fields it, stay put. If it gets through to center field, advance to third. Always be ready to advance on balls hit through the infield.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-8',
    category: 'ground-ball-reads',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
    },
    question: 'You\'re on first, no outs. Ground ball to shortstop. What\'s your move?',
    options: [
      { id: 'a', text: 'Run hard to second' },
      { id: 'b', text: 'Stop and get in a rundown to help the batter' },
      { id: 'c', text: 'Go back to first' },
      { id: 'd', text: 'Slide hard into second to break up the double play' },
    ],
    correctOptionId: 'a',
    explanation:
      'Run hard to second! Make them turn the double play. Your job is to get there as fast as possible to disrupt the timing. Getting into a rundown wastes the batter\'s at-bat. Slide hard but legally.',
    errorVarianceApplies: false,
  },
  {
    id: 'gbr-9',
    category: 'ground-ball-reads',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
    },
    question: 'Runners on first and second, one out. Ground ball to second baseman. You\'re on second. What do you do?',
    options: [
      { id: 'a', text: 'Run to third - it\'s to the right side' },
      { id: 'b', text: 'Stay at second - double play being turned' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Go back to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'Even with a double play in progress, advance to third! The second baseman is focused on turning two, not you. By the time they finish, you\'re safe at third. Always advance on balls to the right side.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-10',
    category: 'ground-ball-reads',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-left',
    },
    question: 'Two outs, you\'re on third. Ground ball to third baseman. What do you do?',
    options: [
      { id: 'a', text: 'Break for home on contact' },
      { id: 'b', text: 'Stay at third - throw is too short' },
      { id: 'c', text: 'Go halfway and read it' },
      { id: 'd', text: 'Wait for an error' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - GO! Even on a ball to the third baseman. They\'ll throw to first, and you can score. With two outs, you run on contact no matter where the ball is hit. Make them make a play at home.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-11',
    category: 'ground-ball-reads',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'bunt',
    },
    question: 'You\'re on second, no outs. Batter squares to bunt. What do you do?',
    options: [
      { id: 'a', text: 'Run to third on the bunt' },
      { id: 'b', text: 'Stay at second' },
      { id: 'c', text: 'Go back toward first' },
      { id: 'd', text: 'Wait to see where the bunt goes' },
    ],
    correctOptionId: 'd',
    explanation:
      'On a bunt, read the play first! If it\'s bunted toward third, you might be able to advance. If it\'s toward first base side, the third baseman might be able to get you. React to where the ball goes.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-12',
    category: 'ground-ball-reads',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-middle',
    },
    question: 'Runners on corners, one out. Ground ball to pitcher. You\'re on third. What do you do?',
    options: [
      { id: 'a', text: 'Break for home' },
      { id: 'b', text: 'Stay and see if they start a double play' },
      { id: 'c', text: 'Go halfway and read the throw' },
      { id: 'd', text: 'Go back to third' },
    ],
    correctOptionId: 'c',
    explanation:
      'Go halfway! If the pitcher throws to first, break for home - you can score. If they look you back, return to third safely. This is the "suicide squeeze" read without the squeeze call.',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-13',
    category: 'ground-ball-reads',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-left',
    },
    question: 'Runners on first and second, no outs. Hard grounder to third. You\'re on first. What do you do?',
    options: [
      { id: 'a', text: 'Run hard to second' },
      { id: 'b', text: 'Stop and try to get in a rundown' },
      { id: 'c', text: 'Go back to first' },
      { id: 'd', text: 'Stop at second' },
    ],
    correctOptionId: 'a',
    explanation:
      'Run hard to second! Even though the third baseman might step on the bag and throw to first, that\'s their problem. Your job is to run the bases hard. You\'re forced - no choice but to go.',
    errorVarianceApplies: false,
  },
  {
    id: 'gbr-14',
    category: 'ground-ball-reads',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-right',
    },
    question: 'Runners on second and third, one out. Ground ball to first baseman. You\'re on third. What do you do?',
    options: [
      { id: 'a', text: 'Go home on contact - it\'s to the right side' },
      { id: 'b', text: 'Stay at third - no force' },
      { id: 'c', text: 'Go halfway and read the throw' },
      { id: 'd', text: 'Tag up' },
    ],
    correctOptionId: 'c',
    explanation:
      'Go halfway! There\'s no force at home, so the first baseman will likely take the out at first. When they do, break for home. If they throw home, you can get back to third. Smart baserunning!',
    errorVarianceApplies: true,
  },
  {
    id: 'gbr-15',
    category: 'ground-ball-reads',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, runners on first and second. Ground ball up the middle. You\'re on second. What do you do?',
    options: [
      { id: 'a', text: 'Run hard - try to score' },
      { id: 'b', text: 'Stop at third' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Go halfway' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - be aggressive! Run hard and try to score. If the ball gets through, you should score easily. Even if it\'s fielded, they\'ll likely throw to first. Two outs means maximum aggression on the bases.',
    errorVarianceApplies: true,
  },
];
