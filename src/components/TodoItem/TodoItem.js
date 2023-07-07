import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="item">
            <CompleteIcon />
            {/* <span
                className={`icon icon-check ${
                    completed ? 'icon-check--active' : ''
                }`}
                onClick={onComplete}
            >
                V
            </span> */}
            <p
                className={`item-p ${
                    completed ? 'item-p--complete' : ''
                }`}
            >
                {text}
            </p>
            <DeleteIcon />
            {/* <span className={`icon icon-delete`} onClick={onDelete}>
                X
            </span> */}
        </li>
    );
}

export { TodoItem };
