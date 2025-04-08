var merge = function(nums1, m, nums2, n) {
    for (let i = m; i < m + n; i++){
        nums1[i] = nums2[i - n]
    }
    nums1.sort()
};
console.log(merge([0], 0, [1], 1))