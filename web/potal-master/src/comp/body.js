import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class Bodyi extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1> Name </h1>








    </div>
  );
}
}

export default Bodyi;
