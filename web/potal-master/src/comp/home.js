import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Res from "./res.js";

class home extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>

     <h4>That is what you can call this site for now...</h4>


     <Res/>






    </div>
  );
}
}

export default home;
