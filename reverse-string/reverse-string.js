var reverseString = function(word) {
  // first lets understand the input and output, in this case it is a string
  // create a variable reverse to store that string
  let reverse = '';
  // then loop through the string with i as string.length-1, till i >= 0, keep decrementing i
  for(let i = word.length-1; i >= 0 ; i--) {
    // print it from reverse, concatenate it to the variable created above
    reverse += word[i];
  }
  // return that variable
  return reverse;
};
