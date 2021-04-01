import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const GRID_ROW_LENGTH = 7;
  const GRID_COL_LENGTH = 10;
 
  const grid = [];
  for (let row = 0; row < GRID_ROW_LENGTH; row++) {
    const currentRow = [];
    for (let col = 0; col < GRID_COL_LENGTH; col++) {
      const id = row + (col * GRID_ROW_LENGTH) + 1; 
      currentRow.push(<div className="box" id={id}>{id}</div>);
    }
    grid.push(currentRow);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>75 Days Hard Challenge</h1>
      </header>
      <main class="box-grid">
        {grid.map((row, rowId) => {
          return (
            <div key={rowId}>
              {row.map((node, nodeId) => {
                return node;
              })}
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
