// // Functions--> Reusability 
// function run()
// {
//    alert("Hello Guys ");
// }
// //calling 
// run();
// function assignment 
// let stand =function cool()
// {
//     console.log("Coll");
// }
// stand();
// // ... methos 
// function Display(...args)
// {
//     console.log(args);
// }
// Display(1,2,3,4,5,6,7);

// // Default Parameter in Javascript 
// function interest(p, r = 10, y = 10) {
//     return p * r * y / 100;
// }
// console.log(interest(19, undefined, 100));//hack 

// // Getter Setter 

// let person = {
//     fname: 'sam',
//     lname: 'chaugule'
// };
// console.log(person);
// //printing the object using object 
// function FullName() {
//     return `${person.fname}        ${person.lname}`;
// }
// console.log(FullName())
// Try and Catch 
// function Error(fullname) {
//     let a;
//     if (typeof fullname != 'string') {
//         throw new Error("error ");

//     }

//     else {
//          a={
//             name:fullname
//         };
//     }
//     return a;
// }

// try{
//     console.log(Error(true));
// }
// catch(e)
// {
//     console.log(e);

// }

//  sum short cut 
let arr=[10,20,304,40];
let totalSum=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0);

console.log(totalSum);