import Icon from '../icon/Icon';
import './Card.css';

function Card({ onPlay, player, index }) {
    let icon = <Icon />;
    
    if (player === "X") {
        icon = <Icon name={"cross"} />;
    } else if (player === "O") {
        icon = <Icon name={"circle"} />;
    }

    return (
        <div className={`card card${index + 1}`} onClick={() => onPlay(index)}>
            {icon}
        </div>
    );
}

export default Card;