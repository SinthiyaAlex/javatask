//1. API task- user name uppercase

const appurl = "https://jsonplaceholder.typicode.com/users";
fetch(appurl)
  .then(response => response.json())
  .then(users => {
    const upperUsernames = users.map(user => user.username.toUpperCase());
    console.log(upperUsernames);
    })
  .catch(error => console.error("Error fetching users:", error));
  
// ans :['BRET', 'ANTONETTE', 'SAMANTHA', 'KARIANNE', 'KAMREN', 'LEOPOLDO_CORKERY',
//  'ELWYN.SKILES', 'MAXIME_NIENOW', 'DELPHINE', 'MORIAH.STANTON']

//2.API task -Expensive Product

const apiurl = "https://fakestoreapi.com/products";
fetch(apiurl)
.then(response =>response.json())
.then(products =>{
    const expensiveProduct = products.filter(product => product.price > 100);
    console.log("Products with price > 100 :" , expensiveProduct);
    })
.catch(error => console.error("Error fetching products :", error));

// ans: it will display the products which is greater than 100

//3.Date concept Task - Digital clock

const data = new Date();
const hour = data.getHours();
const minutes = data.getMinutes();
const seconds = data.getSeconds();
console.log(`${hour} : ${minutes} : ${seconds}`);

// 20:33:12


//4. String Concept Task - Username Checker

let name = "   Naveen Kumar    ";
name = name.trim();
name = name.toUpperCase();
const join = name.includes("KUMAR")
console.log(name);
console.log("Joined Name :" , join);

//ans: NAVEEN KUMAR
//     Joined Name : true

//5. Array Concept Task - Student Rank System

let marks = [450, 300, 700, 200, 900];
marks.sort((a, b) => b - a);
let highest = marks.slice(0 , 3);
console.log("Top Three Marks :" , highest);

// Top THree Marks : [900 , 700 , 450]


