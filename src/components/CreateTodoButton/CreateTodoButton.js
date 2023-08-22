import './CreateTodoButton.css';
function CreateTodoButton({ setOpenModal }) {
    return (
        <button
            className="create"
            onClick={() => {
                setOpenModal((state) => !state);
            }}
        >
            +
        </button>
    );
}
export { CreateTodoButton };
