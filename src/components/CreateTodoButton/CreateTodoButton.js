import createIcon from '../../assets/icons/create.svg';
import './CreateTodoButton.css';
function CreateTodoButton() {
    return <img src={createIcon} class="create" />;
}
export { CreateTodoButton };
