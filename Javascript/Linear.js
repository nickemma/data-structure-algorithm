function linear_search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return true;
    }
  }

  return false;
}

let nums = [1, 2, 3, 4, 5];
let target = 3;
console.log(linear_search(nums, target)); // true
