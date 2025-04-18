/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    right = nums.length - 1
    left = 0
    while (left != right){
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[right]){
            left = mid + 1
        }
        else{
            right = mid
        }
    }
    return nums[left]
};

