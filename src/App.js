import React from "react";
import "./App.css";

const HOUSE_PRICES = [
  { region: "Toronto, Ontario", price: 921000 },
  { region: "Vancouver, British Columbia", price: 878242 },
  { region: "Victoria, British Columbia", price: 763517 },
  { region: "Kitchener-Cambridge-Waterloo, Ontario", price: 583144 },
  { region: "Calgary, Alberta", price: 570084 },
  { region: "Hamilton, Ontario", price: 535520 },
  { region: "Oshawa, Ontario", price: 480700 },
  { region: "Saskatoon, Saskatchewan", price: 385580 },
  { region: "Edmonton, Alberta", price: 378247 },
  { region: "Ottawa, Ontario", price: 373200 },
  { region: "Montreal, Quebec", price: 349000 },
  { region: "London, Ontario", price: 344815 },
  { region: "Kingston, Ontario", price: 327507 },
  { region: "St. Catharines-Niagara, Ontario", price: 323179 },
  { region: "Regina, Saskatchewan", price: 316990 },
  { region: "Halifax, Nova Scotia", price: 306944 },
  { region: "St. John's, Newfoundland", price: 306279 },
  { region: "Winnipeg, Manitoba", price: 300011 },
  { region: "Quebec, Quebec", price: 266578 },
  { region: "Greater Sudbury, Ontario", price: 254000 },
  { region: "Windsor, Ontario", price: 247000 },
  { region: "Thunder Bay, Ontario", price: 237500 },
  { region: "Saguenay, Quebec", price: 196000 },
  { region: "Saint John, New Brunswick", price: 187519 },
  { region: "Trois-Rivieres, Quebec", price: 169500 },
];

function App() {
  const [savings, setSavings] = React.useState(0);
  const [lowerRange, setLowerRange] = React.useState(0);
  const [higherRange, setHigherRange] = React.useState(0);
  const [midRange, setMidRange] = React.useState(0);
  const [currentRent, setCurrentRent] = React.useState(25000);
  const [totalAssets, setTotalAssets] = React.useState(1000000);
  const [swr, setSwr] = React.useState(4);

  const calculateRange = (e) => {
    setSavings(e.target.value);
    setLowerRange(((currentRent - e.target.value) * 100) / 5);
    setHigherRange(((currentRent - e.target.value) * 100) / 3);
    setMidRange(((currentRent - e.target.value) * 100) / 4);
  };

  return (
    <div className="App">
      <div>
        <label>Total Assets</label>
        <input
          type="number"
          value={totalAssets}
          onChange={(e) => setTotalAssets(e.target.value)}
        />
      </div>
      <div>
        <label>Current Annual Rent</label>
        <input
          type="number"
          value={currentRent}
          onChange={(e) => setCurrentRent(e.target.value)}
        />
      </div>
      <input
        type="range"
        value={savings}
        onChange={calculateRange}
        onInput={calculateRange}
        min="0"
        max={currentRent}
      />
      <div>
        <label>Safe Withdrawal Rate</label>
        <input
          type="number"
          value={swr}
          onChange={(e) => setSwr(e.target.value)}
        />
      </div>
      <p>
        Savings on the amount of rent we currently pay:{" "}
        <strong>${savings}</strong>
      </p>

      <p>
        {swr}% SWR on remaining liquid assets:{" "}
        <strong>
          ${((swr / 100) * (totalAssets - higherRange)).toFixed(2)} to {" $"}
          {((swr / 100) * (totalAssets - midRange)).toFixed(2)} to {" $"}
          {((swr / 100) * (totalAssets - lowerRange)).toFixed(2)}
        </strong>
      </p>
      <p>
        Available to spend
        <strong>
          $
          {((swr / 100) * (totalAssets - midRange)).toFixed(2) -
            (0.02 * midRange).toFixed(2)}
        </strong>
      </p>
      <div>
        <h2>
          ${(lowerRange / 1000).toFixed(2)}k {"<"} Your House Price {"<"} $
          {(higherRange / 1000).toFixed(2)}k
        </h2>
        <h2>Your House Price Mid Range: ${(midRange / 1000).toFixed(2)}k</h2>

        <table data-role="table">
          <thead>
            <tr>
              <th>City</th>
              <th>Average House Price</th>
            </tr>
          </thead>
          <tbody>
            {HOUSE_PRICES.filter((hp) => hp.price <= higherRange).map((hp) => (
              <tr key={hp.region}>
                <td>{hp.region}</td>
                <td>{hp.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

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
