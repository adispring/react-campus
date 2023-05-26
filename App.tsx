import React from 'react';
import './styles.css';

import { useState } from 'react';

function Square({
  value,
  onClick,
  className, // 添加 className 属性
}: {
  value: string | null;
  onClick: () => void;
  className?: string; // 定义 className 属性
}) {
  return (
    <button className={`square ${className}`} onClick={onClick}>
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
    if (squares[i] || winner.gamer) {
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
  if (winner.gamer) {
    status = `Winner: ${winner.gamer}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((x) => (
        <div className="board-row">
          {[0, 1, 2].map((y) => (
            <Square
              className={winner.line?.includes(x * 3 + y) ? 'win' : ''}
              value={squares[x * 3 + y]}
              onClick={() => handleSquareClick(x * 3 + y)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move === currentMove) {
      desc = `You are at move #${move}`;
    } else {
      desc = `Go to move #${move}`;
    }
    return (
      <li key={move}>
        {move === currentMove ? (
          <div>{desc}</div>
        ) : (
          <button onClick={() => jumpTo(move)}>{desc}</button>
        )}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<string | null>): {
  gamer: string | null;
  line: [number, number, number] | null;
} {
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
      return {
        gamer: squares[a] as string,
        line: [a, b, c],
      };
    }
  }
  return {
    gamer: null,
    line: null,
  };
}
