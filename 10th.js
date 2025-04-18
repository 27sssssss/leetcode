    var buildArray = function(nums) {
        let a = []
        for (let i = 0; i < nums.length; i++){
            a[i] = nums[nums[i]]
            
        }
        return a
    }; 
console.log(buildArray([0,2,1,5,3,4]))
