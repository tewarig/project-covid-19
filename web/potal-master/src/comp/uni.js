import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.jpg";
import Chem from "./img/Chemistry.jpg";
import For from "./img/4th.jpg";
import The3 from "./img/3rd.jpg";
import {Link} from 'react-router-dom';







class Uni extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>Resources For University Students</h1>
    <Link to="/404">

     <div class="row">
      <div class="col s12 m5">
            <div class="card">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Physcis Group Resources</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
         <a href="#">Get Started</a>
       </div>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Chemistry Group Resources</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
     <a href="#">Get Started</a>
   </div>
 </div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
  <div class="card-image">
    <img src={The3}/>
    <span class="card-title">3rd Semester Resources</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for 3rd Semester Students.</p>
  </div>
  <div class="card-action">
    <a href="#">Get Started</a>
  </div>
</div>
</div>

<div class="col s12 m5">
   <div class="card">
<div class="card-image">
<img src={For}/>
<span class="card-title">4th Semester Resources</span>
</div>
<div class="card-content">
<p>This section contains all the free Resources for 4th Semester Students.</p>
</div>
<div class="card-action">
<a href="#">Get Started</a>

</div>
</div>
</div>

</div>


<br/>
<br/>
<br/>
<br/>
<br/>



</Link>



    </div>
  );
}
}

export default Uni;
