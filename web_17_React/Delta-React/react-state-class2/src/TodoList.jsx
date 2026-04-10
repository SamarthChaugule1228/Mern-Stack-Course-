
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
export default function TodoList() {
    // use consistent shape for todos: { task: string, id: string }
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), completed: false }]);
    let [newTask, setNewTask] = useState("");

    let addNewTask = () => {
        const trimmed = (newTask || "").trim();
        if (!trimmed) return; // don't add empty tasks

        const todoItem = { task: trimmed, id: uuidv4(), completed: false };
        setTodos([...todos, todoItem]);
        setNewTask("");
    };
    let updateTodoValue = (e) => {
        setNewTask(e.target.value);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') addNewTask();
    }

    const toggleCompleted = (id) => {
        setTodos(prev => prev.map(t => {
            if (t.id !== id) return t;
            const next = { ...t, completed: !t.completed };
            // play sound only when we transition to completed
            if (!t.completed && next.completed) playCompleteSound();
            return next;
        }));
    }

    // mark a todo done explicitly
    const markDone = (id) => {
        setTodos(prev => prev.map(t => {
            if (t.id !== id) return t;
            if (!t.completed) playCompleteSound();
            return { ...t, completed: true };
        }));
    }

    // undo done -> mark not completed
    const undoDone = (id) => {
        setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: false } : t));
    }

    // editing state: which todo is being edited and the current edit value
    const [editingId, setEditingId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    const startEditing = (id, currentTask) => {
        setEditingId(id);
        setEditingValue(currentTask);
    }

    const cancelEditing = () => {
        setEditingId(null);
        setEditingValue("");
    }

    // save the edited task and convert to UPPERCASE before saving
    const saveEdit = (id) => {
        const trimmed = (editingValue || "").trim();
        if (!trimmed) return; // don't save empty strings
        const upper = trimmed.toUpperCase();
        setTodos(prev => prev.map(t => t.id === id ? { ...t, task: upper } : t));
        cancelEditing();
    }

    const deleteTodo = (id) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    }

    // play a pleasant completion sound using WebAudio API - works without file assets
    const audioCtxRef = useRef(null);
    const playCompleteSound = () => {
        try {
            if (typeof window === 'undefined') return;
            if (!audioCtxRef.current) {
                audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioCtxRef.current;
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'sine';
            o.frequency.value = 880; // start at A5
            g.gain.value = 0.0001;
            o.connect(g);
            g.connect(ctx.destination);
            const now = ctx.currentTime;
            g.gain.exponentialRampToValueAtTime(0.25, now + 0.01);
            o.frequency.setValueAtTime(880, now);
            o.frequency.exponentialRampToValueAtTime(1320, now + 0.14);
            g.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            o.start(now);
            o.stop(now + 0.45);
        } catch (e) {
            // silent failure on older browsers
            try {
                const audio = new Audio();
                audio.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=';
                audio.play().catch(()=>{});
            } catch(e2){}
        }
    }

    // clear completed todos
    const clearCompleted = () => {
        setTodos(prev => prev.filter(t => !t.completed));
    }

    // mark all tasks done and play sound if any weren't completed
    const markAllDone = () => {
        setTodos(prev => {
            const anyNotDone = prev.some(t => !t.completed);
            if (anyNotDone) playCompleteSound();
            return prev.map(t => ({ ...t, completed: true }));
        });
    }

    // localStorage persistence
    useEffect(() => {
        try {
            const raw = localStorage.getItem('todos-v1');
            if (raw) setTodos(JSON.parse(raw));
        } catch (e) {
            // ignore parse error and keep sample
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('todos-v1', JSON.stringify(todos));
        } catch (e) {}
    }, [todos]);
    return (
        <div>
            <div className="todo-container">
                <div className="input-row">
                    <input
                type="text"
                value={newTask}
                placeholder="Add a task"
                onChange={updateTodoValue}
                onKeyDown={handleKeyDown} />
                    <button className="btn-primary add-btn" onClick={addNewTask} aria-label="Add task">Add</button>
                </div>

                <div className="meta-row">
                    <div className="counts">Total: <strong>{todos.length}</strong></div>
                    <div className="counts">Done: <strong>{todos.filter(t=>t.completed).length}</strong></div>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
                        <button className="btn-done" onClick={markAllDone} title="Mark all done">Mark all</button>
                        <button className="btn-ghost" onClick={clearCompleted} title="Clear completed">Clear completed</button>
                    </div>
                </div>
            <br />
            <h1 className="title">Tasks</h1>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li className={`task-item ${todo.completed ? 'completed' : ''}`} key={todo.id}>
                            <label className="task-left">
                                <input className="task-checkbox" type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
                                {editingId === todo.id ? (
                                    <input
                                        aria-label={`edit-${todo.id}`}
                                        type="text"
                                        value={editingValue}
                                        onChange={(e) => setEditingValue(e.target.value)}
                                    />
                                ) : (
                                    <span className="task-text">{todo.task}</span>
                                )}
                            </label>
                            <div className="actions">
                                {editingId === todo.id ? (
                                    <>
                                        <button className="btn-save" onClick={() => saveEdit(todo.id)}>Save</button>
                                        <button className="btn-ghost" onClick={cancelEditing}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        {!todo.completed ? (
                                            <button className="btn-done" onClick={() => markDone(todo.id)} title="Mark as done">✔</button>
                                        ) : (
                                            <button className="btn-undo" onClick={() => undoDone(todo.id)} title="Undo done">↺</button>
                                        )}
                                        <button className="btn-edit" onClick={() => startEditing(todo.id, todo.task)} title="Edit">✎</button>
                                        <button className="delete-btn" onClick={() => deleteTodo(todo.id)} title="Delete">🗑</button>
                                    </>
                                )}
                            </div>
                        </li>
                    ))
                }   
            </ul>
            </div>
        </div>
    )
}   