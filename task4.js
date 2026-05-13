  console.clear();
  function welcomeuser(name)
  {
     console.log("Welcome " + name);
 }
 welcomeuser("Naveen")
//1. ans: Welcome Naveen

  function squareNumber(num) {
      return num * num;    
  }
  console.log(squareNumber(5));
 //2. ans:25

  let employee ={
      name : "Rahul",
      salary : 50000
  }
  function employeeBonus(bonus){
  employee.salary += bonus;
  console.log(employee.name);
  console.log(employee.salary);    
  }
  employeeBonus(5000);
 //3.ans:55000
 //   console.clear();

 function testing()
 {
     var r =10;
     let b = 20;
     const c = 30;
     console.log(r);
 }
 testing();


//console.log(b);
//console.log(c);
//4.ans var can be accessible because it is a globe
// other two reference error


const add1 = (a ,b) => {
    console.log(a + b);
    
}
add1(6 , 5)
//5.ans: 11

function multi(a ,b){
    return a * b;
}
function calculate(callback , n1 , n2)
{
    return callback(n1 ,n2)
}
console.log(calculate(multi, 2, 8));
//6. ans: 16

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
const gen = offers();
console.log(gen.next().value);
console.log(gen.next().value); 
console.log(gen.next().value); 

//7.ans: 50% OFF
//       Free Delivery
//       Cashback

function student1(name , course ="Javascript"){
    console.log(name);
    console.log(course);   
}
student1("Priya" , "MYSQL");
student1("Jerrin")

//8.ans: Priya
//       MYSQL
//       Jerrin
//       Javascript

function multiplication(a) {
    return function(b){
        return function(c){
            return a*b*c;
        };
    };    
}
console.log(multiplication(2)(3)(4));

//9. ans: 24

const arr1 = [1,2,3] ;
const arr2 = [ 4,5,6];
const merge = [...arr1, ...arr2];//spread operator
console.log(merge);

//10. ans: [1,2,3,4,5,6]

const obj1 = { name: "Navi" };
const obj2 = { role: "Developer" };
const merged = { ...obj1, ...obj2 };
console.log(merged);

//11.{name: 'navi', role: 'developer' }

function numbers(...num) {
  console.log(num);
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}
numbers(1, 2, 3, 4);

//12 ans [1,2,3,4]
//      10


let students = [];
function addStudent(name, marks, callback) {
  const student = { name, marks };
  students = [...students, student]; // spread operator
  callback(student); // callback after adding
}
function printStudents() {
  console.log("All Students:", students);
}
function calculateMarks(...marks) { // rest operator
  return marks.reduce((sum, val) => sum + val, 0);
}
function addBonus(studentName, bonus) {
  students = students.map(s =>s.name === studentName ? { ...s, marks: s.marks + bonus } : s );
  console.log(studentName, "got bonus:", bonus);
}
function menu(option, ...args) {
  switch(option) {
    case "add":
      addStudent(args[0], args[1], (s) => console.log("Added:", s));
      break;
    case "print":
      printStudents();
      break;
    case "total":
      console.log("Total Marks:", calculateMarks(...args));
      break;
    case "bonus":
      addBonus(args[0], args[1]);
      break;
    default:
      console.log("Invalid option");
  }
}
menu("add", "sinthiya", 80);
menu("add", "jerrin", 70);
menu("print");
menu("total", 80, 70);
menu("bonus", "sinthiya", 10);
menu("print");



