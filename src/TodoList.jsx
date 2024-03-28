import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TodoItem from './TodoItem';

import { useState, useEffect } from 'react';
import ListForm from './ListForm';

// const initialTodos = [
//     { id: 1, text: "walk the dog", completed: false },
//     { id: 2, text: "walk the cat", completed: true },
//     { id: 3, text: "Kill the fish", completed: false },
//     { id: 4, text: "Piss on yo grave", completed: true }
// ]

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (!data) {
        return [];
    }
    else {
        return data;
    }
}

export default function TodoList() {
    // const [todos, setTodos] = useState(initialTodos);
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    const removeTodo = (id) => {
        setTodos(prevTodo => prevTodo.filter(t => t.id !== id))
    }
    const handleChange = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map(t => {
                if (t.id === id) {
                    return { ...t, completed: !t.completed }
                }
                else {
                    return t;
                }
            })
        })
    }
    const addItem = (text) => {
        setTodos(prevTodo => [...prevTodo, { id: crypto.randomUUID(), text: text, completed: false }]);
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", mt: 3 }}>
            <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
                Todos
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.id} removeTodo={() => removeTodo(todo.id)} handleChange={() => handleChange(todo.id)} />
                })}
                <ListForm addItem={addItem} />
            </List >
        </Box>
    )
}



