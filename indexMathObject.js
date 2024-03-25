console.log("MathObject.....");
// perform Mathematical operation

// 1.Value of Pie
console.log(Math.PI);


// 2. Math.round()
// return the value of x roundede to its nearest integer
let num = 10.5656;
console.log(Math.round(num));
console.log(Math.round((Math.PI)));


// 3. Math.pow()
// Math.pow(x,y) return the value of x to th power of y
console.log(Math.pow(2, 3));


// 4. Math.sqrt()
// Math.sqrt(x) returns the square root of x
console.log(Math.sqrt(25));
console.log(Math.sqrt(9));
console.log(Math.sqrt(88));


// 5. Math.abs()
// Math.abs(x) returns the absolute (positive)value ofx
console.log(Math.abs(-45));
console.log(Math.abs(-0.98));
console.log(Math.abs(456));
console.log(Math.abs(-3 - 2));


// 6. Math.ceil()
// Math.ceil(x) retuns the value of x rounded up to its nearest integer (ceiling fan)
console.log(Math.ceil(4.4));
console.log(Math.ceil(99.1));


// 7. Math.floor()
// Math.floor() retuns the value of x rounded down to its nearest integer (floor:jamin)
console.log(Math.floor(4.9));
console.log(Math.floor(99.99999999999));


// 8. Math.min()
// min values from list of arguments
console.log(Math.min(0, 34, 56, 154, 567, 2, 75,));


// 8. Math.max()
// max values from list of arguments
console.log(Math.max(0, 34, 56, 154, 567, 2, 75,));


// 9. Math.random()
// Math.random() returns a random number between 0 (inclusive).
console.log("Random number from 1 to 10: " + Math.round(Math.random() * 10)); // 0 to 9


// 10. Math.trunc()
// The trunc() method return the integer part of a number
console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));

/*Imp: if the argument is a positive number, Math.trunc() is equivalent to Math.floor(), otherwise Math.trunc() is equivalent to Math.ceil(). */






