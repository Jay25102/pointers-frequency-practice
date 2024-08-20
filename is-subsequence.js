// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let idx1 = 0;
    let idx2 = 0;

    while (idx2 < str2.length) {
        if (str2[idx2] === str1[idx1]) {
            idx1++;
        }
        if (idx1 === str1.length) return true;
        idx2++;
    }
    
    return false;
}

module.exports = isSubsequence;