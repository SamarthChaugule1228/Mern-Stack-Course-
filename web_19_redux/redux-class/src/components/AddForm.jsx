import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
export default function Addform() {
    const [task, setTask] = useState(""); 
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted Task: ", task);
        dispatch(addTodo(task));
    }
     return (
        <>
            <form onSubmit={submitHandler}>
                 <input type="text" placeholder="Enter the Todo " onChange={(e) => { setTask(e.target.value)}}/>
                <button>Add Task </button>
            </form>
        </>
    );
}