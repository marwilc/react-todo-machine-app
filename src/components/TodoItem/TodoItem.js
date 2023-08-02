import { CompleteIcon } from '../CompleteIcon/CompleteIcon';
import { DeleteIcon } from '../DeleteIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="item">
            <CompleteIcon
                completed={completed}
                onComplete={onComplete}
            />
            <p
                className={`item-p ${
                    completed ? 'item-p--complete' : ''
                }`}
            >
                {text}
            </p>
            <DeleteIcon onDelete={onDelete} />
        </li>
    );
}

export { TodoItem };
