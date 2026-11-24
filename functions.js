function add() {
    let a=10;
    let b=20;
    console.log("sum of a and b is:" + (a+b));
}

function sub(a, b) {
    console.log("difference of a and b is:" + (a-b));
}

function AddNumbers(a, b=10) {
    console.log("sum of a and b is:" + (a+b));
}

function SubNumbers(a, b) {
    console.log("difference of a and b is:" + (a-b));
}

add();
sub(30,20);
AddNumbers(20, 30);
AddNumbers(20);
SubNumbers(30);
SubNumbers(30, 20);