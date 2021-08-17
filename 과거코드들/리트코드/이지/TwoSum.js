var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        const result = [i, j];

        return result;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

// 가장 추천 높은 코드
// Map 사용하기
var solution = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      // myMap.has(key);
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};
