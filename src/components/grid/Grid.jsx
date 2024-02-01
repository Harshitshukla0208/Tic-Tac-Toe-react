import { useState } from "react";
import Card from "../card/Card";
import './grid.css';

function Grid() {
    const [turn, setTurn] = useState(true); // if false then X is having the turn | if true then O having the turn
    const gridSize = 3; // Assuming a 3x3 grid
    const [board, setBoard] = useState(Array(gridSize * gridSize).fill(""));

    function play(index) {
        console.log("move played", index);
        const newBoard = [...board];
        newBoard[index] = turn ? "O" : "X";
        setBoard(newBoard);
        setTurn(!turn);
    }

    return (
        <>
            <h1 className="turnHighlight">Current Turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((value, idx) => (
                    <Card onPlay={play} player={value} key={idx} index={idx} turn={turn} gridSize={gridSize} />
                ))}
            </div>
        </>
    );
}

export default Grid;
