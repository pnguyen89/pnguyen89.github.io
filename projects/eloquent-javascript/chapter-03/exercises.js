////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min (num1, num2) {
  if (num1 > num2) {
    return num2;
  }
  else {
    return num1;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
  if (num === 0) {
    return true;
  } else if (num === 1) {
      return false;
  } else if (num > 1) {
    return isEven(num-2);
  } else {
    return false;
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChar(str, letter) {
  let splitStr = str.split(''); 
  let holdLetter = [];
  for (let i = 0; i < str.length; i++) {
    if (splitStr[i] === letter) {
      holdLetter.push(splitStr[i]);
    }
  } return holdLetter.length;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) {
  let splitStr = str.split('');
  let holdB = [];
  for (let i = 0; i < str.length; i++) {
    if (splitStr[i] === 'B') {
      holdB.push(splitStr[i]);
    }
  } return holdB.length; 
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChar,
  };
};
