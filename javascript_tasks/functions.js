var num1,
    num2;

function identity(num1) {
    return num1;
}
console.log("Identity Number-> " + identity(3));
//Addition
function add(num1, num2 = 1) {
    return num1 + num2;
}
console.log("Addition of number-> " + add(3, 4))
//Multiplication
function mul(num1, num2) {
    return num1 * num2;
}
console.log("Multiplication-> " + mul(3, 4))

//function that adds from two invocations
var idf = identity(3);
console.log("function stroed in variable-> " + idf);

//function that adds from two invocations
function addf(num1 = 1) {
    return function (num2) {
        return add(num1, num2);
    }
}
console.log(" Addition from two invocations->" + addf(3)(4));

// function that takes a binary function and makes it callable with two invocations

function apply(func) {
    return function (num1) {
        return function (num2) {
            return func(num1, num2);
        }
    }

}
var adff = apply(add);
console.log("function as a parameter Addition->" + adff(3)(4) + " multiplication-> " + apply(mul)(3)(4));

//function that takes a function and an argument, and returns a function that cans supply a second argument
function curry(func, num1) {
    return function (num2) {
        return func(num1, num2);
    }
}
var add3 = curry(add, 5);
console.log("Passing parameter using variable which has function -> Addition " + add3(4) + " Multiplication ->" + curry(mul, 3)(4));

//writing a new functions ( use the functions implemented in above questions) ), show three ways to create the inc function
var inc = addf();
var inc1 = curry(add, 1);
var inc2 = add(3);
console.log("7.increment->" + inc(5) + " " + inc(inc(5))+ " "+ inc1(5)+" "+inc2);

// methodize, a function that converts a binary function to a method.
function methodize(func) {
    return function (n1) {
        return func(this, num1)
    }
}
Number.prototype.add = methodize(add);
console.log("Using Object ->"+(5).add(4));
//function twice that takes a binary function and returns  a unary function  that passes its argument to the  binary function twice.

function twice(func) {
    return function (num1) {
        return func(num1, num1);
    }
}
var double = twice(add);
console.log("Double-> "+double(11));

var square = twice(mul);
console.log("Square->"+square(11));

//function composeu that takes two unary functions  and returns a unary function that can call them both
function compose(double, square) {
    return function (num1) {
        return square(double(num1))
    }
}
console.log("Compose method"+compose(double, square)(3));