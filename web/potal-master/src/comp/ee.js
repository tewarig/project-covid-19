import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"
import Elo from "./img/el.gif";
import {Link} from 'react-router-dom';



class ee extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1> Our team is finding resources for this page... or are they? </h1>
    <img src={Elo}/>
    <br/>
    <Link to ="/">  back to Home</Link>

    <h3>Submit a resource</h3>
    <a href={`mailto:${this.props.email}`}>

    <button type="submit" class="waves-effect waves-light btn-small" > Send Mail</button></a>
    <br/>
   <br/>
   <br/>
   <br/>
   <br/>










    </div>
  );
}
}

export default ee;
