var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++){
        nums1[m + i] = nums2[i]
    }
    nums1.sort()
};
console.log(merge([0, 0], 0, [1, 2], 2))
for (i = 0; i < 1; i++){
    console.log(123)
}