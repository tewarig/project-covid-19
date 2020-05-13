import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import {Link} from 'react-router-dom';


class Tcs201 extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1> Collection of All  Resouces Only For Section D Students  </h1>
    <div class="collection">
    <Link to="/gdrive/Structures" class="collection-item"><span class="badge"></span>Structures</Link>
    <Link to="/gdrive/File%20Handling" class="collection-item"><span class="badge"></span>File Handling</Link>
      </div>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>






    </div>
  );
}
}

export default Tcs201;
