import './TodoItem.css';

function TodoItem({ text, completed }) {
    return (
        <li className="item">
            <span
                className={`icon icon-check ${
                    completed ? 'icon-check--active' : ''
                }`}
            >
                V
            </span>
            <p
                className={`item-p ${
                    completed ? 'item-p--complete' : ''
                }`}
            >
                {text}
            </p>
            <span className={`icon icon-delete`}>X</span>
        </li>
    );
}

export { TodoItem };
