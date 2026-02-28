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
  {
    id: 'tur-8',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-left',
      throwDistance: 'medium',
    },
    question: 'You\'re on third, no outs. Medium-depth fly to left. What should you do?',
    options: [
      { id: 'a', text: 'Tag up and try to score' },
      { id: 'b', text: 'Stay at third - it\'s not deep enough' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'With no outs, be aggressive! A medium-depth fly to left gives the outfielder a long throw home. Tag up and test their arm. Even if it\'s close, the run is valuable and you have two more outs to try again if held.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-9',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-center',
      throwDistance: 'medium',
    },
    question: 'You\'re on second, one out. Fly ball to medium center field. What\'s the play?',
    options: [
      { id: 'a', text: 'Tag up and advance to third' },
      { id: 'b', text: 'Go halfway and read it' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'b',
    explanation:
      'Go halfway on a medium fly! If it drops, you can make it to third or maybe score. If caught, get back to second. Tagging from second on a medium fly is risky - center fielder has a good angle to third.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-10',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'fly-ball-right',
      throwDistance: 'long',
    },
    question: 'Runners on first and second, no outs. Deep fly to right. You\'re on second. What do you do?',
    options: [
      { id: 'a', text: 'Tag up and advance to third' },
      { id: 'b', text: 'Go halfway' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Deep fly to right from second base - tag up! The right fielder has the longest throw to third. If the ball is deep, you can easily advance. Get to third and put yourself in scoring position.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-11',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-right',
      throwDistance: 'short',
    },
    question: 'You\'re on third, one out. Short fly ball to right field. What\'s the call?',
    options: [
      { id: 'a', text: 'Tag up and try to score' },
      { id: 'b', text: 'Stay at third after the catch' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'b',
    explanation:
      'Short fly to right means a short throw home. Don\'t tag up - you\'ll be thrown out easily. Stay at third and wait for a better opportunity. You still have one more out to score.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-12',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: true },
      battedBall: 'fly-ball-left',
      throwDistance: 'long',
    },
    question: 'Runners on second and third, no outs. Deep fly to left. What should the runner on third do?',
    options: [
      { id: 'a', text: 'Tag up and score after the catch' },
      { id: 'b', text: 'Stay at third' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Deep fly with no outs - tag and go! The left fielder has a long throw home. Score the run. Even if the runner on second advances to third, getting one run in with no outs is great.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-13',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: true },
      battedBall: 'fly-ball-center',
      throwDistance: 'long',
    },
    question: 'Runners on corners, one out. Deep fly to center. Runner on third should...',
    options: [
      { id: 'a', text: 'Tag up and score' },
      { id: 'b', text: 'Stay at third - let the other runner advance' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run immediately on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Score the run! Deep fly means you can tag and easily beat the throw. It doesn\'t matter what the runner on first does - take the run. The center fielder can\'t throw two places at once.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-14',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-left',
      throwDistance: 'short',
    },
    question: 'You\'re on second, no outs. Shallow fly ball to left field. What do you do?',
    options: [
      { id: 'a', text: 'Tag up and go to third' },
      { id: 'b', text: 'Go halfway and read it' },
      { id: 'c', text: 'Stay close to second' },
      { id: 'd', text: 'Run to third on contact' },
    ],
    correctOptionId: 'b',
    explanation:
      'On a shallow fly, go halfway. If it drops, you can get to third or even score. If it\'s caught, the throw to third is short - get back to second. Don\'t tag up on shallow flies from second base.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-15',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: true, second: true, third: true },
      battedBall: 'fly-ball-center',
      throwDistance: 'long',
    },
    question: 'Bases loaded, one out. Deep fly to center. What should all runners do?',
    options: [
      { id: 'a', text: 'All tag up and advance one base' },
      { id: 'b', text: 'Only runner on third tags up' },
      { id: 'c', text: 'All stay at their bases' },
      { id: 'd', text: 'All run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a deep fly with one out, everyone tags! The runner on third scores easily. The center fielder can only throw to one place. Runners on first and second should also tag and advance while the throw goes home.',
    errorVarianceApplies: true,
  },
  // Additional scenarios for First Base tagging
  {
    id: 'tur-16',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-center',
      throwDistance: 'long',
    },
    question: 'You\'re on first, no outs. Deep fly ball to center. What\'s your move?',
    options: [
      { id: 'a', text: 'Go halfway and read the play' },
      { id: 'b', text: 'Tag up and advance to second after catch' },
      { id: 'c', text: 'Run to second immediately' },
      { id: 'd', text: 'Stay at first' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a deep fly from first, go halfway. If it\'s caught, get back. If it drops, advance to second or third. Tagging from first base to second rarely makes sense - the throw is too short.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-17',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-left',
      throwDistance: 'short',
    },
    question: 'You\'re on first, one out. Shallow fly to left. What should you do?',
    options: [
      { id: 'a', text: 'Stay close to first and be ready to get back' },
      { id: 'b', text: 'Tag up and go' },
      { id: 'c', text: 'Run on contact' },
      { id: 'd', text: 'Go halfway' },
    ],
    correctOptionId: 'a',
    explanation:
      'On a shallow fly, stay close to first! You might get doubled off if caught. Be ready to get back safely. Don\'t venture far on short flies.',
    errorVarianceApplies: false,
  },
  {
    id: 'tur-18',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: true, second: false, third: false },
      battedBall: 'fly-ball-right',
      throwDistance: 'long',
    },
    question: 'You\'re on first, no outs. Deep fly to right field corner. What do you do?',
    options: [
      { id: 'a', text: 'Go halfway - if it drops, you can get to third' },
      { id: 'b', text: 'Tag and go to second' },
      { id: 'c', text: 'Stay at first' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Go halfway on a deep fly to right! If it drops, you might make it to third. If caught, get back to first. Tagging from first rarely gains you much.',
    errorVarianceApplies: false,
  },
  // Additional scenarios for Second Base tagging
  {
    id: 'tur-19',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-left',
      throwDistance: 'long',
    },
    question: 'You\'re on second, no outs. Deep fly to left field. What\'s your play?',
    options: [
      { id: 'a', text: 'Tag up and advance to third after the catch' },
      { id: 'b', text: 'Go halfway' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Deep fly to left from second base - TAG! Left fielder has a long throw to third. You can easily advance and get into scoring position.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-20',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-right',
      throwDistance: 'long',
    },
    question: 'You\'re on second, one out. Deep fly to right field. What do you do?',
    options: [
      { id: 'a', text: 'Tag up and go to third' },
      { id: 'b', text: 'Go halfway' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Right fielder has the longest throw to third! Tag up and advance on any deep fly to right. Get to third and be in scoring position.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-21',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: true, third: false },
      battedBall: 'fly-ball-center',
      throwDistance: 'short',
    },
    question: 'You\'re on second, no outs. Shallow fly to center. What\'s your read?',
    options: [
      { id: 'a', text: 'Go halfway - don\'t tag on shallow flies' },
      { id: 'b', text: 'Tag and go' },
      { id: 'c', text: 'Stay at second' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Shallow fly means go halfway! If it drops, advance. If caught, the throw to third is too short to tag. Play it smart.',
    errorVarianceApplies: false,
  },
  // Additional scenarios for Third Base tagging
  {
    id: 'tur-22',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-right',
      throwDistance: 'long',
    },
    question: 'You\'re on third, no outs. Deep fly to right field. What do you do?',
    options: [
      { id: 'a', text: 'Tag up and score after the catch' },
      { id: 'b', text: 'Stay at third' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Deep fly to right gives you the longest throw home. Tag up and score! This is an easy sacrifice fly situation. Take the run.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-23',
    category: 'tag-up-rules',
    situation: {
      outs: 1,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-center',
      throwDistance: 'medium',
    },
    question: 'You\'re on third, one out. Medium-depth fly to center. Should you tag?',
    options: [
      { id: 'a', text: 'Tag and go - test the outfielder\'s arm' },
      { id: 'b', text: 'Stay at third' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'One out means be aggressive! Medium-depth fly to center is taggable. Test the arm - if it\'s close, you still have one out left if you\'re held.',
    errorVarianceApplies: true,
  },
  {
    id: 'tur-24',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: false, second: false, third: true },
      battedBall: 'fly-ball-left',
      throwDistance: 'short',
    },
    question: 'You\'re on third, no outs. Shallow fly to left. What\'s the call?',
    options: [
      { id: 'a', text: 'Stay at third - throw is too short' },
      { id: 'b', text: 'Tag and try to score' },
      { id: 'c', text: 'Go halfway' },
      { id: 'd', text: 'Run on contact' },
    ],
    correctOptionId: 'a',
    explanation:
      'Shallow fly to left means a short throw home. Don\'t tag - you\'ll be thrown out easily. Wait for a deeper fly. You have no outs - be patient.',
    errorVarianceApplies: false,
  },
  // Mixed base situations
  {
    id: 'tur-25',
    category: 'tag-up-rules',
    situation: {
      outs: 0,
      runners: { first: true, second: true, third: false },
      battedBall: 'fly-ball-right',
      throwDistance: 'long',
    },
    question: 'Runners on first and second, no outs. Deep fly to right. You\'re on first. What do you do?',
    options: [
      { id: 'a', text: 'Go halfway and read it' },
      { id: 'b', text: 'Tag and go to second' },
      { id: 'c', text: 'Run on contact' },
      { id: 'd', text: 'Stay at first' },
    ],
    correctOptionId: 'a',
    explanation:
      'As the runner on first, go halfway. The runner on second will likely tag and go to third. If the ball drops, you\'ll be in position to advance.',
    errorVarianceApplies: false,
  },
];
