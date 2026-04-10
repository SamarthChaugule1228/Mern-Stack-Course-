let input = document.querySelector("#txt");
let btn = document.querySelector("#btn");
let li = document.querySelector("#list");
btn.addEventListener("click" , function(){
    let delbtn = document.createElement("button");
    delbtn.innerText= "Delete";
    delbtn.classList.add("delete");
    let child = document.createElement("li");
    
    child.innerText= input.value ; 
    child.append(delbtn);
    
  li.appendChild(child); 
  
});

li.addEventListener("click" , function(event)
{
    if(event.target.nodeName =="BUTTON")
    {
        let item = event.target.parentElement ;
        item.remove();
        alert("item is deleted !!!");
    }
});

