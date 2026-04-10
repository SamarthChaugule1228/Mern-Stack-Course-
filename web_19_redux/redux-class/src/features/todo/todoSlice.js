import { createSlice ,nanoid } from '@reduxjs/toolkit'
const initialState = {
    todos: [{ id: 1, task: 'Learn Redux Toolkit', isdone: false }],
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newtodo = {
                id: nanoid(),
                task: action.payload,
                isdone: false,
            }
            state.todos.push(newtodo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        marksAsDone: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isdone = true;
            }
        },
    },

});
export const { addTodo, deleteTodo, marksAsDone } = todoSlice.actions;
export default todoSlice.reducer;