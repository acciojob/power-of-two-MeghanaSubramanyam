const isPowerOfTwo = (number) => {
  // A power of two is greater than 0 and has exactly one bit set in binary.
  // So number & (number - 1) === 0 means it's a power of 2
  return number > 0 && (number & (number - 1)) === 0;
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
