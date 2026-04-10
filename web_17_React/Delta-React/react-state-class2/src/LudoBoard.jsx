import { useState } from "react"

export default function LudoBoard() {
    let [arr , setArr] = useState(["no moves yet"]);
    let [ moves, setMoves ] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });
    let [count , setCount] = useState(0);
    let updateBlue = () => {
       
        // setMoves((prevMoves) => {
        //     // return {
        //     //     ...prevMoves,
        //     //     blue: prevMoves.blue + 1
        //     // }
        // }); 
        setArr([...arr, "blue moved"]);
        setCount(count + 1);
        console.log(arr);
    }
    let updatedYellow = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                yellow: prevMoves.yellow + 1
            }
        });
    }
    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                green: prevMoves.green + 1
            }
        }
        );
    }
    let updatedRed = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                red: prevMoves.red + 1
            }
        });
    }   
        
        
        return (
        <div>
            <h1>Ludo Board</h1>
            <div className="board">
                <p>Blue Move :{moves.blue} </p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p> Yello Move :{moves.yellow} </p>
                <button style={{backgroundColor:"yellow"}} onClick={updatedYellow}>+1</button>
                <p> Green Move :{moves.green} </p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                <p> Red Move :{moves.red}  </p>
                <button style={{backgroundColor:"red"}} onClick={updatedRed}>+1</button>
            </div>
        </div>
    )
}