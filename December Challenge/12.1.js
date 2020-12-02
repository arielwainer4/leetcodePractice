// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
  let indexes = {}
  for(let i = 0; i < words.length; i++) {
      let word = words[i]
      if(!indexes[word]) indexes[word] = []
      indexes[word].push(i)
  }
  let idx1 = indexes[word1]
  let idx2 = indexes[word2]
  let min = Infinity
  for(let idx of idx1) {
      for(let idxB of idx2) {
          let diff = Math.abs(idx-idxB)
          min = Math.min(min, diff)
          if(min === 1) break;
      }
      if(min === 1) break;
  }
  return min
};
