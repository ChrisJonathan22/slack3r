import React, { Component } from "react";
import Logo from "./components/Logo";
import Instructions from "./components/Instructions";
import TokenField from "./components/TokenField";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Instructions />
        <TokenField />
      </div>
    );
  }
}

export default App;
