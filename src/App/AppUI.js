import React from 'react';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodosLoading } from '../components/TodosLoadings/TodosLoadings';
import { TodosError } from '../components/TodosError/TodosError';
import { TodosEmpty } from '../components/TodosEmpty/TodosEmpty';
import { TodoContext } from '../components/TodoContext/TodoContext';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
    } = React.useContext(TodoContext);
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && (
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                )}
                {error && <TodosError />}
                {!loading && searchedTodos.lenght === 0 && (
                    <TodosEmpty />
                )}

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

export { AppUI };
