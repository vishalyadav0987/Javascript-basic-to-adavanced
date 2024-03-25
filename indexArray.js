let tableOf = 2;
for (let index = 1; index <= 10; index++) {
    console.log(`${tableOf} * ${index} = ${tableOf * index}`);

}
console.log("creating Table using for loop");
console.log("Array concepts");

console.log("    ");
console.log("     ");




var foodList = ['pizza', 'burgger', 'chowmein', 'friedRice', 'Rajma Chawal', 'roti', 'Chole bature', 'KadaiPanner'];
// Length of Array
console.log(foodList.length);

// Traversing of Arraay using index VALUES

/*console.log(foodList[0]);
console.log(foodList[1]);
console.log(foodList[2]);
console.log(foodList[3]);
console.log(foodList[4]);
*/

// last elment of array

console.log(`Last Element of Array: ${foodList[foodList.length - 1]}`);



console.log("    ");
console.log("     ");



// Traversing using For Loop
console.log("Using FOR LOOP");

for (let i = 0; i < foodList.length; i++) {
    console.log(`foodItem ${i}: ${foodList[i]}`);
}



console.log("    ");
console.log("     ");





// for in loop in ES6....
// FOR IN LOOP giving index value of array....
console.log("Using FOR IN LOOP");

for (let elements in foodList) {
    console.log(elements, foodList[elements]);
}




console.log("    ");
console.log("     ");




// for of loop in ES6....
// FOR OF LOOP giving elements of array....
console.log("Using FOR OF LOOP");

for (let elements of foodList) {
    console.log(elements);
}



console.log("    ");
console.log("     ");




// forEACH loop 
// Tking callback function
// console.log('Using forEach loop');

/*
foodList.forEach(function (element, index, array) {
    console.log(`element:${element} , index:${index} , array:${array}`);
    // console.log(element + "Index:" + index);

});
*/

// forEACH loop 
// Tking callback function
console.log('Using forEach loop -> Fat Arrow function');

foodList.forEach((element, index, array) => {
    console.log(`element:${element} , index:${index} , array:${array}`);

})



/*LEFT TOPIC
1. Searching and Filtering the Array
2. Compare an Array
*/

// Sorting of an Array

// let numberList = [100, 678, 2, 6, 4, 8, 2, 5, 1, 67,];
let numberList = ['vishal', 'amamn', 'piyush', 'vedant', 'dev'];
for (let i = 0; i < numberList.length; i++) {
    for (let j = i; j < numberList.length; j++) {
        if (numberList[i] > numberList[j]) {
            let temp = numberList[i];
            numberList[i] = numberList[j];
            numberList[j] = temp;
        }
    }
}
// numberList.sort();
// Traversing the Sorted Array
numberList.forEach((element, index, array) => {
    console.log(`Sorting array:${array}`);

});



console.log('');
console.log('');





// Perform CRUD operation
/*
0. Insert
1. Add
2. Replace
3. Delete
*/

let testPlayerNumber = [45, 77, 18, 8, 97, 96, 1, 49, 24, 73];

// push add at end return new length of array
// return new length of array (PUSH)

/*
let count = testPlayerNumber.push(17);
console.log(count);
*/


// testPlayerNumber.push(17);

// Also add multiple data
testPlayerNumber.push(17, 7, 13, 100);
console.log(testPlayerNumber);




// Add front of the array (UNSIFT)
// return new length of array (UNSIFT)

testPlayerNumber.unshift(25);
// testPlayerNumber.unshift(17,7,13,100);
console.log(testPlayerNumber);




// Delete the last element from the array(pop)
// change lenght of return array

let lastPoppedElement = testPlayerNumber.pop();
console.log(`Popped lastElement: ${lastPoppedElement}`);

console.log(testPlayerNumber);




// Delete the front element from the array(shift)
// change lenght of return array

let frontPoppedElement = testPlayerNumber.shift();
console.log(`Popped frontElement: ${frontPoppedElement}`);

console.log(testPlayerNumber);




// Methods
let months = ['Jan', 'march', 'April', 'June', 'July'];

// (SPLICE) Method
/*
Splice(3,0,'vishal')
1st val. kis jagah add karna hai
2nd val. jha add karna hai usko delete karna hai ya nh
3rd val. element jo add karna ho
 */

// 1. add at last using splice

const newmonth = months.splice(months.length, 0, 'Dec');
console.log("Add dec at last: " + months);


// 2. return (splice method give delete element)
console.log(newmonth);


// 3. update march to March (update) because not deleted from the uupppper

const updateMonths = months.splice(1, 1, 'March');
console.log(updateMonths);

months.splice(1, 1, 'March');
console.log("Update: " + months);

// 4. delete june from the array

const indexOfMonthForDelete = months.indexOf('June');

if (indexOfMonthForDelete != -1) {
    months.splice(indexOfMonthForDelete, 1);
    console.log(months);

    const deletedFromManchaiIndex = months.splice(indexOfMonthForDelete, 1);
    console.log(deletedFromManchaiIndex);

}
else {
    console.log('No such data is found');
}






console.log("  ");
console.log("  ");






/*
**IMPORTANT Function.....
1. Map : doesn't mutate the original array its return new array.It is chainable method means atttache reduce ,filter with return value of map method but not in forEach method.
2. Reduce: IF i need single of whole data ,also used foe flatten of 2d and 3d array in to single dimensional array.Avg-Sum-Mul-ect.
3. Filter
*/

console.log("MapMethod");

let array1 = [1, 4, 9, 16, 25, 36];

/*
// condition : num > 9;
let newArray1 = array1.map((curElm, index, arr) => {
    return curElm > 9;
});
console.log(array1);
console.log(newArray1); // map return new value without mutating th original value of an array.
*/


let newArray1 = array1.map((curElm, index, arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
});
console.log(newArray1); // it similar to forEach but it gives new array without mutate the original value of an array

// using forEach

let newArrayFor1 = array1.forEach((curElm, index, arr) => {
    return `Index no = ${index} and the value is ${curElm} belong to ${arr}`
});
console.log(newArrayFor1); // give undefined : because it does not return new array.



//Challenge Time 😎🦾

// sol-1 return new array of squrt of value;
let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((sqrElm, index, array) => {
    return Math.sqrt(sqrElm);
});
console.log(arrSqr);

// sol-2  Multiply each element by 2 and return only those elements which are greater than 10 ?

let arr2 = [2, 3, 4, 5, 6, 8];

let mulGreArray = arr2.map((curElm) => {
    return curElm * 2;
}).filter((curElm) => {
    return curElm > 10;
});
console.log(mulGreArray);

/*
//Reduce Method takes 4 arguments:
1. Accumulator ACC
2. curElm
3. Index
4. array
*/



console.log("   ");
console.log("   ");



console.log('ReduceMethod');


// sol-3  Multiply each element by 2 and return only those elements which are greater than 10 the avg?
let sumArr2 = arr2.map((curElm) => curElm * 2).filter((curElm) => curElm > 10).reduce((acc, curElm) => {
    return acc += curElm
}, 7);
// also gives initial value to accumulator 


console.log(sumArr2);



console.log(" ");
console.log(" ");






// How to flatten array 2d or 3d
console.log('Flatten array 2d or 3d');

const arr3 = [
    ['zone_1', 'zone_2'],
    ['zone_3', 'zone_4'],
    ['zone_5', 'zone_6'],
    ['zone_7', 'zone_8',['zone_5', 'zone_6']]
];

let flatArr = arr3.reduce((acc,curVal)=>{
    return acc.concat(curVal);
});

console.log(flatArr);


