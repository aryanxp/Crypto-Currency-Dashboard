import "./App.css";
import Searchbar from "./components/Searchbar";
import Dropdown from "./components/Dropdown.js";
import ChartComponent from "./components/ChartComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ExchangeComponent from "./components/ExchangeComponent";
import MarketCapComponent from "./components/MarketCapComponent";
function App() {
  return (
    <div className="grid grid-flow-col grid-cols-1 gap-7">
      <div className="flex flex-col w-full  mx-4">
        <div className="flex">
          <Dropdown />
          <Searchbar />
        </div>
        <div className="flex mt-4">
          <ChartComponent />
        </div>
        <div className="flex mt-4">
          <PortfolioComponent />
          <ExchangeComponent />
        </div>
      </div>
      <div className="flex ">
        <MarketCapComponent />
      </div>
    </div>
  );
}

export default App;
