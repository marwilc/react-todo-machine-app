import React from 'react';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter/TodoCounter';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el Curso de Intro a React.js', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALA', completed: false },
];
function App() {
    return (
        <>
            <TodoCounter completed={16} total={25} />
            <TodoSearch />

            <TodoList>
                {defaultTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
