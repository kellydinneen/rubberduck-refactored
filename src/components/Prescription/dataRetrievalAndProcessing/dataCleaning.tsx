const cleanData = (data: any, source: string) => {
  if (source === 'unstuck') {
    return approveSolutionContent(data);
  } else if (source === 'affirmations') {
    return approveAffirmationContent(data);
  } else if (source === 'advice') {
    return approveAdviceContent(data);
  } else {
    return {
      title: 'bad data',
      content: 'bad data',
      resource: 'bad data'
    };
  }
}

const approveSolutionContent = (solutionData: any) => {
  if (solutionData.selection.name && solutionData.selection.content) {
    return {
      title: solutionData.selection.name,
      content: solutionData.selection.content,
      resource: solutionData.selection.resource
    }
  } else {
    return {
      title: 'bad data',
      content: 'bad data',
      resource: 'bad data'
    };
  }
}

const approveAffirmationContent = (affData: any) => {
  if (affData.affirmation) {
    return {
      title: 'a little love',
      content: affData.affirmation,
      resource: 'https://www.psychologytoday.com/us/blog/sense-and-sensitivity/201401/3-ways-learn-love-yourself'
    }
  } else {
    return {
      title: 'bad data',
      content: 'bad data',
      resource: 'bad data'
    };
  }
}

const approveAdviceContent = (advData: any) => {
  if (advData.slip.advice) {
    return {
      title: 'some general advice',
      content: advData.slip.advice,
      resource: 'https://www.nytimes.com/2019/04/30/smarter-living/best-advice-youve-ever-received.html'
    }
  } else {
    return {
      title: 'bad data',
      content: 'bad data',
      resource: 'bad data'
    };
  }
}

export default cleanData;
