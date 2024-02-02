import { useState } from "react";
import Card from "../card/Card";
import './grid.css';

function Grid() {
    const [turn, setTurn] = useState(true); // if false then X is having the turn | if true then O having the turn
    const gridSize = 3; // Assuming a 3x3 grid
    const [board, setBoard] = useState(Array(gridSize * gridSize).fill(""));
    const [winner, setWinner] = useState(null);

    function isWinner(board, symbol){
        //row
        console.log(board, symbol)
        if(board[0] == board[1] && board[1] == board[2] && board[2] == symbol) return symbol;
        if(board[3] == board[4] && board[4] == board[5] && board[5] == symbol) return symbol;
        if(board[6] == board[7] && board[7] == board[8] && board[8] == symbol) return symbol;    
        
        //col
        if(board[0] == board[3] && board[3] == board[6] && board[6] == symbol) return symbol;    
        if(board[1] == board[4] && board[4] == board[7] && board[7] == symbol) return symbol;    
        if(board[2] == board[5] && board[5] == board[8] && board[8] == symbol) return symbol;    
    
        //diagonals
        if(board[0] == board[4] && board[4] == board[8] && board[8] == symbol) return symbol;    
        if(board[2] == board[4] && board[4] == board[6] && board[6] == symbol) return symbol;
    
        return "";
    }

    function play(index) {
        console.log("move played", index);
        
        const newBoard = [...board];
        newBoard[index] = turn ? "O" : "X";

        const win = isWinner(newBoard, turn ? "O" : "X");
        console.log("winner is", win);
        
        if (win) {
            setWinner(win);
        }

        setBoard(newBoard);
        setTurn(!turn);
    }

    function reset(){
        setBoard(Array(gridSize * gridSize).fill(""));
        setWinner(null);
        setTurn(true);
    }

    return ( 
        <>
            <h1 className="turnHighlight">Current Turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((value, idx) => (
                    <Card onPlay={play} player={value} key={idx} index={idx} />
                ))}
            </div>
            {winner && (
                <>
                    <h1 className="turnHighlight">Winner is {winner}</h1>
                </>
            )}
            <div class="reset-container">
                <button class="reset" onClick={reset}>Reset Game</button>
            </div>        
        </>
    );
}

export default Grid;
