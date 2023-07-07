import { ReactComponent as CheckSVG } from '../../assets/icons/check.svg';
import { ReactComponent as DeleteSVG } from '../../assets/icons/delete.svg';

const iconTypes = {
    check: <CheckSVG />,
    delete: <DeleteSVG />,
};

function TodoIcon({ type }) {
    return (
        <span className={`icon icon-svg icon-${type}`}>
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };
