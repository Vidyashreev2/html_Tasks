var arr = [10, 3, 5, 12, 5, 3, 9, 1];
var i, j, count;
var freq = [];
var arrSize = arr.length;
for (i = 0; i < arrSize; i++) {
    count = 1;
    for (j = i + 1; j < arrSize; j++) {
        if (arr[i] === arr[j]) {
            count++;
            freq[j] = 0;
        }
    }
    if (freq[i] !== 0) {
        freq[i] = count;
    }
}
for (i = 0; i < arrSize; i++) {
    if (freq[i] !== 0)
        console.log(arr[i], freq[i]);
}