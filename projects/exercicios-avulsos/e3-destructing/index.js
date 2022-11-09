
export const getWinnersMessage = (listOfParticipants) => {
  const meuArray = {listOfParticipants}
  console.log('meu array: ', meuArray)
  let message = '';
  message += `The first person to complete the test was ${firstWinner}.\n`;
  message += `Right after, ${secondWinner} completed the test.\n`;
  message += `And, last but not least, ${thirdWinner} completed.\n\n`;
  message += `The other participants include ${otherParticipants}.`;
  return message;
};

export const getUserReport = (userData) => {
  // YOUR CODE HERE...
  let report = '';
  report += `The user ${name} is ${age} years old.\n`;
  report += `${name} lives at ${street} street in ${city} city - ${country}.\n`;
  if (profession === 'unknown') {
    report += `${name} doesn't have a profession.`;
  } else {
    report += `${name} works as a ${profession}.`;
  }
  return report;
};
