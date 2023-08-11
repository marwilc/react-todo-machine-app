import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(
        (todo) => !!todo.completed
    ).length;

    const totalTodos = todos.length;

    React.useEffect(() => {
        console.log('Log');
    });

    const searchedTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );

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
        <AppUI
            completeTodo={completeTodo}
            totalTodos={totalTodos}
            deleteTodo={deleteTodo}
            searchedTodos={searchedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            completedTodos={completedTodos}
        />
    );
}

export default App;
