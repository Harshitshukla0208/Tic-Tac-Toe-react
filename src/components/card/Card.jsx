import Icon from '../icon/Icon';
import './Card.css';

function Card({ onPlay, player, index, turn, gridSize }) {
    let icon = <Icon />;
    
    if (player === "X") {
        icon = <Icon name={"cross"} />;
    } else if (player === "O") {
        icon = <Icon name={"circle"} />;
    }

    const handleClick = () => {
        if (onPlay) {
            onPlay(index, turn);
        }
    };

    return (
        <div className={`card card${index + 1}`} onClick={handleClick}>
            {icon}
        </div>
    );
}

export default Card;
