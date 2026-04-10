import { useState } from "react";

export default function Counter()
{
    let [stateVariable , setStateVariable] = useState(10);
    let [count, setCount] = useState(0);//initialization line 

    function incCount()
    {
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
    }
    return (
        <div>
            <h3> count :{count} </h3>
            <button onClick={incCount}>Increase Counter </button>
      </div>  
    );
}