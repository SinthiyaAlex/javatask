//  let studentname = prompt("Enter your Name :");
//  const department = prompt("Enter Your Department :");
//  let age = prompt("Enter your Age :");
//  console.log(`Welcome ${studentname}`);
//  console.log(`Department ${department}`);
//  console.log(`Age ${age}`);
// //1 Ans : Welcome sinthiya
// //        Department cse
// //        Age 30

//  const balance = 10000;
//  let withdrawal = prompt("Enter the amount to Withdraw");
//  withdrawal = Number(withdrawal);
//  if(withdrawal >= 100 && withdrawal <= balance){
//      console.log("Transaction sucessful");
//      console.log(`Remaining balance : ${balance-withdrawal}`);  
//  }
//  else if(withdrawal < 100){
//      console.log("Minimum withdraw is 100");
//  }
//  else{
//      console.log("Insufficient balance");  
//  }

// //2 ans if i give 8000
// //    it shows transaction success
// //    Remaining balance 2000
// // if i give 60
// // it shows Minimum withdrawal is 100
// //if i give 25000
// //it shows Insufficient balance

//  let amount = prompt("Enter the amount");
//  let order = (amount > 499) ? "free Delivery Available" : "Delivery charges applicable";
//  console.log(order);

// // 3. if i enter 300
// // it shows Delivery charges applicable
// // if i enter 500
// // it shows Free Delivery Available

//  let username = prompt("Enter the user name");
//  let password = prompt("Enter the valid password");
//  if(username === "sinthiya")
//      {
//      if(password === "1906") {
//          console.log("login success");      
//      }else{
//          console.log("Wrong Password");
//          }
//      }else{
//              console.log("Invalid user");       
//          }

// // 4 ans: if i give sinthiya and 1906 it show login success
// //     if i give sinthiya and 1234 it shows wrong password
// //     if i give admin and  1906 it shows invalid user


//  let signal = prompt("Enter the Signal");
//  switch (signal) {
//      case "green":
//          console.log("You can go");            
//          break;
//          case "yellow":
//              console.log("You have to get ready");
//              break;
//              case "red":
//                  console.log("You have to stop");
//                  break;                     
//      default:
//          console.log("signal is not Working");
//          break;
//  }

// // 5 ans: in case if change the case also (for example green instead Green) it shows signal is not working

//  function salaryCalculation(salary,bonus) {
//      return salary + bonus;    
//  }
//  console.log(salaryCalculation(35000,5000));

// // 6 ans 40000

// let price = [200 , 400 , 600 , 800];
// let total = 0;
// for (let i=0; i < price.length; i++){
//     total = total + price[i];
// }
// let average = total / price.length;
// console.log(`Total Price : ${total}`);
// console.log(`Average :  ${average}`);

// //7 ans Total Price : 2000
// //      Average : 500

// let whatapp = {
//     name: "sinthiya",
//     phone :"9876543210",
//     status : "At Work",
// }
// for(let key in whatapp){
//     console.log(`${key} : ${whatapp[key]}`);
    
// }
// //8 ans : name : sinthiya
// //        phone: 9876543210
// //        status : At Work

// function bookticket(moviename , callback) {
//     console.log(`Movie name for booking : ${moviename}`);
//     console.log("Ticket booked successfully !....");
//     callback();    
// }
// function payment(){
//     console.log("Processing Payment.........");
//     console.log("Transaction Successful");   
//     }
//     bookticket("Harry Potter" , payment);

// //9 ans: Movie name for booking : Harry Potter
// //       Ticket booked successfully !....
// //       Processing Payment.......
// //       Transaction Successful

// function* foodorder(){
//     yield "order confirmed";
//     yield "preparing food";
//     yield "out for delivery";
//     yield "order delivered";
// } 
// let order1 = foodorder();
// console.log(order1.next().value);
// console.log(order1.next().value);
// console.log(order1.next().value);
// console.log(order1.next().value);

// //10 ans  order confirmed
// //        preparing order
// //        out for delivery
// //        order delivered


    

