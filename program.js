// #1
function upperCaser(input) {
  return input.toUpperCase();
}

module.exports = upperCaser;


// #2
function repeat(operation, num) {
  if(num > 0) {
    operation();
    repeat(operation, num - 1);
  }
}

module.exports = repeat;

// #3
function doubleAll(numbers) {
  return numbers.map(function(number) {
    return number * 2;
  });
}

module.exports = doubleAll;

// #4
function getShortMessages(messages) {
  return messages.filter(function(message){
    return message.message.length < 50;
  }).map(function(message) {
    return message.message;
  });
}

module.exports = getShortMessages;

// #5
// Every isn't really needed here
// If we only use some, we don't have to scan both lists if we
// find something that doesn't exist
function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return !submittedUsers.some(function(submittedUser){
      return !goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });

  };
}

module.exports = checkUsersValid;

// #6
function countWords(inputWords) {
  return inputWords.reduce(function(wordCounts, word) {
    wordCounts[word] = ++wordCounts[word] || 1;
    return wordCounts;
  }, {}); // The second arg here inits the return obj
}

module.exports = countWords;
