import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"
import Tw12 from "./img/12.jpg";
import El11 from "./img/11.jpg";
import Th10 from "./img/10.jpg";
import {Link} from 'react-router-dom';




class Sch extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
     <h3>Educational Potal</h3>

     <h1>Resources For University Students</h1>

      <div class="row">
       <div class="col s12 m5">
         <Link to="/404">
             <div class="card">
        <div class="card-image">
          <img src={Tw12}/>
          <span class="card-title">Physcis Group Resources</span>
        </div>
        <div class="card-content">
          <p>This section contains all the free Resources for Physcis Group Students.</p>
        </div>
        <div class="card-action">
        Get Started
        </div>
      </div>
      </Link>
    </div>

   <div class="col s12 m5">
   <Link to="/404">

         <div class="card">
    <div class="card-image">
      <img src={El11}/>
      <span class="card-title">Chemistry Group Resources</span>
    </div>
    <div class="card-content">
    <p>This section contains all the free Resources for Chemistry Group Students.</p>
    </div>
    <div class="card-action">
      <a href="#">Get Started</a>
    </div>

  </div>
  </Link>
 </div>

 </div>
 <div class="row">
  <div class="col s12 m5">
  <Link to="/404">

        <div class="card">
   <div class="card-image">
     <img src={Th10}/>
     <span class="card-title">3rd Semester Resources</span>
   </div>
   <div class="card-content">
     <p>This section contains all the free Resources for 3rd Semester Students.</p>
   </div>
   <div class="card-action">
     <a href="#">Get Started</a>
   </div>

 </div>
 </Link>
 </div>

 <div class="col s12 m5">
 <Link to="/404">

    <div class="card">

 <div class="card-image">
 <img src={Th10}/>
 <span class="card-title">4th Semester Resources</span>
 </div>
 <div class="card-content">
 <p>This section contains all the free Resources for 4th Semester Students.</p>
 </div>
 <div class="card-action">
 <a href="#">Get Started</a>

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

export default Sch;
