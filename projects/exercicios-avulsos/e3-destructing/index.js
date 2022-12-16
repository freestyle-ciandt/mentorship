export const getWinnersMessage = (listOfParticipants) => {
  const [firstWinner, secondWinner, thirdWinner, ...otherParticipants] = listOfParticipants
  let message = '';
  message += `The first person to complete the test was ${firstWinner}.\n`;
  message += `Right after, ${secondWinner} completed the test.\n`;
  message += `And, last but not least, ${thirdWinner} completed.\n\n`;
  message += `The other participants include ${otherParticipants.join(', ')}.`;
  return message;
};

export const getUserReport = (userData) => {
  const { nome, age, address: {street, city, country = 'Brazil'}, profession = 'unknown' } = userData
  let report = '';
  report += `The user ${nome} is ${age} years old.\n`;
  report += `${nome} lives at ${street} street in ${city} city - ${country}.\n`;
  if (profession === 'unknown') {
    report += `${nome} doesn't have a profession.`;
  } else {
    report += `${nome} works as a ${profession}.`;
  }
  return report;
};
