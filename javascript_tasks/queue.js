var arr_max = 5;
var front = -1;
var rear = -1;
var queueArry = [];

function insert(x) {
    if (rear === arr_max - 1) {
        console.log("queue overflow");
    } else {
        queueArry[++rear] = x;
    }
}

function remove() {
    if (front === -1) {
        console.log("queue underflow");
    } else {
        front = front + 1;
    }
}

function display() {
    for (var i = front + 1; i <= rear; i++) {
        console.log(queueArry[i])
    }
}
insert(10);
insert(20);
insert(30);
display();
remove();
console.log("After delete the element");
display();