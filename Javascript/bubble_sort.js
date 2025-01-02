function sortColors(nums) {
    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length - 1 - i; j++) {
            if(nums[j] > nums[j + 1]){
                const temp = nums[j];
                nums[j] = nums[j + 1]
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
};

let nums = [2,0,2,1,1,0];
console.log(sortColors(nums));