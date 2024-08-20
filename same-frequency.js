function freqCounter(str) {
    let strFreqs = {};

    for (let val of str) {
        let valCount = strFreqs[val] || 0;
        strFreqs[val] = valCount + 1;
    }

    return strFreqs;
}

// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    int1String = int1.toString();
    int2String = int2.toString();
    if (int1String.length !== int2String.length) return false;

    let int1Counter = freqCounter(int1String);
    let int2Counter = freqCounter(int2String);

    for (let key in int1Counter) {
        if (int1Counter[key] !== int2Counter[key]) return false;
    }
    return true;
}

module.exports = sameFrequency;