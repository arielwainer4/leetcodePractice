// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  // if A and B are different lengths, can't swap to make equal strings
  if (A.length != B.length) {
      return false;
  }

  // dif = when characters in A and B at the same index dont match
  // chars = deduped list of characters in A

  let dif = []
  let chars = new Set(A);
  // loop through A, if chars dont match, push the pair to dif
  for (i in A) {
      if (A[i] != B[i]) {
          dif.push([A[i], B[i]]);
      }
  }
  // return has 2 parts:

  // if there are 2 pairs in dif and dif[0] = reverse of dif[1] return true

  // if dif is empty (meaning stirngs match) and num of characters !== length (theres duplicate letters) return true
  return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};
