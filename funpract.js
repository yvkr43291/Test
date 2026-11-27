function add(a, b){
    console.log("Addition of two numbers: " + (a+b));
    return a + b;
    return function Average (){
        return (a+b+add)/2
    }
}

//let result = add(10,20);
//let result = add(10, 20)/2;
//let result = add(10, 20);
let result = add(10, 20, add);
console.log("Result: " + result);

