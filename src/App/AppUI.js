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
import { Modal } from '../components/Modal/Modal';
import { TodoForm } from '../components/TodoForm/TodoForm';
function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
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

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export { AppUI };
