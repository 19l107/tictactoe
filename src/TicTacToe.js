import "./styles.css";
import { useState } from "react";
export default function TicTacToe() {
  const [next, setNext] = useState("X");
  const [array, setArray] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();
  let matrix = [...array];
  const Final = (matrix) => {
    let trio = [
      [0, 1, 2], 
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], 
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], 
      [2, 4, 6]
    ];
    for (let x = 0; x < trio.length; x++) {
      const [i, j, k] = trio[x];
      if (matrix[i] && matrix[i] === matrix[j] && matrix[i] === matrix[k]) {
        setWinner(matrix[i]);
      }
    }
  };
  if (winner) {
  }
  const [count, setCount] = useState(0);
  const handClick = (id) => {
    setCount((count) => count + 1);
    if (array[id] !== "") {
      alert("Clicked twice");
      return;
    }
    if (next === "X") {
      matrix[id] = "X";
      setNext("O");
    } else {
      matrix[id] = "O";
      setNext("X");
    }
    setArray(matrix);
    Final(matrix);
  };
  const Box = ({ id }) => {
    if (winner && matrix[id] === "") {
      return <td></td>;
    }
    return <td onClick={() => handClick(id)}>{array[id]}</td>;
  };
  const reset = () => {
    setWinner(null);
    setArray(Array(9).fill(""));
    setCount(0);
    setNext("X");
  };
  return (
    <>
      <div className="tic">
        <h1>Tic Tac Toe</h1>
      </div>
      <div>
        <table className="Table">
          <tbody>
            <tr>
              <Box id={0} />
              <Box id={1} />
              <Box id={2} />
            </tr>
            <tr>
              <Box id={3} />
              <Box id={4} />
              <Box id={5} />
            </tr>
            <tr>
              <Box id={6} />
              <Box id={7} />
              <Box id={8} />
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {winner ? (
          <>
            <h1 className="tic">Winner : {winner}</h1>
            <button className="space" onClick={reset}>
              <h1>Play Again</h1>
            </button>
          </>
        ) : count === 9 ? <div><h1 className="tic">It's a Tie</h1>
            
              <button className="space" onClick={reset}>
                <h1>Play Again</h1>
              </button>
            </div> : (
          <>
            <h1 className="tic">Turn : {next}</h1>
          </>
        )}
        {count === 9 && winner===''? (
          <>
            <h1 className="tic">It's a Tie</h1>
            <div>
              <button className="space" onClick={reset}>
                <h1>Play Again</h1>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
