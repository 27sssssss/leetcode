// binary search for pivot index then binary search of 2 arrays
let asd = [4,5,6,7,8,0,1,2]
var search = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let pvt = -1
    while (start != end){
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] > nums[end]){
            start = mid + 1
        }
        else{
            end = mid
        }
    }
    pvt = start
    
};

