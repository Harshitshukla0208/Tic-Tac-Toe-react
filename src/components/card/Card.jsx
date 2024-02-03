import Icon from '../icon/Icon';
import './Card.css';

import clickSound from '../click-sound/clickSound.mp3'

function Card({ onPlay, player, index, gameEnd }) {
    let icon = <Icon />;

    if (player === "X") {
        icon = <Icon name={"cross"} />;
    } else if (player === "O") {
        icon = <Icon name={"circle"} />;
    }

    const handleCardClick = () => {
        // Play the click sound only if the game is not ended and the card is empty
        if (!gameEnd && player === "") {
            onPlay(index);
            const audio = new Audio(clickSound);
            audio.play();
        }
    };

    return (
        <div className={`card card${index + 1}`} onClick={handleCardClick}>
            {icon}
        </div>
    );
}

export default Card;
