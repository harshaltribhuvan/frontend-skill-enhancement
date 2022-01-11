let a = 5;
let b = 9;
[a, b] = [b, a]; //this using destructuring
// a = (b+= a -= b) - a; //this is normal method
console.log(a, b);
