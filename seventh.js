// binary search for pivot index then binary search of 2 arrays
let asd = [4,5,6,7,0,1,2]
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
    let first_s = 0
    let first_l = pvt - 1
    while(first_s <= first_l){
        mid = Math.floor((first_s + first_l) / 2)
        if (target > nums[mid]){
            first_s = mid + 1 
        }
        else if (target < nums[mid]){
            first_l = mid - 1
        }
        else{
            return mid
        }
    }
    let second_s = pvt
    let second_l = nums.length - 1
    while(second_s <= second_l){
        mid = Math.floor((second_s + second_l) / 2)
        if (target > nums[mid]){
            second_s = mid + 1 
        }
        else if (target < nums[mid]){
            second_l = mid - 1
        }
        else{
            return mid
        }
    }
    return -1
};
console.log(search(asd, 0))
