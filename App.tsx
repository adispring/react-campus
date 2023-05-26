import React from 'react';
import './styles.css';

import { useState } from 'react';

interface SquareItem {
  value: 'X' | 'O';
  move: number;
  x: number;
  y: number;
}

function Square({
  value,
  onClick,
  className, // 添加 className 属性
}: {
  value: 'X' | 'O' | undefined | null;
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
  currentMove,
  onPlay,
}: {
  xIsNext: boolean;
  squares: Array<SquareItem | null>;
  currentMove: number;
  onPlay: (nextSquares: Array<SquareItem | null>) => void;
}) {
  const handleSquareClick = (x: number, y: number) => {
    const i = x * 3 + y;
    if (squares[i] || winner.gamer) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = {
      value: xIsNext ? 'X' : 'O',
      x,
      y,
      move: currentMove,
    };
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
              value={squares[x * 3 + y]?.value}
              onClick={() => handleSquareClick(x, y)}
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

  function handlePlay(nextSquares: Array<SquareItem | null>) {
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
      console.log('current squares', squares);
      const coordinates = squares.find((x) => x?.move === currentMove - 1);
      desc = `You are at move #${move}, coordinates: (${coordinates?.x}, ${coordinates?.y})`;
    } else {
      console.log('squares', squares);
      const coordinates = squares.find((x) => x?.move === move - 1);
      desc = `Go to move #${move}, coordinates: (${coordinates?.x}, ${coordinates?.y})`;
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
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          currentMove={currentMove}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<SquareItem | null>): {
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
    if (
      squares[a]?.value &&
      squares[a]?.value === squares[b]?.value &&
      squares[a]?.value === squares[c]?.value
    ) {
      // Return the winner ('X' or 'O')
      return {
        gamer: (squares[a] as SquareItem).value,
        line: [a, b, c],
      };
    }
  }
  return {
    gamer: null,
    line: null,
  };
}
