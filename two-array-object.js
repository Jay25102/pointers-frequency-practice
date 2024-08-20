// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let result = {};
    let max;
    if (arr2 > arr1) {
        max = arr2.length;
    }
    else {
        max = arr1.length;
    }

    for (let i = 0; i < max; i++) {
        if (arr2[i] === undefined) {
            result[arr1[i]] = null;
        }
        else {
            result[arr1[i]] = arr2[i];
        }
    }

    return result;
}

module.exports = twoArrayObject;
