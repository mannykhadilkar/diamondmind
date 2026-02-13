import type { Scenario } from '../../../types';

export const popUpPriorityScenarios: Scenario[] = [
  {
    id: 'pop-1',
    category: 'popup-priority',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'popup-infield',
      fieldPosition: 'shortstop',
      ballLocation: { x: 45, y: 50 },
    },
    question: 'Pop-up in the infield with runners on 1st and 2nd. What happens?',
    options: [
      { id: 'a', text: 'Infield fly rule - batter is automatically out' },
      { id: 'b', text: 'Catch it normally, runners must tag up' },
      { id: 'c', text: 'Let it drop to get the double play' },
      { id: 'd', text: 'Runners can advance at their own risk' },
    ],
    correctOptionId: 'a',
    explanation:
      'This is an infield fly situation: less than 2 outs with runners on 1st and 2nd (or bases loaded). The batter is automatically out to prevent the defense from intentionally dropping the ball for a cheap double play. Runners may advance at their own risk.',
    errorVarianceApplies: false,
  },
  {
    id: 'pop-2',
    category: 'popup-priority',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'popup-infield',
      fieldPosition: 'second-base',
      ballLocation: { x: 55, y: 52 },
    },
    question: 'Pop-up between first and second with runner on first only. Infield fly?',
    options: [
      { id: 'a', text: 'Yes, infield fly is called' },
      { id: 'b', text: 'No, infield fly doesn\'t apply here' },
      { id: 'c', text: 'Only if there are two outs' },
      { id: 'd', text: 'Only if the runner is stealing' },
    ],
    correctOptionId: 'b',
    explanation:
      'Infield fly requires runners on 1st AND 2nd (or bases loaded). With only a runner on first, infield fly does NOT apply. This is because with only one force play available, there\'s less opportunity for the defense to get a cheap double play.',
    errorVarianceApplies: false,
  },
  {
    id: 'pop-3',
    category: 'popup-priority',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: false },
      battedBall: 'popup-infield',
      fieldPosition: 'shortstop',
      ballLocation: { x: 42, y: 48 },
    },
    question: 'Pop-up between shortstop and third base. Who has priority?',
    options: [
      { id: 'a', text: 'Third baseman has priority' },
      { id: 'b', text: 'Shortstop has priority' },
      { id: 'c', text: 'Whoever calls it first' },
      { id: 'd', text: 'Pitcher has priority' },
    ],
    correctOptionId: 'b',
    explanation:
      'Shortstop has priority over third base on pop-ups in between them. The general priority is: Corner outfielders > Center fielder > Shortstop > Second base > Pitcher > Catcher > Corner infielders. Shortstop ranges across more of the infield.',
    errorVarianceApplies: false,
  },
  {
    id: 'pop-4',
    category: 'popup-priority',
    situation: {
      outs: 2,
      runners: { first: true, second: true, third: false },
      battedBall: 'popup-infield',
      fieldPosition: 'pitcher',
      ballLocation: { x: 50, y: 60 },
    },
    question: 'Two outs, runners on 1st and 2nd, pop-up near the mound. Infield fly?',
    options: [
      { id: 'a', text: 'Yes, infield fly is called' },
      { id: 'b', text: 'No, infield fly doesn\'t apply with 2 outs' },
      { id: 'c', text: 'Only if the ball stays fair' },
      { id: 'd', text: 'Depends on the umpire' },
    ],
    correctOptionId: 'b',
    explanation:
      'Infield fly requires LESS than 2 outs. With 2 outs, the rule doesn\'t apply because the inning will end on any out anyway - there\'s no double play opportunity to prevent. This pop-up is a normal play.',
    errorVarianceApplies: false,
  },
  {
    id: 'pop-5',
    category: 'popup-priority',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: true },
      battedBall: 'popup-infield',
      fieldPosition: 'catcher',
      ballLocation: { x: 50, y: 80 },
    },
    question: 'Bases loaded, pop-up near home plate. What\'s the call?',
    options: [
      { id: 'a', text: 'Infield fly - batter is out regardless of catch' },
      { id: 'b', text: 'Catcher must catch it or batter reaches' },
      { id: 'c', text: 'Runners must tag up before advancing' },
      { id: 'd', text: 'Foul ball, play it over' },
    ],
    correctOptionId: 'a',
    explanation:
      'Bases loaded with less than 2 outs means infield fly applies. If it\'s a fair ball in the infield that can be caught with ordinary effort, the batter is automatically out. Runners can advance at their own risk but don\'t have to.',
    errorVarianceApplies: false,
  },
];
