import type { Scenario } from '../../../types';

export const twoOutBaserunningScenarios: Scenario[] = [
  {
    id: 'tob-1',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-left',
    },
    question: 'Two outs, you\'re on first. Ground ball to shortstop. What do you do?',
    options: [
      { id: 'a', text: 'Stay close to first and watch' },
      { id: 'b', text: 'Run hard to second on contact' },
      { id: 'c', text: 'Take a few steps and freeze' },
      { id: 'd', text: 'Wait to see if it gets through' },
    ],
    correctOptionId: 'b',
    explanation:
      'With two outs, RUN ON CONTACT! If the fielder gets the out at first, the inning is over anyway. You must be aggressive and try to get into scoring position or even score on an error.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-2',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, you\'re on second. Ground ball up the middle. What\'s your move?',
    options: [
      { id: 'a', text: 'Stay at second until the ball is through' },
      { id: 'b', text: 'Run hard! Try to score on contact' },
      { id: 'c', text: 'Go halfway and read the play' },
      { id: 'd', text: 'Tag up at second base' },
    ],
    correctOptionId: 'b',
    explanation:
      'Two outs means you run on anything! On a ball up the middle, break for third and look to score. Even if it\'s fielded, they\'ll likely throw to first - giving you a chance to score. Be aggressive!',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-3',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'fly-ball-left',
    },
    question: 'Two outs, runners on first and second. Fly ball to left field. What should runners do?',
    options: [
      { id: 'a', text: 'Tag up and wait for the catch' },
      { id: 'b', text: 'Run on contact - full speed' },
      { id: 'c', text: 'Go halfway and freeze' },
      { id: 'd', text: 'Stay at your bases' },
    ],
    correctOptionId: 'b',
    explanation:
      'With two outs, ALWAYS run on contact - even on fly balls! If it\'s caught, inning over. If it drops, you need to be running to score or advance. No double play to worry about with two outs.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-4',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-right',
    },
    question: 'Two outs, you\'re on third. Ground ball to second baseman. What do you do?',
    options: [
      { id: 'a', text: 'Stay at third and wait' },
      { id: 'b', text: 'Break for home on contact' },
      { id: 'c', text: 'Go halfway and read the throw' },
      { id: 'd', text: 'Tag up at third' },
    ],
    correctOptionId: 'b',
    explanation:
      'Two outs, go on contact! Sprint home as soon as the ball is hit. The second baseman will almost always throw to first. Even if they try to throw home, you have a great chance to score.',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-5',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-center',
      throwDistance: 'medium',
    },
    question: 'Two outs, you\'re on second. Line drive to center. What\'s the play?',
    options: [
      { id: 'a', text: 'Freeze and see if it\'s caught' },
      { id: 'b', text: 'Go full speed on contact' },
      { id: 'c', text: 'Tag up at second' },
      { id: 'd', text: 'Go back to second immediately' },
    ],
    correctOptionId: 'b',
    explanation:
      'Two outs changes everything - even on line drives! Normally you\'d freeze, but with two outs, you run on contact. If it\'s caught, game over anyway. If it drops, you need to be sprinting to have a chance to score.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-6',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-right',
    },
    question: 'Two outs, you\'re on first. Fly ball to right field. What\'s your approach?',
    options: [
      { id: 'a', text: 'Go halfway and read it' },
      { id: 'b', text: 'Tag up and advance after catch' },
      { id: 'c', text: 'Run hard on contact' },
      { id: 'd', text: 'Stay at first until you see the result' },
    ],
    correctOptionId: 'c',
    explanation:
      'With two outs, sprint on contact! If caught, inning is over - doesn\'t matter where you are. If it drops, you want to be at second, maybe rounding for third. Two-out baserunning = maximum aggression.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-7',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: true },
      battedBall: 'ground-ball-left',
    },
    question: 'Two outs, bases loaded. Ground ball to third. What should all runners do?',
    options: [
      { id: 'a', text: 'Everyone runs on contact' },
      { id: 'b', text: 'Runners hold and see if it\'s fielded' },
      { id: 'c', text: 'Only the runner on third should go' },
      { id: 'd', text: 'The runner on first waits for the throw' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs, everyone runs! Any out ends the inning, so all runners go on contact. If the ball gets through or there\'s an error, runs will score. Don\'t get caught watching - be aggressive!',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-8',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-left',
      throwDistance: 'long',
    },
    question: 'Two outs, runners on second and third. Deep fly to left. What happens?',
    options: [
      { id: 'a', text: 'Both runners tag up' },
      { id: 'b', text: 'Both runners go on contact' },
      { id: 'c', text: 'Runner on third tags, runner on second stays' },
      { id: 'd', text: 'Both runners stay at their bases' },
    ],
    correctOptionId: 'b',
    explanation:
      'Two outs = run on contact, always! Even on fly balls. If it drops, both runners should score. If it\'s caught, the inning ends regardless. There\'s no benefit to tagging up with two outs.',
    errorVarianceApplies: false,
  },
];
