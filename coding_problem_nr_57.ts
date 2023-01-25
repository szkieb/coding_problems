// Good morning! Here's your coding interview problem for today.
// This problem was asked by Amazon.

// Given a string s and an integer k, break up the string into multiple lines such that each line has a length of k or less.
// You must break it up so that words don't break across lines. Each line has to have the maximum possible amount of words.
// If there's no way to break the text up, then return null.

// You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

// For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, you should return:
// ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.

function splitStringbyNumber(s: string, k: number): string[] | null {
  // array to store split strings
  const splitArray: string[] = [];

  // number from which to start slicing string
  let indexStart = 0;

  // number prior to which we cut off string
  let cutOffPoint = k;

  // loop that checks input string
  while (indexStart < s.length) {
    // FYI RegExp did not work when testing on CodePen

    // check if 1st letter is white space and if so ignore
    // this check is technically unnecessary given the problem parameters
    //if (s[indexStart]===" "){
    //    indexStart= indexStart+1
    //    cutOffPoint = cutOffPoint +1
    //}

    // 1st check if character following cutOffPoint is white space
    if (s[cutOffPoint + 1] === " ") {
      // if white space found cut out word(s)
      const newString = s.slice(indexStart, cutOffPoint + 1);

      splitArray.push(newString);

      //  start next cut where last one finished plus one to ignore white space
      indexStart = cutOffPoint + 1;
      cutOffPoint = cutOffPoint + k + 1;
    }

    // 2nd check if end of string has been reached
    if (s[cutOffPoint + 1] === undefined) {
      // put whatever has not been pushed into splitArray
      const newString = s.slice(indexStart, s.length);
      splitArray.push(newString);

      // increase index in order to break loop
      indexStart = s.length;
    }

    // 3rd if not white space nor end of string go back one position and repeat
    if (s[cutOffPoint + 1] !== " " && s[cutOffPoint + 1] !== undefined) {
      cutOffPoint = cutOffPoint - 1;
    }
  }

  // return array or null if splitArray contains only s
  if (splitArray.length === 1) {
    return null;
  } else return splitArray;
}

module.exports = splitStringbyNumber;
