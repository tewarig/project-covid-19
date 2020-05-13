import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class Upnav extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Upnav" ref={el => (this.div = el)}>
    <h4> Resource full</h4>








    </div>
  );
}
}

export default Upnav;
