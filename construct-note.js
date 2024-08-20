function freqCounter(str) {
    let strFreqs = {};

    for (let val of str) {
        let valCount = strFreqs[val] || 0;
        strFreqs[val] = valCount + 1;
    }

    return strFreqs;
}

// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (letters.length = 0) return false;
    if (message.length > letters.length) return false;

    let messageCounter = freqCounter(message);
    let lettersCounter = freqCounter(letters);

    for (let key in messageCounter) {
        if (!(lettersCounter[key] >= messageCounter[key])) return false;
    }

    return true;
}

module.exports = constructNote;