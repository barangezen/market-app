import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Market } from "./screens/MarketPage";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Market />
    </React.Fragment>
  );
}

export default App;
