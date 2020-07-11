import React from "react";
import "./App.css";

function App() {
  const [savings, setSavings] = React.useState(0);
  const [lowerRange, setLowerRange] = React.useState(0);
  const [higherRange, setHigherRange] = React.useState(0);

  const calculateRange = (e) => {
    setSavings(e.target.value);
    setLowerRange(((25000 - e.target.value) * 100) / 5);
    setHigherRange(((25000 - e.target.value) * 100) / 3);
  };

  return (
    <div className="App">
      <input
        type="range"
        value={savings}
        onChange={calculateRange}
        onInput={calculateRange}
        min="0"
        max="25000"
      />
      <p>
        Savings on the amount of rent we currently pay:{" "}
        <strong>${savings}</strong>
      </p>
      <div>
        <h2>
          ${(lowerRange / 1000).toFixed(2)}k {"<"} Your House Price {"<"} $
          {(higherRange / 1000).toFixed(2)}k
        </h2>
        <p>
          The lower range assumes an opportunity cost of 1%, and the higher one
          assumes opportunity cost of 3%. Most likely the true opportunity cost
          will be somewhere in between.
        </p>
        <p> We also assume 2% maintenance cost of owning house </p>
        <p>
          {" "}
          What is opportunity cost? It's the money we lose by investing in a
          house as opposed to the stock market.
        </p>
      </div>
    </div>
  );
}

export default App;
