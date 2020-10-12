// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length != B.length) {
      return false;
  }
  let [dif, chars] = [[], new Set(A)];
  for (i in A) {
      if (A[i] != B[i]) {
          dif.push([A[i], B[i]]);
      }
  }
  return dif.length == 2 && dif[0].join() == dif[1].reverse().join() || (dif.length == 0 && chars.size != A.length);
};
