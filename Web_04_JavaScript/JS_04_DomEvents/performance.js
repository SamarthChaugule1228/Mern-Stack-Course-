// //adding 100 paragraph 
// //for each paragraph---> each time one reflow and repaint is requiredd 
// //reflow--> calculattion for each step 
// //repaint --> to display a element  
// const t1=performance.now();
// for(let i=0;i<100;i++)
// {
//     let element=document.createElement('p');
//     element.textContent='paragraph: '+i;
//     document.body.appendChild(element);
// }
// const t2=performance.now();
// console.log("this took "+(t2-t1)+" m/s")
// //enhancing  performance of the page 
// const t3=performance.now();
// let div1=document.createElement('div');
// for(let i=0;i<100;i++)
//     {
//         let element=document.createElement('p');
//         element.textContent='paragraph: '+i;
//         div1.appendChild(element);     
//     }
//     document.body.appendChild(div1);
//     const t4=performance.now();
//     console.log("this took: "+(t4-t3)+" m/s")
// //use document fagment to minimize the Performance 
// // when we use the document fragment then only one repaint and reflow is required 
// //using fragment 
// const t6=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i=0;i<100;i++)
//     {
//         let element=document.createElement('p');
//         element.textContent='paragraph: '+i;
//         fragment.appendChild(element);
//     }
// document.body.appendChild(fragment);// 1 reflow and 1 repaint 
// const t7=performance.now();
// console.log("performaince Optimal : "+(t7-t6)+" m/s")

//call stack in javasript 
//javascipt is single treaded language 

// event loop in Javascript
