console.clear();

 for(let i = 1; i <= 20; i++)
 {
     console.log(i);
    
 }
 //1. ans this will print 1 2 3 4 5 ....... to 20

for(let i = 1; i <= 50; i++)
{
    if(i % 2==1){
        console.log(i);
        
    }
}
//2.ans: this will print the odd numbers1 3 5 7 9..... to 49

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
//3.ans first line runs the loop, `7x${i} = ${7 *1}` this template literal will print the table
//7*1 calculate the value

let i = 20;
while( i >= 1){
    console.log(i);
    i--;
    
}
//4. it starts with 20 i>=1 runs the loop untill it reaches 1
// i-- will decrease the i by 1

let sum =0;
for(let i=1; i <=100; i++)
{
    sum=sum + i;
}
console.log("Sum of number from  1 to 100 is:", sum);
// 5. ans : 5050
 
let fruits= ["apple", "banana", "orange", "grapes"];
for(let fruit of fruits){
    console.log(fruit);
    
}
//6.ans:
//apple
//banana
//orange
//grapes

for(let i=1; i<=50; i++)
{
    if(i%2==0){
        console.log(i);
        
    }
}
//7.ans: this will print hte even numbers from 2 4 6 8 10........48 50

for(let i=1; i<=5; i++)
{
    console.log("*".repeat(i));
    
}
//8. ans: i=1 will print 1 * with the repeat i it will print 5 rows since js prints line by line

function welcome()
{
    console.log("Welcome to javascript");
    
}
welcome();
//9 ans: when the function is called it will print welcome to javascript

function accept(name){
console.log("Hello " + name);
}
accept("Naveen")
//10 ans: it will print Hello Naveen

function add(a ,b)
{
    return a + b;    
}
console.log(add(10 ,20));
//11. it will dispaly 30
//return statement goes to the add of to numbers
//when the add() function is called it will display 30


let salary = 50000
let bonus= 5000
function bonus1(salary , bonus){
    return salary + bonus;
}
console.log(bonus1(salary , bonus));
//12.ans: when functiion is called it will print 55000

let student ={ name :"Rahul" , 
    course: "Javascript" ,
    marks: 95
};
for (let value in student){
    console.log( value + " :" + student[value]);
    
}
//13. ans: name:Rahul
//         course: Javascript
//         marks :95

function largest(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(largest(10 , 50));
//14.ans: 50

let empl ={
    name : "samisha",
    department: "IT",
    salary: 60000
};
function afterbonum(empl , addbonus){
    let totalsalary = empl.salary + bonus;
    console.log("Employee Name: " + empl.name);
    console.log("Employee Department: " + empl.department);
    console.log("Employee salary: " + empl.salary);
    console.log("Employee salary after bonus: " + totalsalary);    
}
afterbonum(empl , 5000);
//15.ans Employee Name: Samisha
//       Employee Department: It
//       Employee salary: 60000
//       Employee salary after bonus :65000
