function fact(n) {
    var l;
    var result = 1;
    for (l = 1; l <= n; l++)
        result = result * l;
    return result;
}
var row = require('readline');
var prompts = row.createInterface(process.stdin, process.stdout);
prompts.question("How many row you want to print ?", function (row_num) {
    for (var i = 0; i <= row_num; i++) {
        var k = 0;
        var str = "";
        for (var j = 1; j <= row_num - i; j++) {
            str = str + " ";
        }
        for (var c = 0; c <= i; c++) {
            str = str + " " + ((fact(i) / (fact(c) * fact(i - c)) + " ") % 10);
        }
        console.log(str)
    }
});