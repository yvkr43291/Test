/*function great (a,b,callback){
   return callback(a+b);
}
great(5,3,callback => console.log("sum is" + callback)
);

function sum(a, b, fn, add) {
    return fn(a + b);
    return add(x+y)
}
console.log(sum(5, 3, result => "sum is " + result), add(5,3));

function add(x,y){
    return x+y;
} */

/*let r = (a,b) => "sum is" + " "+ (a+b);
console.log(r(5,3)); */

/*function hi(x,y,callback){
    return callback (a+b);
}

//hi(6,8,res => console.log("sum is" + " " + (6+8)));
hi(7,8, res = (a,b) => console.log("sum is" + " " + (9+8))); */

function sub(a,b,fn){
    return fn()
}

sub(5,3, result = (a,b) => console.log("sub is" + "" + (5-3)));


