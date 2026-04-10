//using the Factory Method 

// function Rectangle()
// {
// let b={
//     length:1,
//     breadth:2,
//     show:function()
//     {
//         console.log("Hello Console Bhai Kya kar raha !!!");

//     }
    
// }
// return b;
// }
// let a=Rectangle();
// a.show();

// Using the Constructor 

// function Rectangle(len ,bre)
// {

//     this.len=len,
//     this.bre=bre;
//     this.show=function()
//     {
//         console.log(this.len+this.bre);
//     }
// }
// let obj=new Rectangle(10,30);
// //Inserting the Property in Rectangle
// obj.sampling='Hello Guys ';
// console.log(obj);
// obj.show();
// // Deleting thr Properrty from the object 
// delete obj.sampling;
// console.log("After Deleting ");
// console.log(obj);
// For in Loop
// let a={
//     a:10,
//     b:20,
//     c:30
// };
// console.log("Object Values are : ");
// for(let key in a)
// {
//     console.log(key ,a[key]);
// }
// // for of loop 
// for(let key  of Object.entries(a))
// {
//     console.log(key);
// }
// Object Cloning #1
let a={
    a: 10,
    b:30  ,
    c:50  ,
    d:60  
};
let b={};
for(let key in a)
{
    b[key]=a[key];
}
console.log(b);
// Object Cloning #2
let c=Object.assign({},a);
a.a++;
console.log(c);
console.log(a);

// Object Cloning #3
let des={...a};
console.log(des);


