import React, { Component } from "react";
import "./App.css"
import SideBar from "./components/SideBar";
import Content from "./components/Content";


class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
    );
  }
}
export default App;
