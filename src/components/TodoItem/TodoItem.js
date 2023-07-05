import './TodoItem.css';
import deleteIcon from '../../assets/icons/X.png';
import checkIcon from '../../assets/icons/Check.png';

function TodoItem({ text, completed }) {
    return (
        <li>
            <img src={checkIcon} />
            <p>{text}</p>
            <img src={deleteIcon} class="delete" />
        </li>
    );
}

export { TodoItem };
