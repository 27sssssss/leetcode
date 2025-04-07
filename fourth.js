/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    for (let i = 1; i < words.length; i++){
        if (isAnagram(words[i], words[i - 1]) == true){
            words.splice(i, 1)
            --i
        }
    }
    return words
};

var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    for (let i = 0; i < s.length; i++){
        if (t.indexOf(s[i]) != -1){
            t = t.slice(0, t.indexOf(s[i])) + t.slice(t.indexOf(s[i]) + 1)
        }
        else{
            return false
        }
    }
    return true
};