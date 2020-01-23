
var stackArr = [];
var top = -1;
var arrSize = 5;
var num;

function push_ele(num) {
    if (top === arrSize) {
        console.log("Stack overflow")
    } else {
           top=top+1;
            stackArr[top] = num;
    }
    
}
function pop_ele() {
    if (top === -1) {
        console.log("Stack underflow");
    } 
    else {
        top=top-1;

    }
}

function display() {
    for (i = top; i >= 0; i--) {
        console.log(stackArr[i])
    }
}
push_ele(10);
push_ele(20);
push_ele(30);
display();
pop_ele();
display();