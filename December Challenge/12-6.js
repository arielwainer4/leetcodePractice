// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

function plant(idx, bed, n) {
  if(n === 0) return true
  if(idx >= bed.length && n > 0) return false
  if(bed[idx+1] === 1) return plant(idx+3, bed, n)
  if(bed[idx] === 1) return plant(idx+2, bed, n)
  if(bed[idx-1] === 1) return plant(idx+1, bed, n)

  bed[idx] = 1
  return plant(idx+2, bed, n-1)
}

var canPlaceFlowers = function(flowerbed, n) {
  return plant(0, flowerbed, n)
};
