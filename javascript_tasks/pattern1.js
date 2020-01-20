var row = require('readline');
var prompts = row.createInterface(process.stdin, process.stdout);
prompts.question("How many row you want to print ?", function (row_num) {
    for (var i = 1; i <= row_num; i++) {
        var k = 0;
        var str = "";
        for (var j = 1; j <= row_num - i; j++) {
            str = str + " ";
        }
        while (k != 2 * i - 1) {
            str = str + "1";
            ++k;
        }
        console.log(str);

    }
});