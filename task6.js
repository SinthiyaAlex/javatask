// //1. Students Attendance system

// const preststudent = ["Divya" ,"Nithiya" , "Sinthiya"];
// const absentstudent = ["Shally" ,"Leya"];
// let allstudents =[...preststudent, ...absentstudent];
// allstudents = [...allstudents, "Jerrin"];
// console.log("Print the student list" , allstudents);
// allstudents.forEach(student => console.log("studeents :" , student));

// // ans Print the student list ['Divya' , 'Nithiya' , 'Sinthiya' , 'Shally' ,'Leya' , 'Jerrin']
// //students : Divya
// //student : Nithiya
// //student : Sinthiya
// //student : Shally
// //student : Leya
// //student : Jerrin

// //2. E - Commerce cart

// const mobile ={
//     product : "Smartphone" ,
//     Brand : "Samsung",
//     Price : 45000
// };
// const charger ={
//     product : "Charger" ,
//     Brand : "Samsung",
//     Price : 2000
// };
// let item = {...mobile , ...charger};
// item ={...item , DeliveryDate: "2026-05-21" };``
// console.log("Final items to be delivered:" , item);
// const cartarray = [mobile , charger, item];
// cartarray.forEach(items => {console.log("cart product :" , items.product, "| Prices :" , items.Price);
// });

// //Ans Fianl Items to be delivered: {product : 'charger', brand: 'samsung' , price :2000 , deliverydate:' 2026-05-21'}
// //using the spread operator it dispaly only the overwrited one that is charger details
// //cart product : Smartphone | Prices : 45000
// //  cart product : Charger | Prices : 2000

// //3. Food Delivery App :

// function foodorder(...foods){
//     const order = {
//         items :[...foods],
//         totalitems :foods.length,
//         Firstitem :foods[0],
//         Lastitem :foods[foods.length-1]
//     };
//     console.log("Order summary:", order);
//     order.items.forEach((item1,index)=>{
//         console.log(`item1 ${index + 1}: ${item1}`);        
//     });
    
// }
// foodorder("pizza" , "Burger" , "Wrap" , "cold coffee");

// //Ans :{items: Array(4), totalitems: 4, Firstitem: 'pizza', Lastitem: 'cold coffee'}
// //Firstitem:"pizza"
// //Lastitem:"cold coffee"
// //items:['pizza', 'Burger', 'Wrap', 'cold coffee']
// //totalitems:4
// //item1 1: pizza
// //item1 2: Burger
// // item1 3: Wrap
// // item1 4: cold coffee

// //4.Employee salary filter

// const employees = [
//     {name : "sinthiya" , department :"IT" , salary : 60000 },
//     {name : "jerrin" , department :"Finance" , salary : 75000},
//     {name : "divya" , department :"HR", salary : 50000 },
//     {name :"nithya" , department :"Maerketing", salary : 30000}
// ];
// const highersalaryemployee = employees.filter(emp => emp.salary > 50000);
// const finallist = [...highersalaryemployee];
// console.log("Employee with salary abovw 50000 :" ,finallist);
// finallist.forEach(emp => {
//     console.log(`Name: ${emp.name} , Department : ${emp.department}, Salary : ${emp.salary}`);
//   });

// // ans Employee with salary abovw 50000 :
// //[{name: 'sinthiya', department: 'IT', salary: 60000}
// //{name: 'jerrin', department: 'Finance', salary: 75000}]
// //Name: sinthiya , Department : IT, Salary : 60000
// //Name: jerrin , Department : Finance, Salary : 75000

// //5 online game scoreboard

// const scores = [
//     {player :"Satheesh" , score : 80},
//     {player :"Shaun" , score : 90},
//     {player : "vivin" , score : 40},
//     {player : "fransis" , score : 70}
// ];
// const totalscore = scores.reduce((sum , obj) => sum + obj.score , 0);
// const finalscore = [...scores];
// console.log("Total score of all players :", totalscore);
// finalscore.forEach(p => {
//     console.log(`Player : ${p.player} , score : ${p.score}`);
// });

// //ans  Total score of all players : 280
// // Player : Satheesh , score : 80
// // Player : Shaun , score : 90
// // Player : vivin , score : 40
// // Player : fransis , score : 70

