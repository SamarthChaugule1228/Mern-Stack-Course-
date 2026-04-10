import { useSelector } from 'react-redux';
import Addform from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';
import { marksAsDone } from '../features/todo/todoSlice';
export default function Todo() {
    const todos = useSelector((state) => state.todo.todos);
    console.log(todos);
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        console.log("Delete clicked for id: ", id);
        dispatch(deleteTodo(id));
    }
    const markAsDoneHandler = (id) => {
        dispatch(marksAsDone(id));
        
    }
    return (
        <div>
                <Addform />
            <h2>Todos </h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task} - {todo.isdone ? 'Done' : 'Pending'}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => markAsDoneHandler(todo.id)}>Mark As Done </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}