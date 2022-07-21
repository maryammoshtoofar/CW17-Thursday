import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

class App extends Component {
  state = {
    info: [],
    currentPost: {},
  };
  selectPost=(key)=>{
    // const myPost=this.state.info[key];
    // this.setState({currentPost:myPost},()=>console.log(myPost))
    console.log(key)
  }

  //cathing data and filling info array for all components
  componentDidMount() {
    fetch("http://localhost:3001/posts").then((data) => {
      data.json().then(result=>{this.setState({info:result})})
    });
  }

  render() {
    return (
      
      <div className="wrapper">
        <SideBar posts={this.state.info} selectPost={this.selectPost}/>
        <Content />
      </div>
    );
  }
}
export default App;
