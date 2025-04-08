var isPalindrome = function(s) {
    let new1 = s.replace(/[^a-zA-Z]/g, '').toLowerCase()
    let left = 0;
    let right = new1.length - 1
    console.log(new1)
    while (left <= right){
        console.log(new1[left])
        console.log(new1[right])
        if (new1[left] != new1[right]){
            return false
        }
        ++left
        --right
    }
    return true
};
console.log(isPalindrome("race a car"))