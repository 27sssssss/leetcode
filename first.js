// leetcode.com/submissions/detail/1593632c147/
// 1 - use couples alg with casual for cycle
// 2 - everytime we find a letter we increase counter by 1 
// until iterator + 1 is not equal to our symbol
// 3 - check the index where we stops and just save index from start point to end point of repeating words
// 4 - create new string where we put all our decode
// example:
// bbbbccccddddaa - by steps
// 1 - delete all b's and add index to substring
// 2 - new final string is b4 and first string is  bbbbccccddddaa
// 3 - delete all c's and add index to substring 
// 4 - new final string is b4c4
// 5 - new final string is b4c4d4a2


var countAndSay = function(n) {
    return helper('1', n)
};

const runLengthEncoded = function(str){
    if (str.length == 1){
        return str + '1'
    }
    let encoded = "";
    for (i = 0; i < str.length; i++){
        let count = 1;
        while (i + 1 < str.length && str[i + 1] === str[i]){
            ++count;
            ++i;
        }
        encoded += count + str[i];
    }
    return encoded
}

const helper = function(str, steps){
    console.log(`${steps} step - ${str}`)
    if (steps == 1){
        return str;
    }
    else{
        return helper(runLengthEncoded(str), steps - 1)
    }
}
console.log(countAndSay(2))
