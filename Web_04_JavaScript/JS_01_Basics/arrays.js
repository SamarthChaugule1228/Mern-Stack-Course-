// let arr=[10,20,30,40,50];

// console.log(arr);
// arr.push(60,70,80);
// arr.splice(2,0,11,12,13);
// arr.unshift(9);
// console.log(arr);
// Searching into the call back Methods
 let cources =[
   s= {a:10,b:20},
    d={a:30,b:40}
 ];

//  let ans=cources.find(function(course)
//  {
//     return course.a==10;
//  }
// // );
// // Using Arrow Function 
//  let ans =cources.find(cource=>cource.b==40);

// // console.log(ans);
// let arr=[10,20,30,40,50,60];
// arr.pop();
// arr.shift();
// arr.splice(2,1);
// console.log(arr);
// combing and slicing the Array 
let first =[10,20,30,40];
// let second=[70,80,90];
// let ans=first.concat(second);
// console.log(ans );
// let sliced =ans.slice(2,4);
// console.log(sliced);

// itrater array using loop
// #1 using for Of 
// for(let a of first)
// {
//     console.log(a);
// }
//  #2 using the for in 
// for(let i in first)
// {
//     console.log(first[i]);
// }
//  #3 using the for each loop

// first.forEach(element=> console.log(element));
//  
// JOining the Arrays 

let numbers =[100,30,40,50];
// console.log(numbers.join('|'));
// spillitingthe Array 
// numbers.sort();

// numbers.reverse();
// console.log(numbers);
// filtering the Arrays ---> according to the co dtion 
let filtering =numbers.filter(element=> element<60);
// console.log(filtering);
//  Mapping the Arrays 
// let ans=numbers.map(element=>element+'hello');

// console.log(ans);
// mapping with Object --> Generally it can create the object and return its
let ans =filtering.map(num=> {value:num});
console.log(ans);
