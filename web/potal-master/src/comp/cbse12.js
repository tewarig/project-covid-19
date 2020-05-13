import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.jpg";
import Chem from "./img/Chemistry.jpg";
import For from "./img/4th.jpg";
import The3 from "./img/3rd.jpg";
import {Link} from 'react-router-dom';






class Dev extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>Resources For University Students</h1>

     <div class="row">
       <div class="col s12 m5">
       <Link to="/maths12">
            <div class="card">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Mathematics</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free resouces from the youtube as well as other resouces contributed by University Students and Teachers.</p>
       </div>
       <div class="card-action">
         <Link to="/maths12">Get Started</Link>
       </div>
     </div>
     </Link>
   </div>
   <div class="col s12 m5">
       <Link to="/physics12">
            <div class="card">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Physics</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free resouces from the youtube as well as other resouces contributed by University Students and Teachers.</p>
       </div>
       <div class="card-action">
         <Link to="/physics12">Get Started</Link>
       </div>
     </div>
     </Link>
   </div>

</div>



<br/>
<br/>
<br/>
<br/>
<br/>







    </div>
  );
}
}

export default Dev;
