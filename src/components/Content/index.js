import React, { Component } from 'react';
import Comments from "../Comments";
import "./index.css";

class Content extends Component {
    state = {  } 
    render() { 
        return (
          <>
            <div className="main">
                <div className="card">
                    <img src="./image/1.jpg" alt="imgContent" />
                    <h1>Down and Out</h1>
                </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                eius numquam deserunt aliquid laudantium voluptates est
              </p>
              <Comments />
            </div>
          </>
        );
    }
}
 
export default Content;