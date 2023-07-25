import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from "react-dom/client"
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="w-screen h-screen bg-primary">
        <App />
      </div>
    </Provider>
  </React.StrictMode>
);
