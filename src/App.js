import "./App.css";
import Searchbar from "./components/Searchbar";
import Dropdown from "./components/dropdown.js";
function App() {
  return (
    <div className="flex mx-5">
      <Dropdown />
      <Searchbar />
    </div>
  );
}

export default App;
