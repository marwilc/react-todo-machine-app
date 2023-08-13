import React from 'react';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodosLoading } from '../components/TodosLoadings/TodosLoadings';
import { TodosError } from '../components/TodosError/TodosError';
import { TodosEmpty } from '../components/TodosEmpty/TodosEmpty';

function AppUI({
    completeTodo,
    totalTodos,
    deleteTodo,
    searchedTodos,
    searchValue,
    setSearchValue,
    completedTodos,
    loading,
    error,
}) {
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
