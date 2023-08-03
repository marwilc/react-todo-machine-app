import React from 'react';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter/TodoCounter';

// const defaultTodos = [
//     { text: 'Cortar cebolla', completed: true },
//     { text: 'Tomar el Curso de Intro a React.js', completed: false },
//     { text: 'Llorar con la Llorona', completed: false },
//     { text: 'LALALALALA', completed: false },
// ];

//localStorage.setItem('TODOS_V1');
// localStorage.removeItem('TODOS_V1');

function App() {
    const localStorageTodos = localStorage.getItem('TODO_V1');
    let parsedTodos;

    if (!localStorageTodos) {
        localStorage.setItem('TODOS_V1', JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(localStorageTodos);
    }

    const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(
        (todo) => !!todo.completed
    ).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

    const saveTodos = (newTodos) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    console.log(searchValue);
    return (
        <>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
