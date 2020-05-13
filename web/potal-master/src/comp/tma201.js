import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import {Link} from 'react-router-dom';


class Tma201 extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1> Name </h1>
    <h1> Collection of All  Resouces Only For Section D Students  </h1>
    <div class="collection">
    <Link to="/video/Fourier%20Series%20By%20Dr%20Abhinav%20Goel%20Sir" class="collection-item"><span class="badge"></span>Fourier Series</Link>
    <Link to="/video/Partial%20Differential%20Equation%20By%20Dr%20Abhinav%20Goel%20Sir" class="collection-item"><span class="badge"></span>Partial Differential Equation</Link>
    <Link to="/video/Laplace%20Transform%20By%20Dr%20Abhinav%20Goel%20Sir" class="collection-item"><span class="badge"></span>Laplace Transform</Link>
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

export default Tma201;
