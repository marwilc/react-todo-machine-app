import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <label>Write the new TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo" />
            <div className="TodoForm-buttonContainer">
                <button
                    type=""
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
