import React from 'react';
import './styles.css';

import { useState } from 'react';

function Square({
  value,
  onClick,
}: {
  value: string | null;
  onClick: () => void;
}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
}) {
  const handleSquareClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const newSquares = [...squares];
    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }
    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: Array<string | null>) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // top-left to bottom-right diagonal
    [2, 4, 6], // top-right to bottom-left diagonal
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Return the winner ('X' or 'O')
      return squares[a];
    }
  }
  return null;
}
