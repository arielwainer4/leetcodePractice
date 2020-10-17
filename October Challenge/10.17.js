// All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let map = new Set()
  let res = new Set()
  for(let i = 0; i < s.length-9; i++) {
      let current = s.substring(i, i+10)
      if(map.has(current)) {
              res.add(current)
          }
      else map.add(current)
      }
  return [...res]
};
