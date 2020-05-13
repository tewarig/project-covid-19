import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import {Link} from 'react-router-dom';



class About extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>About us</h1>
    <p>We are team of students who got bored after watching web series and desided to build some thing to make our life easy.(but it has done something different)</p>
     <p>we desided to build a cool solution to solve our Problems and help others.  </p>
     <a href="https://github.com/webcoder-H"><h5>Find us on Github</h5></a>
     <Link to="/sectiond">back to section-d</Link>

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

export default About;
