// add whatever parameters you deem necessary
function averagePair(inputArr, targetAvg) {
    let left = 0;
    let right = inputArr.length - 1;
    let pairAvg;

    while (left < right) {
        pairAvg = (inputArr[left] + inputArr[right]) / 2;
        if (pairAvg === targetAvg) return true;
        else if (pairAvg < targetAvg) left++;
        else if (pairAvg > targetAvg) right--;
    }

    return false;
}

module.exports = averagePair;