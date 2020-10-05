// Every non-negative integer N has a binary representation.  For example, 5 can be represented as "101" in binary, 11 as "1011" in binary, and so on.  Note that except for N = 0, there are no leading zeroes in any binary representation.

// The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.  For example, the complement of "101" in binary is "010" in binary.

// For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {

  let binary = N.toString(2)
  let swap = {1:0, 0:1}
  let inverse = []

  for(let i = 0; i < binary.length;i++) {
      let n = binary[i]
      n = swap[n]
      inverse.push(n)
  }

  let num = Number(parseInt(inverse.join(""), 2).toString(10))
  return num
};

// single line solution
var bitwiseComplement = function(N) {
  // convert to string
  // separate to array
  // map to switch 1's and 0's
  // rejoin new num to string
  // convert string from base 2 to Int (base10)
  return parseInt(N.toString(2).split('').map(n => n === '1' ? '0' : '1').join(''), 2)
};
