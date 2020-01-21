var row = require('readline');
var prompts = row.createInterface(process.stdin, process.stdout);
prompts.question("How many row you want to print ?", function (row_num) {
    for (var i = 1; i <= row_num; i++) {
        var num = i;
        var str = "";
        for (var j = 1; j <= row_num - i; j++) {
            str = str + " ";
        }
        for (var j = 1; j <= i; j++) {
            str = str + (num % 10);
            num++;
        }
        num=num-2;
        for (var j = 1; j < i; j++) {
            str = str + (num % 10);
            num--;
        }
        console.log(str);
    }
});