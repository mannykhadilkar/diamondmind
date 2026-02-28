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
  {
    id: 'tob-9',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: true },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, runners on corners. Ground ball to shortstop. What should both runners do?',
    options: [
      { id: 'a', text: 'Both run on contact' },
      { id: 'b', text: 'Runner on third stays, runner on first runs' },
      { id: 'c', text: 'Runner on third runs, runner on first stays' },
      { id: 'd', text: 'Both stay at their bases' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - both runners go! The shortstop will throw to first or second, and the runner on third can score. The runner on first needs to hustle too. Maximum aggression with two outs, always.',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-10',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-right',
    },
    question: 'Two outs, you\'re on second. Fly ball to right field. What\'s your move?',
    options: [
      { id: 'a', text: 'Tag up and advance' },
      { id: 'b', text: 'Run hard on contact - try to score' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Stay at second' },
    ],
    correctOptionId: 'b',
    explanation:
      'Two outs - run on contact! If it\'s caught, inning over anyway. If it drops, you need to be running full speed to have a chance to score. Don\'t waste time tagging up with two outs.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-11',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-right',
    },
    question: 'Two outs, runners on first and second. Grounder to second base. What happens?',
    options: [
      { id: 'a', text: 'Both runners sprint - no double play to worry about' },
      { id: 'b', text: 'Runner on second stays, runner on first runs' },
      { id: 'c', text: 'Both freeze to see if it\'s fielded' },
      { id: 'd', text: 'Runner on first gets in a rundown' },
    ],
    correctOptionId: 'a',
    explanation:
      'Both runners go full speed! With two outs, there\'s no double play threat - any out ends the inning. If the ball gets through or there\'s an error, runs can score. Sprint!',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-12',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'bunt',
    },
    question: 'Two outs, runner on third. Batter lays down a bunt. What does the runner do?',
    options: [
      { id: 'a', text: 'Run home on contact' },
      { id: 'b', text: 'Stay at third - don\'t get in a rundown' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Wait to see where the throw goes' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - go home! This is called a "two-out squeeze." Even if it\'s a bad bunt, the defense has to make a play. They\'ll usually throw to first. Sprint home and score the run!',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-13',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-right',
    },
    question: 'Two outs, you\'re on first. Ground ball to first baseman. What do you do?',
    options: [
      { id: 'a', text: 'Run hard to second' },
      { id: 'b', text: 'Stop - they might throw to second' },
      { id: 'c', text: 'Go back to first' },
      { id: 'd', text: 'Try to get in a rundown' },
    ],
    correctOptionId: 'a',
    explanation:
      'Keep running! The first baseman will step on first for the easy out. Your job is to run hard in case there\'s an error. With two outs, never slow down - always assume the best and keep sprinting.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-14',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: true },
      battedBall: 'ground-ball-left',
    },
    question: 'Two outs, runners on second and third. Slow roller to third. What do both runners do?',
    options: [
      { id: 'a', text: 'Both run hard - go on contact' },
      { id: 'b', text: 'Runner on third stays, runner on second goes to third' },
      { id: 'c', text: 'Both stay' },
      { id: 'd', text: 'Runner on third goes home only if throw goes to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - everyone runs! Even on a grounder right at the third baseman. They have to make a decision and can only get one out. Sprint home from third, sprint to third from second. Aggressive!',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-15',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: true },
      battedBall: 'fly-ball-center',
    },
    question: 'Two outs, bases loaded. Fly ball to center field. What should all runners do?',
    options: [
      { id: 'a', text: 'All tag up' },
      { id: 'b', text: 'All run on contact' },
      { id: 'c', text: 'Only runner on third goes' },
      { id: 'd', text: 'All freeze and watch' },
    ],
    correctOptionId: 'b',
    explanation:
      'Two outs - everyone runs on contact! If it\'s caught, inning\'s over. If it drops, with everyone running, you could score 2-3 runs. Never tag up with two outs - always run on contact.',
    errorVarianceApplies: false,
  },
  // Additional scenarios for First Base runners
  {
    id: 'tob-16',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, you\'re on first. Grounder up the middle. What do you do?',
    options: [
      { id: 'a', text: 'Run hard - try to get to third if it gets through' },
      { id: 'b', text: 'Stop at second' },
      { id: 'c', text: 'Wait to see if it\'s fielded' },
      { id: 'd', text: 'Stay close to first' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - be aggressive! If the ball gets through, you want to be at third (scoring position). Run hard on contact and read the play. Push for every base!',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-17',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'line-drive',
    },
    question: 'Two outs, you\'re on first. Line drive hit. What\'s different with two outs?',
    options: [
      { id: 'a', text: 'Run on contact - if caught, inning\'s over anyway' },
      { id: 'b', text: 'Freeze like normal' },
      { id: 'c', text: 'Tag up' },
      { id: 'd', text: 'Go halfway' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs changes the line drive rule! Normally you freeze, but with two outs, RUN! If it\'s caught, inning\'s over. If it drops, you need to be running to score.',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-18',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-center',
    },
    question: 'Two outs, you\'re on first. Fly ball to deep center. What\'s the rule?',
    options: [
      { id: 'a', text: 'Run on contact - no tagging with two outs' },
      { id: 'b', text: 'Tag up like normal' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Stay at first' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - run on EVERYTHING! Fly ball? Run! If caught, inning over. If dropped, you could score. Don\'t waste time tagging when there are two outs.',
    errorVarianceApplies: false,
  },
  // Additional scenarios for Second Base runners
  {
    id: 'tob-19',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-right',
    },
    question: 'Two outs, you\'re on second. Grounder to first baseman. What do you do?',
    options: [
      { id: 'a', text: 'Run! Try to score while they get the out at first' },
      { id: 'b', text: 'Stop at third' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Go halfway' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - be aggressive! The first baseman will likely step on first for the easy out. Sprint home - you can score on any ground ball with two outs.',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-20',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'ground-ball-left',
    },
    question: 'Two outs, you\'re on second. Grounder to shortstop. What\'s your move?',
    options: [
      { id: 'a', text: 'Run hard - you might score on the throw to first' },
      { id: 'b', text: 'Stay at second' },
      { id: 'c', text: 'Go to third only' },
      { id: 'd', text: 'Freeze and watch' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs changes everything! Run hard toward home. The shortstop will likely throw to first - that\'s your chance to score. Be aggressive!',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-21',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-left',
    },
    question: 'Two outs, you\'re on second. Fly ball to left field. How do you run?',
    options: [
      { id: 'a', text: 'Run on contact - full speed toward third and home' },
      { id: 'b', text: 'Tag up' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Stay at second' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - run on contact! If caught, inning\'s over. If it drops, you need to be sprinting to have a chance to score. No tagging with two outs.',
    errorVarianceApplies: false,
  },
  // Additional scenarios for Third Base runners
  {
    id: 'tob-22',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-left',
    },
    question: 'Two outs, you\'re on third. Grounder to shortstop. What do you do?',
    options: [
      { id: 'a', text: 'Sprint home on contact - score on the throw to first' },
      { id: 'b', text: 'Stay at third' },
      { id: 'c', text: 'Go halfway and read' },
      { id: 'd', text: 'Wait for the throw' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - GO! The shortstop will throw to first to end the inning. Sprint home and score! With two outs, you run on contact no matter what.',
    errorVarianceApplies: true,
  },
  {
    id: 'tob-23',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-right',
    },
    question: 'Two outs, you\'re on third. Fly ball to right field. What\'s the play?',
    options: [
      { id: 'a', text: 'Run on contact' },
      { id: 'b', text: 'Tag up' },
      { id: 'c', text: 'Stay at third' },
      { id: 'd', text: 'Go halfway' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - run on contact! No tagging needed. If caught, game over anyway. If dropped, you need to be running to score. Full speed!',
    errorVarianceApplies: false,
  },
  {
    id: 'tob-24',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, you\'re on third. Comebacker to pitcher. What do you do?',
    options: [
      { id: 'a', text: 'Sprint home - pitcher will throw to first' },
      { id: 'b', text: 'Stay at third' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Fake and go back' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - GO! Even on a comebacker to the pitcher. They\'ll throw to first for the out. Sprint home and score the run!',
    errorVarianceApplies: true,
  },
  // Multiple runner situations
  {
    id: 'tob-25',
    category: 'two-out-baserunning',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'ground-ball-middle',
    },
    question: 'Two outs, runners on first and second. Grounder up the middle. You\'re on second. What do you do?',
    options: [
      { id: 'a', text: 'Run hard - try to score on any base hit' },
      { id: 'b', text: 'Stop at third' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Tag up' },
    ],
    correctOptionId: 'a',
    explanation:
      'Two outs - maximum aggression! If the ball gets through, you should score. If it\'s fielded, they\'ll throw to first and the inning ends. Run hard!',
    errorVarianceApplies: true,
  },
];
