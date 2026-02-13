import type { Scenario } from '../../../types';

export const tagUpRulesScenarios: Scenario[] = [
  {
    id: 'tur-1',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-center',
    },
    question: 'You\'re on third, no outs. Deep fly ball to center field. What do you do?',
    options: [
      { id: 'a', text: 'Run home immediately on contact' },
      { id: 'b', text: 'Tag up and score after the catch' },
      { id: 'c', text: 'Stay at third - too risky' },
      { id: 'd', text: 'Go halfway and read the play' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a deep fly ball with less than 2 outs, tag up! Wait for the catch, then sprint home. A deep fly to center usually gives you enough time to score. This is called a "sacrifice fly" when it scores a run.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-2',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-left',
      throwDistance: 'short',
    },
    question: 'You\'re on third, one out. Shallow fly ball to left field. What\'s the call?',
    options: [
      { id: 'a', text: 'Tag up and go - you can beat the throw' },
      { id: 'b', text: 'Stay at third after the catch' },
      { id: 'c', text: 'Go halfway and see what happens' },
      { id: 'd', text: 'Run on contact before the catch' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a shallow fly ball, the throw home is too short - don\'t tag up. The left fielder can easily throw you out. Stay at third and wait for a better opportunity. One out means you still have two more chances to score.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-3',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-right',
    },
    question: 'You\'re on second, no outs. Deep fly ball to right field. What do you do?',
    options: [
      { id: 'a', text: 'Tag up and advance to third' },
      { id: 'b', text: 'Stay at second - only tag up from third' },
      { id: 'c', text: 'Run to third immediately on contact' },
      { id: 'd', text: 'Go back to first base' },
    ],
    correctOptionId: 'a',
    explanation:
      'You can tag up from ANY base, not just third! On a deep fly to right, tag up and advance to third. Now you\'re in scoring position with chances to score on a ground ball, wild pitch, or another fly ball.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-4',
    category: 'tag-up-rules',
    situation: {
      outs: 2,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-center',
    },
    question: 'Two outs, you\'re on third. Fly ball to center. What should you do?',
    options: [
      { id: 'a', text: 'Tag up and prepare to run' },
      { id: 'b', text: 'Run on contact - don\'t wait for the catch' },
      { id: 'c', text: 'Stay at third no matter what' },
      { id: 'd', text: 'Go halfway and read the play' },
    ],
    correctOptionId: 'b',
    explanation:
      'With two outs, you run on CONTACT! If the ball is caught, the inning is over anyway. If it drops, you need to be running to have a chance to score. Don\'t wait to tag up - go on contact with two outs.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-5',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: true },
      battedBall: 'fly-ball-left',
      throwDistance: 'long',
    },
    question: 'Runners on first and third, one out. Deep fly to left. What should the runner on third do?',
    options: [
      { id: 'a', text: 'Tag up and score after the catch' },
      { id: 'b', text: 'Stay at third - wait for the runner on first' },
      { id: 'c', text: 'Go halfway and wait' },
      { id: 'd', text: 'Run immediately on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a deep fly with a long throw, the runner on third should tag up and score. The left fielder can\'t throw home AND hold the runner on first. Take the run - it doesn\'t matter what the runner on first does.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-6',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-center',
      throwDistance: 'medium',
    },
    question: 'Runners on second and third, no outs. Medium fly to center. What should the runner on second do?',
    options: [
      { id: 'a', text: 'Tag up and advance to third' },
      { id: 'b', text: 'Stay at second after the catch' },
      { id: 'c', text: 'Go halfway between second and third' },
      { id: 'd', text: 'Run to third immediately' },
    ],
    correctOptionId: 'b',
    explanation:
      'You\'re already at second with a runner on third. On a medium fly, the runner on third might tag and score - the throw will go home. Stay at second (you can\'t go to third anyway). Wait for the play to develop.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-7',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-right',
      throwDistance: 'long',
    },
    question: 'You\'re on first, one out. Deep fly ball to right field. What do you do?',
    options: [
      { id: 'a', text: 'Tag up and advance to second after the catch' },
      { id: 'b', text: 'Stay at first - you can\'t tag up from first' },
      { id: 'c', text: 'Go halfway and read the play' },
      { id: 'd', text: 'Run to second immediately' },
    ],
    correctOptionId: 'c',
    explanation:
      'On a deep fly from first base, go halfway! If the ball is caught, you can get back. If it drops, you can likely advance to second or even third. Tagging up from first rarely makes sense - the throw to second is too easy.',
    errorVarianceApplies: false,
  },
];
