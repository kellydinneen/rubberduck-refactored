const determinePrescriptionType = (inputs) => {
  const user = categorizeUser(inputs);
  const problem = categorizeProblem(inputs);
  if (user.energy === 'very tired') {
    return 'rest'
  } else if (user.energy === 'hungry') {
    return 'nourishment'
  } else if (user.energy === "stale") {
    return 'movement';
  } else if ((problem === 'vague' && user.valence === 'down') || problem === 'impossible') {
    return 'affirmation';
  } else if (problem === 'vague' && user.valence === 'up') {
    return 'advice';
  } else if (
    (problem === 'crunchy' && user.valence === 'up') ||
    (problem === 'ideas' && user.valence === 'up' && user.relevantTraits.includes('over-cautious')) ||
    (problem === 'architecture' && user.valence === 'up' && user.relevantTraits.includes('imaginative'))
  ) {
    return 'oblique';
  } else if (problem === 'ideas') {
    return 'ideation';
  } else if (problem !== 'vague' || user.valence === 'down') {
    return 'science';
  } else {
    return 'affirmation';
  }
}

const categorizeProblem = (inputs) => {
  if (inputs.progressTime === 'never' && inputs.issueAge > 7) {
    return 'impossible';
  } else if (inputs.techType === 'everything' || (inputs.techType === 'some other kind' && inputs.problemType === "don't know how to start" || 'concept confusion')) {
    return 'vague';
  } else if (inputs.problemType === "coder's block") {
    return 'ideation';
  } else if (inputs.techType === 'crunchy') {
    return 'crunchy';
  } else if (inputs.problemType === "big bad bug") {
    return 'architecture';
  } else {
    return 'vague';
  }
}


const categorizeUser = (inputs) => {
  let user = {};
  user.energy = determineUserEnergy(inputs);
  user.valence = determineUserValence(inputs);
  user.relevantTraits = inputs.selfDescription.filter(trait => trait === 'over-cautious' || 'anxious' || 'obsessive' || 'imaginative')
  return user;
}

const determineUserEnergy = (inputs) => {
  if (inputs.issueHours > 10 || inputs.currentTime === '11' || inputs.breakTime === 'yesterday') {
    return 'very tired';
  } else if (inputs.eatTime === 'yesterday') {
    return "hungry";
  } else if (inputs.breakTime === 'hours' || inputs.currentTime === '9') {
    return "stale";
  } else {
    return "rested";
  }
}

const determineUserValence = (inputs) => {
  const score = determineSelfImage(inputs) + inputs.userFeeling;
  return score >= 2 ? 'up' : 'down';
}

const determineSelfImage = (inputs) => {
  const positiveDescriptors = ['adventurous', 'meticulous', 'confident', 'imaginative', 'hard-working', 'brilliant', 'fast-learner', 'analytical', 'insightful', 'creative'];
  const negativeDescriptors = ['procrastinator', 'over-cautious', 'sloppy', 'self-concious', 'anxious', 'obsessive', 'lazy', 'boring', 'slow-learner'];
  const negativeSelections = inputs.selfDescription.filter(trait => negativeDescriptors.includes(trait));
  const positiveSelections = inputs.selfDescription.filter(trait => positiveDescriptors.includes(trait));
  if (negativeSelections.length >= positiveSelections.length) {
    return 0;
  } else {
    return 1;
  }
}

export default determinePrescriptionType;
