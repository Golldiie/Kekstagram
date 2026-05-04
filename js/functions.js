const checkStringLength = function(str) {
  const maxLength = 40;
  return str.length <= maxLength;
};

checkStringLength('Попа');

const isPalindrome = function(str) {
  const normalized = str.toLowerCase();
  const reversed = normalized.split('').reverse().join('');
  return normalized === reversed;
};

isPalindrome('Попа');

const checkPalindrome = function(str) {
  const normalized = str.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalized.length - 1; i >= 0; i--) {
    newString += normalized[i];
  }
  return normalized === newString;
};

checkPalindrome('А роза упала на лапу Азора');

const giveNumber = function(str) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    if(!isNaN(symbol)) {
      result += symbol;
    }
  }
  if (result === '') {
    return NaN;
  }
  return Number(result);
};

giveNumber('33 cows');
