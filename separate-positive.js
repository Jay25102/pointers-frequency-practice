// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
    let temp;

    while (left < right) {
        if ((arr[left] < 0 && arr[right] > 0)) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
        else if (arr[left] < 0 && arr[right] < 0) {
            right--;
        }
        else {
            left++;
        }
    }

    return arr;
}

module.exports = separatePositive;