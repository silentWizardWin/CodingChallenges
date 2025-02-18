const ALPHA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALPHANUMERIC =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// generate random integer
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// generate random string
const getRandomString = (length, charset) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset[getRandomInt(0, charset.length - 1)];
  }
  return result;
};

// get type of an object
const getType = (value) => {
  if (/^[a-zA-Z]+$/.test(value)) {
    return "Alphabetical String";
  } else if (/^\d+(\.\d+)?$/.test(value)) {
    return "Real Number";
  } else if (/^\d+$/.test(value)) {
    return "Integer";
  } else if (/^[a-zA-Z0-9]+$/.test(value)) {
    return "Alphanumeric String";
  }
  return "Unknown";
};

// Object 1: Alphebetical string
const getRandomAlphaString = (length) => getRandomString(length, ALPHA);

// Object 2: Real number
const getRandomRealNumber = () => (Math.random() * 1000).toFixed(5);

// Object 3: Integer
const getRandomInteger = () => getRandomInt(-10000, 10000).toString();

// Object 4: Alphanumeric string
const getRandomAlphanumericString = (length) => {
  const str = getRandomString(length, ALPHANUMERIC);
  return `${" ".repeat(getRandomInt(0, 10))}${str}${" ".repeat(
    getRandomInt(0, 10)
  )}`;
};

module.exports = {
  getRandomInt,
  getRandomAlphaString,
  getRandomAlphanumericString,
  getRandomRealNumber,
  getRandomInteger,
  getType,
};
