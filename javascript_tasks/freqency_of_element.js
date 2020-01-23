var arr = [10, 3, 5, 12, 5, 3, 9, 1,0,0,-1,-1];
var i, j, count;
var arrSize = arr.length;
for (i = 0; i < arrSize; i++) {
    count = 0;
    for (j = 0; j < arrSize; j++) {
        if (j<i && arr[i] === arr[j]) {
           break;
        }
        else if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count!==0)
   console.log(arr[i]+" - "+count );
}
