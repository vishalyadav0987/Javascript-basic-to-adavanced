console.log("Advanced JavaScript......");

// 1. by default bubbling phase (bottom to top)
// 2. for capturing phase (top to bottom) add false ki jagan par true
// 3. target phase ke add in child event.stopPropagation()
let parentDiv = document.getElementById("parent-div");
let chilDiv = document.getElementById("child-div");

let divParent = () => {
    alert("Parent div call");
}

let divChild = () => {
    alert("Child div call");
    event.stopPropagation(); //for target phase
}

// by defalse false reheta hai
parentDiv.addEventListener('click', divParent, false);
chilDiv.addEventListener('click', divChild, false);



/*🤌 Higer order function and callBack function*/

/* 🤌 Higer order function */
// function which takes another function as argument is called HOF 

/* 🤌 callBack function */
// jis bhi function ko hum kisi aur function ke under as an argument pass karte hai then usko hum CallBack function bolte hai

// we need create calculator
/*For Demonstration */

let add = (a, b) => {
    return a + b;
}

let subs = (a, b) => {
    return a - b;
}

let mult = (a, b) => {
    return a * b;
}

let divi = (a, b) => {
    return a / b;
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2); // it means
    // return add,subs,mult,divi(num1,num2);// operator = add,subs,mult,divi  
}

console.log(calculator(2, 5, mult));



/*🤌 How javascript works and Asynchronous Javascript*/

/* 🤌 Hoisting */
// we have a creation and excution phase 
// Hoisting in javascript is a machanisnm where vriable and function declartion are moved on the top of their scope before the code excute.

/*
// for Exm:
console.log(myName); // undefined
var myName;
myName = "Vishal Yadav";
*/

// How it will be creation phase
var myName = undefined; // javascript apne app undefned man lete hai
console.log(myName);
myName = "Vishal Yadav";


/* 
But we are instead (Var) Using (const) And (let) is output giving throw errror 
*/

/*
In ES2015 (a.k.a ES6), hoisting is avoided by using the let keyword instead of var.(the other diff is that variable declared with let are local to the surrounding block not the entire function.)
*/

/*🤌 Scope chain and Lexical Scoping in Javascript */

// The scope chain is used to resolve the value of variable names in Js.
// const PI = 3.14;

// Lexical Scoping means Now the inner function can get access to their function variable function variable but the vice versa is not true,

// For Example:

let a = "Vishal Yadav"; // golbal scope for window

const first = () => {
    b = "Is your Name.";
    const second = () => {
        c = "Yes this is my name.";
        console.log(`${a} ${b} ${c}`);

    }
    second();
    // console.log(`${a} ${b} ${c}`); // I cant use
}
// first();


/* 🤌 Closures in Javascriptv */

// A Closures is the combinaton of a function bundled together (enclosed) with reference to its surrounding state (lexical environment)

// In other word a closures gives access to an outer function's scope from an inner function

// It same lexical Scoping

const outerFun = (a) => {
    let b = 10;
    const innnerFun = () => {
        let sum = a + b;
        console.log(sum);
    }
    return innnerFun;
}
outerFun(5); // nothing
let checkClosure = outerFun(5);
console.log(checkClosure); // inner function retun
console.log(checkClosure()); // answer + undifined
checkClosure(); // answer
console.dir(checkClosure); // detailed innerfun answer


/* 🤌 SynChronous JavaScript */
// Jab tak Ek kaam khatam nhi dusra start nh hoga
// Mean
// Work 1 = 10min hone me
// work 2 = 10s hone me 
// 2nd work strat from after 10 min

const fun2 = () => {
    console.log("Function 2 is calling");
}

const fun1 = () => {
    console.log("Function 1 is calling");
    fun2();
    console.log("Function 1 is calling Again!");

}

// fun1();


/* 🤌 ASynChronous JavaScript */
const funAs2 = () => {
    setTimeout(() => {
        console.log("Function As 2 is calling");
    }, 1000);
}

const funAs1 = () => {
    console.log("Function As 1 is calling");
    funAs2();
    console.log("Function As 1 is calling Again!");

}

// funAs1();

/*🤌 Function Curring */
// Evaluting the function with multiple argument into squence of function with single argument


function sumAdd(num1) {
    // console.log(num1);  
    return function (num2) {
        // console.log(num1, num2);
        return function (num3) {
            console.log(num1, num2, num3);

        }
    }
}

sumAdd(5)(3)(8);


/*🤌 CallBack Hell */

setTimeout(() => {
    console.log("Function As 1 is calling");
    setTimeout(() => {
        console.log("Function As 2 is calling");
        setTimeout(() => {
            console.log("Function As 3 is calling");
            setTimeout(() => {
                console.log("Function As 4 is calling");
                setTimeout(() => {
                    console.log("Function As 5 is calling");
                    setTimeout(() => {
                        console.log("Function As 6 is calling");
                        setTimeout(() => {
                            console.log("Function As 7 is calling");
                            setTimeout(() => {
                                console.log("Function As 8 is calling");
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



