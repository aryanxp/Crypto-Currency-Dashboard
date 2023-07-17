import "./App.css";
import Searchbar from "./components/Searchbar";
import Dropdown from "./components/Dropdown.js";
import ChartComponent from "./components/ChartComponent";
import PortfolioComponent from "./components/PortfolioComponent";
import ExchangeComponent from "./components/ExchangeComponent";
import MarketCapComponent from "./components/MarketCapComponent";
function App() {
  return (
    <div className=" lg:flex xl:flex ">
      <div className=" lg:w-full xl:w-full">
        <div className="flex  ">
          <Dropdown />
          <Searchbar />
        </div>
        <div className="mt-4">
          <ChartComponent />
        </div>
        <div className=" flex mt-4 ">
          <PortfolioComponent />
          <ExchangeComponent />
        </div>
      </div>
      <div className="ml-4 mr-4 ">
        <MarketCapComponent />
      </div>
    </div>
  );
}

export default App;
