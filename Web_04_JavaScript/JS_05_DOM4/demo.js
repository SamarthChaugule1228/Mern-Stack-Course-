// console.log("Hello Sam Bhai is Here !!!");
// setTimeout(
//     function()
//     {
//         console.log("First");
//     }
//     ,1
// );
// function demo()
// {
//     console.log("Second");
// }
// demo();
// function demo1()
// {
//     console.log("third");
// }
// demo1();
// lets start with promices 
// let mera1=new Promise(function(resolve ,reject )
// {
//     setTimeout(function() {
//         console.log('I am Promies 1!!!')
//     }, 2000);
//     resolve(22330);
// });
// let mera2=new Promise(function(resolve ,reject )
// {
//     setTimeout(function() {
//         console.log('I am Promies 2!!!')
//     }, 1000);
//     reject(new Error('Bhaisahab Error Aaaya Hai !!'));
// });

// mera1.then((value)=>
// {
// console.log(value );
// }
// );
// mera2.catch((error)=>
// {
//     console.log('Error Occured !!!');
// });
// console.log("I am not promises to anyone !!!!!!");



// // Aysnc Task 
// async function show()
// {
//     return 'Main Hu Na Abhi Wait Karo Yar!!!';
// }
// console.log(show());

// async function Utality() {

//     let delhimausom=new Promise((resolve ,reject)=>
//     {
//         setTimeout(() => {
//             resolve('Delhi mey Bahut Garmi Hai ');
//         }, 5000);
//     }
//     );
//     let hydmausam=new Promise((resolve ,reject)=>
//     {
//             setTimeout(() => {
//                 resolve('Hydrabat is Cool and Cold');
//             }, 6000);
//     }
//     );

//     let DM=await delhimausom;
//     let hm=await hydmausam;
//     return [DM,hm];
// }

// Fatch API 
let api=fetch('https://jsonplaceholder.typicode.com/todos/1');