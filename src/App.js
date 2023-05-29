import "./App.css";
import Searchbar from "./components/Searchbar";
import Dropdown from "./components/dropdown.js";
import ChartComponent from "./components/ChartComponent";
function App() {
  return (
    <div>
      <div className="flex mx-5">
        <Dropdown />
        <Searchbar />
      </div>
      <div className="flex mx-5">
        <ChartComponent />
      </div>
    </div>
  );
}

export default App;
