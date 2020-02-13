var firstNonRepeatChar = function(word) {
  let nonRepeatChar = '';
  let obj = {};
  for(let i = 0; i < word.length; i++) {
    if(!obj[word[i]]) {
      obj[word[i]] = 1;
    } else {
      obj[word[i]]++;
    }
  }
  for(let j in obj) {
    if(obj[j] === 1) {
      nonRepeatChar = j;
      return nonRepeatChar;
    } else {
      nonRepeatChar = null;
    }
  }
  return nonRepeatChar;
}

//console.log(firstNonRepeatChar());