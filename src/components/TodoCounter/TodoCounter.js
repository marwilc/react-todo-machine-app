import './TodoCounter.css';
function TodoCounter({ total, completed }) {
    return (
        <h1>
            Has completado <b>{completed}</b> de <b>{total}</b> TODOs
        </h1>
    );
}
export { TodoCounter };
