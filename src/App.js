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
        <table data-role="table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>City </th>
              <th>Average House Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Toronto, Ontario</td>
              <td>921,000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Vancouver, British Columbia</td>
              <td>878,242</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Victoria, British Columbia</td>
              <td>763,517</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Kitchener-Cambridge-Waterloo, Ontario</td>
              <td>583,144</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Calgary, Alberta</td>
              <td>570,084</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Hamilton, Ontario</td>
              <td>535,520</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Oshawa, Ontario</td>
              <td>480,700</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Saskatoon, Saskatchewan</td>
              <td>385,580</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Edmonton, Alberta</td>
              <td>378,247</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Ottawa, Ontario</td>
              <td>373,200</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Montreal, Quebec</td>
              <td>349,000</td>
            </tr>
            <tr>
              <td>12</td>
              <td>London, Ontario</td>
              <td>344,815</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Kingston, Ontario</td>
              <td>327,507</td>
            </tr>
            <tr>
              <td>14</td>
              <td>St. Catharines-Niagara, Ontario</td>
              <td>323,179</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Regina, Saskatchewan</td>
              <td>316,990</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Halifax, Nova Scotia</td>
              <td>306,944</td>
            </tr>
            <tr>
              <td>17</td>
              <td>St. John's, Newfoundland</td>
              <td>306,279</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Winnipeg, Manitoba</td>
              <td>300,011</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Quebec, Quebec</td>
              <td>266,578</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Greater Sudbury, Ontario</td>
              <td>254,000</td>
            </tr>
            <tr>
              <td>21</td>
              <td>Windsor, Ontario</td>
              <td>247,000</td>
            </tr>
            <tr>
              <td>22</td>
              <td>Thunder Bay, Ontario</td>
              <td>237,500</td>
            </tr>
            <tr>
              <td>23</td>
              <td>Saguenay, Quebec</td>
              <td>196,000</td>
            </tr>
            <tr>
              <td>24</td>
              <td>Saint John, New Brunswick</td>
              <td>187,519</td>
            </tr>
            <tr>
              <td>25</td>
              <td>Trois-Rivieres, Quebec</td>
              <td>169,500</td>
            </tr>
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
