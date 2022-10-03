import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Market } from "./screens/MarketPage";
import {store} from "./store/index";
function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <Header />
      <Market />
      </Provider>
    </React.Fragment>
  );
}

export default App;
