const formatDecimal = (number) => {
  if (typeof number === 'number' && !Number.isInteger(number)) {
    return parseFloat(number.toFixed(2));
  }
  return number;
};

module.exports = { formatDecimal };
