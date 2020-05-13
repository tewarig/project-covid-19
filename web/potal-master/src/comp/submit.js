import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"

class Submit extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h3>Submit a resource</h3>
   <p> Our team is building the backend to accept resouces directly, till them you can directly mail us your resouces.</p>
   <a href={`mailto:${this.props.email}`}>
    <button type="submit" class="waves-effect waves-light btn-small" > Send Mail</button></a>

    </div>
  );
}
}

export default Submit;
