// // function showDb(data, success, failure) {
// //     let num = Math.floor(Math.random() * 10);
// //     console.log("Random number:", num);
// //     if (num < 4) {
// //         success();
// //     } else {
// //         failure();
// //     }
// // }

// // showDb("Samarth",
// //     () => {
// //         console.log("information updated Successfully !!!!");
// //         showDb("Hello World " , 
// //             ()=> 
// //             {
// //                 console.log("Success 2 ");

// //             }
// //             ,
// //             ()=>
// //             {
// //                 console.log("Faliure 2");
// //             }
// //         )
// //     },
// //     () => {
// //         console.log("Information not Updated Successfully  ");
// //     }
// // );



// function showDb(data )
// {
//     return new Promise((resolve , reject)=>
//     {
//         let num =  Math.floor(Math.random()*10);
//         if( num < 4)
//         {
//             resolve("100 complete ");
//         }
//         else
//         {
//             reject("error happened ");
//         }
//     });
// }
// showDb("Smarth").then((result)=>
// {
// console.log("Resolved from Functionn " ,result );
// }).catch((error)=>
// {
//     console.log("Rejected from function ",error);
// });

// first api request 


let url = " https://catfact.ninja/fact";
// fetch(url).
// then((res)=>
// {
//     console.log(res); 
//     return res.json();
// }).then((data)=>
// {
//     console.log("Result : ", data.fact);
// }).
// catch((err)=>
// {
//     console.log("Error:", err);
// });

// console.log("I happy to see you ");

// fatch with awit ans async 

// async function getFact()
// {
//     let res= await fetch(url);
//     console.log(res);
// }


// getFact().then((data)=>
// {
//     console.log(data.fact);
// }).catch((error)=>
// {
//     console.log("Error Happended ");
// });
 //  sendding http request using the axios 

async function getFact()
{
    let res= await axios.get(url);
    console.log(res);
}


getFact().then((data)=>
{
    console.log(data.fact);
}).catch((error)=>
{
    console.log("Error Happended ");
});