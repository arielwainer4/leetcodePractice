// SOlution 1 (brute force)
// Map where land appears in each row
// loop through map adding area between land to water total
function waterCheck(matrix) {
  let totalWater = 0
  for(let row = 0; row < matrix.length; row++) {
    if(matrix[row].length <= 1) continue;
     for(let i = 0; i < matrix[row].length-1; i++) {
         let first = matrix[row][i]
         let second = matrix[row][i+1]
         let space = (second-first)-1
         totalWater += space
     }
  }
  return totalWater
}
var trap = function(height) {
    let max = Math.max(...height)
    let matrix = mapper(height, max)
    return waterCheck(matrix)
};
function mapper(arr, maxHeight) {
    let matrix = []
    for(let i = maxHeight; i > 0; i--) {
        let row = []
        arr.forEach((step, idx) => {
            if(step >= i) row.push(idx)
        })
        matrix.push(row)
    }
    return matrix
}

// Solution 2
// Map the max height of the left and right walls in arrays, compare heights and subtract land from min height at each position
var trap = function(height) {
    const size = height.length;
    const leftMax = new Array(size);
    const rightMax = new Array(size);
    let water = 0

    leftMax[0] = height[0]
    rightMax[size - 1] = height[size - 1];

    // start at 1 because ends (first left wall and last right wall) cant hold water
    for (let i = 1; i < size; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    for (let i = size - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    for (let i = 1; i < size - 1; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return water
};


// Solution 3:
// Find total size of the grid and subtract land, and sky to be left with water space
var trap = function(height) {
  let landArea = 0;
  let maxFromLeft = 0;
  let maxAreaFromLeft = 0;

  for (let h of height) {
      landArea += h;
      maxFromLeft = Math.max(maxFromLeft, h);
      maxAreaFromLeft += maxFromLeft;
  }

  let maxFromRight = 0;
  let maxAreaFromRight = 0;

  for (let i = height.length - 1; i >= 0; i--) {
      maxFromRight = Math.max(maxFromRight, height[i]);
      maxAreaFromRight += maxFromRight;
  }

  const boundingArea = height.length * maxFromLeft;
  const leftVoid = boundingArea - maxAreaFromLeft;
  const rightVoid = boundingArea - maxAreaFromRight;
  return boundingArea - leftVoid - rightVoid - landArea;
};
