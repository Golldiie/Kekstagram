const checkStringLength = function(str, maxLength) {
  const isValid = str.length <= maxLength;
  return isValid;
};

checkStringLength('Попа', 20);

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

const giveNumfromStr = function(str) {
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

giveNumfromStr('33 cows');

const isValidMeeting = function(workStart, workEnd, meetTime, meetDuration) {
  const timeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(':');
    return Number(hours) * 60 + Number(minutes);
  };
  const startWorkMinutes = timeToMinutes(workStart);
  const endWorkMinutes = timeToMinutes(workEnd);
  const meetTimeMinutes = timeToMinutes(meetTime);
  const endMeetMinutes = meetTimeMinutes + meetDuration;

  return endMeetMinutes >= startWorkMinutes && endMeetMinutes <= endWorkMinutes;
};

isValidMeeting('08:50', '14:00', '14:00', 90);
