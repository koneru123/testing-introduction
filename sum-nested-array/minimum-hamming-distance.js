/* Write a function, minimumHammingDistance, that takes in two strings
(both representing DNA strands), and returns the minimum possible
hamming distance between the shorter string and a substring of the
longer string. You should use your hammingDistance function as part of the solution.

Example:
minimumHammingDistance('GTA', 'CCTAGT') // returns 1

The minimum Hamming Distance is found when the string 'GTA' is compared with the substring 'CTA'
   GTA
CC|CTA|GA*/

/*

// Input is 2 strings
    // 'GTA','CCTAGT'

// Output is expected to be a number, it measures the minimum number of substitutions required to change one string into the other
  // 1

//Steps
  1. Create a minimumHammingDistance() function
  2. Pass 2 strings (str1, str2) as arguments to this function
  3. Create a distance variable, assign it to 0 initially
  4. get the length of both the strings and assign them to two different variables
  5. Case1, if both the strings lengths are equal just do a simple comparison and increment distance if the characters are different
  6. Case2, if the length is unequal and if string1 length is less than string 2 length
     - First try to get the last character from string1
     - Try to look for this character's index in string2 using indexOf
     - Based on the characters index and characterIndex-(string1.length-1), we get the substring from string2
     - then we call the main function by passing string1 & substring and try to compare and find the minimum hamming distance
  7. return the distance variable
  8. Case 3, if the length is unequal and if string2 length is less than string1 length
     - Repeat steps 6, 7
*/

var minimumHammingDistance = function(string1, string2) {
    const str1Length = string1.length;
    const str2Length = string2.length;
    let distance = 0;
    if(str1Length === str2Length) {
      for(let i = 0; i < str1Length; i++) {
        if(string1[i] !== string2[i]) {
          distance += 1;
        }
      }
      return distance;
    } else {
      if(str1Length < str2Length) { //const str1 = 'GTA';
      //const str2 = 'CCTAGT';
        let str1LastLetter = string1[str1Length-1];
        //console.log(str1LastLetter);
        //for(let j = 0; j < string2.length; j++) {
          const findStr1LastLetterIdx = string2.indexOf(str1LastLetter);
          //console.log(findStr1LastLetterIdx);
          if(findStr1LastLetterIdx > -1) {
            const str2subString = string2.substr(findStr1LastLetterIdx-(str1Length-1),findStr1LastLetterIdx);
            //console.log(str2subString);
            return minimumHammingDistance(string1, str2subString);
          }
        //}
      } else {
        let str2LastLetter = string2[str2Length-1];
        //console.log(str2LastLetter);
        let str2LastLetterIndex = string1.indexOf(str2LastLetter);
        //console.log(str2LastLetterIndex);
        let str1SubString = string1.substr(str2LastLetterIndex-(str2.length-1),str2LastLetterIndex);
        //console.log(str1SubString);
        return minimumHammingDistance(string2, str1SubString);
      }
    }
}

const str1 = 'GTA';
const str2 = 'CCTAGT';
//const str1 = 'karolin';
//const str2 = 'kathrin';
console.log(minimumHammingDistance(str1, str2));
