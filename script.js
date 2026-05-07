var a=10;
a=15;
console.log(a); 
// 1.Ans: The answer will be 15
let b=20;
let b=30;
// 2.Ans: since redeclaration is not allowed in let it will show error it says b is already declared
const c=50;
console.log(c);
//3.Ans: the answer will be 50
const x=10;
x=20;
//4. Ans :It will give type error because constant variable is fixed 
var p = 5;
var p = 10;
console.log(p);
//5.Ans: The answer will be 10
let q = 25;
q = q + 10;
console.log(q);
//6.Ans: The answer will be 35
const r = 7;
console.log(r + 3);
//7.Ans: The answer will be 10
var a=10;
//8.Ans: the Answer will be var keyword
//9.Which method prints normal output?
//Ans: console.log();
//10.Which method shows warning?
// Ans: console.warn();
//11.Which method shows error?
//Ans: console.error();
console.clear();
//12. Ans: It will clear all the values
let a = "hello";
console.log(typeof a);
//13. Ans: It will return as String
let b = 100;
console.log(typeof b);
//14. Ans: It will show Number
let c = false;
console.log(typeof c);
//15.Ans: It will say as Boolean
let d;
console.log(d);
//16. Ans: since the value is not given it will return as undefined
//17. Ans: if the value is 0 or nothing it will return null
let str="25";
let num=Number(str);
console.log(num);
console.log(typeof num)
//18.Ans: console.log(num) will display number
//19. Ans: let fruit=["apple","orange","mango"];
let arr = ["a","b","c"];
console.log(arr[1]);
//20. Ans The answer will be b
let arr = ["x","y","z"];
console.log(arr[arr.length-1]);
//21. Ans: The answer will be z
//22.Ans : console.log(arr[0]);
let arr = ["apple","banana"];
console.log(arr.length);
//23. ans : the answer will be 2
//24. ans let arr=["apple"."banana","pineapple"]
//25. ans
let obj={name:"meena",
    age:28
};
console.log(obj.name);
console.log(obj.age);
let obj = {name:"Naveen"};
console.log(obj.name);
//26. Ans : the answer will be naveen
let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);
//27. ANS : the answer will be banana
//28. Ans: using console.log(obj[obj.lenght-1]);
console.log(5 + 3);
//29. ans: 8
console.log(10 % 3);
//30. ans: 1
console.log(2 ** 3);
//31. ans: 8 2*2*2
console.log(10 / 2);
//32. ans : 5
let a = 5;
a++;
console.log(a);
//33. ans :6
let b = 5;
let c = b++;
console.log(b, c);
//34. ans: 6 5 since it is a post increament operator 
//first the b value is assigned to c then it will increae
let x = 5;
let y = ++x;
console.log(x, y);
//35. ans: 6 6 
let m = 3;
let n = m--;
console.log(m, n);
//36.ans: 2 3
console.log(5 == "5");
//37. ans: True
console.log(5 === "5");
//38.ans : false
console.log(true && false || true);
//39. ans: true
5 > 3 ? console.log("Yes") : console.log("No");
//40. ans: yes


// Task 1
 console.log("10" + 5)
//ans: string 105
console.log(10 + true)
//ans: number 11
console.log(false + null)
//ans: number 0
console.log("Hello" + undefined)
//ans: sring helloundefined
console.log([1,2] + 5)
//ans : string 1,25

//Task 2
console.log(typeof("hai" + 4));
//ans: String
console.log(typeof(true + 2));
//ans: number
console.log(typeof([1,2] + "hai"));
//ans: string
console.log(typeof({a:1} + 6));
//ans: string
console.log(typeof(null + 7));
//ans: number

//Task 3
console.log(Number("500"));   
// ans: 500
console.log(Number(true));    
// ans :1
console.log(Number(false));   
// ans: 0
console.log(Number(null));   
// ans: 0
console.log(Number("abc"));   
// ans: NaN 
console.log(Number([100]));   
// ans:  100

//Task 4:
console.log(Boolean(""));         
//ans: false
console.log(Boolean("javascript")); 
//ans:  true
console.log(Boolean(0));           
//ans:  false
console.log(Boolean(1));          
 //ans:  true
console.log(Boolean(null));       
 //ans:  false
console.log(Boolean(undefined));   
//ans: false
console.log(Boolean([]));          
//ans: true
console.log(Boolean({}));          
//ans:  true


//Task 5:
let mark=45
if (mark>35) {
  console.log("Pass");
}
else{
  console.log("Fail");
  
}
//ans :Pass

//Task 6:
let age=20
if (age>=18) {
  console.log("Eligible");
}
else{
  console.log("Not Eligible");
  
}
//ans: Eligible

//Task 7:
let a = 50
let b = 80
let c = 30
if (a > b && a > c) {
    console.log("a is greatest:", a);
} else if (b > a && b > c) {
    console.log("b is greatest:", b);
} else {
    console.log("c is greatest:", c);
}
//ans: b is greatest 80

//Task 8:
let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Signal is not working");
}
//ans: stop

//Task 9:
let username = "admin";
let password = "1234";

if (username === "Mary") {
    if (password === "5896") {
        console.log("Login Success");
    } else {
        console.log("Login Failed");
    }
} else {
    console.log("Invalid Login");
}
//ans: Invalid Login

//Task:10
let hour = 14

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
  console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
  console.log("Night");
} else {
    console.log("Invalid hour");
}
// ans: afternoon

//console.log(true + true)
//ans :2
//console.log("5" - 2)
//ans :3
//console.log("5" + 2)
//ans:7
//console.log(null + 1)
//ans: null
//console.log(undefined + 1)
//ans: nan
//console.log(Boolean(" "))
//ans: srting with space is considered true
//console.log(Number(true))
//ans:1
