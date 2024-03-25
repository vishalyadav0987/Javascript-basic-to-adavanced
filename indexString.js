console.log("String Concept.....");
// Primitive String Data type
// Both use ' ' and " " for String

/*🤌 Escape Character */

let anySentence = "This is my name \"Vishal Yadav\".";
// let anySentence = "This is my name 'Vishal Yadav'.";
console.log(anySentence);

let myName = 'Vishal Yadav';
let myCodeChannel = "fukraCoder";
console.log(myName.length);

/* 🤌 Finding in String */
// Finding a shuruwat se (indexOf) character
console.log(anySentence.indexOf("Vishal"));
console.log(anySentence.indexOf("a"));// 1st Occurance
console.log(anySentence.indexOf("a", (anySentence.indexOf("a")) + 1));// 2nd Occurance

// finding character last se (lastIndexOf) :-> same ans as indexOf
console.log(anySentence.lastIndexOf("Vishal"));


/* 🤌 Searching in String */
// search method can not take 2nd Argument as in finding Method.

console.log(myName.search('Yadav'));
console.log(myName.search('yadav'));


/* 🤌 Extracting String parts */
// 🎈 There are 3 methods for extracting a part of a string:
/*
1. slice(start,end): data not change of original str
2. substring(start,end): can't take negative indexing
3. substr(start,length): agar hame piche se string ka data chiye ho
*/

// 1. slice method

let str = "JavaScript is simple to standard language.";
let res = str.slice(0,6);
let res1 = str.slice(7,-2);
let res2 = str.slice(7);
console.log(res);
console.log(res1);
console.log(res2);

let myTweets = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt tempore quis alias unde non doloremque! Tenetur aliquid molestiae sunt doloremque id! Quidem, ut."

let word101 = myTweets.slice(0,100);
console.log(word101 );


// 2. subString method
let res3 = str.substring(0,6);
let res4 = str.substring(16,-2);// negative value ko koi lene dena nahi hai
console.log(res3);
console.log(res4);



// 3. subStr method

let res5 = str.substr(0,6);
console.log(res5);
let res6 = str.substr(-10);
console.log(res6);
let res7 = str.substr(3,-10);
console.log(res7);




/* 🤌 Replacing String parts */
// replace(value jo change karni hai, aur jo uski jagah par dalna hai).

let newString = str.replaceAll('JavaScript','The JavaScript');
console.log(newString);

let nameofSchool = 'Vishal ok ok';
let newNameOfSchool = nameofSchool.replaceAll('ok','Yadav');
console.log(newNameOfSchool);





/* 🤌 Extracting String Characters */

// 1. charAt
let newData = "This is my SurnamA";
console.log(newData.charAt(2));
console.log(newData.charAt(12));
console.log(newData.charAt(5));

// 2. charCodeAt (ASCII value)
console.log("AscII value of: "+ newData.charAt(5) + " => " + newData.charCodeAt(5));



/* Challenge Time 😎🦾 */
// Ascii code of last char of string;
let lastChar = newData.length - 1;
console.log(newData.charCodeAt(lastChar));


// Property Access
// ECMAScript 5 (2009) allows property access [] on strings

console.log(newData[0]);



/* 🤌 Other useful method String */

let yourName = "Vishal Yadav";
let fName = "Vishal";
let lName = "Yadav";

// 1. upperCase and lowerCase;
console.log(yourName.toUpperCase());
console.log(yourName.toLowerCase());

// 2. concat() Method
console.log(fName + lName);
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));

// 3. trim() Method : whiteSpace ko hatata hai.
var nameString = "               vishal Yadav      ";
var nameString1 = "          vishal   Yadav      ";
console.log(nameString.trim());
console.log(nameString1.trim());

// 4. Converting s String to an Array
/*
A string can be converted to an array with the split() method
*/ 

var txt = "a,b,c,d,e";  
var txt1 = "a b c d e"; 
var txt2 = "a|b|c|d|e"; 

console.log(txt.split(",")); // Split on commas
console.log(txt1.split(" ")); // split on spaces
console.log(txt2.split("|"));  // Split on pipe


var mixTxt = "a,b c|d,e f|e";

console.log(mixTxt.split(",")); // Split on commas
console.log(mixTxt.split(" ")); // split on spaces
console.log(mixTxt.split("|"));  // Split on pipe