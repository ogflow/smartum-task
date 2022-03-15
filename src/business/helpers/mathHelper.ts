function isBetween(min, max, number) {
  const parsedNumber = parseInt(number);
  
  if (!Number.isInteger(parsedNumber)) return false;

  return min <= parsedNumber && parsedNumber <= max;
};

export default {
  isBetween
};