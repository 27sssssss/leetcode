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
