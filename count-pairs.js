function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// add whatever parameters you deem necessary
function countPairs(arr, targetNum) {
    let sortedArr = mergeSort(arr);
    let left = 0;
    let right = sortedArr.length - 1;
    let numPairs = 0;

    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === targetNum) {
            numPairs++;
            left++;
            right--;
        }
        else if (sum < targetNum) left++;
        else right--;
    }

    return numPairs;
}

module.exports = countPairs;