import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.jpg";
import Chem from "./img/Chemistry.jpg";
import For from "./img/4th.jpg";
import The3 from "./img/3rd.jpg";
import {Link} from 'react-router-dom';






class Physics12 extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <h1>Resources For 12th Students</h1>

     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video3/Electric_Charges_and_Fields">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Electric Charges and Fields</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video3/Electric_Charges_and_Fields"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video3/Electrostatic_Potential_and_Capacitance">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Electrostatic Potential and Capacitance</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video3/Electrostatic_Potential_and_Capacitance"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
        <Link to="/video3/Current_Electricity">
  <div class="card-image">
    <img src={The3}/>
    <span class="card-title"> Current Electricity</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for 3rd Semester Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video3/Current_Electricity"><a href="#">Get Started</a></Link>
  </div>
  </Link>
</div>
</div>

<div class="col s12 m5">
   <div class="card">
    <Link to="/video3/Moving_Charges_and_Magnetism">
<div class="card-image">
<img src={For}/>
<span class="card-title">Moving Charges and Magnetism</span>
</div>
<div class="card-content">
<p>This section contains all the free Resources for 4th Semester Students.</p>
</div>
<div class="card-action">
  <Link to="/video3/Moving_Charges_and_Magnetism"><a href="#">Get Started</a></Link>

</div>
</Link>
</div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video3/Magnetism_and_Matter">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title"> Magnetism and Matter</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video3/Magnetism_and_Matter"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video3/Electromagnetic_Induction">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Electromagnetic Induction</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video3/Electromagnetic_Induction"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video3/Alternating_Current">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title"> Alternating Current</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Alternating_Current"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video3/Electromagnetic_Waves">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Electromagnetic Waves</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video3/Electromagnetic_Waves"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video3/Ray_Optics_and_Optical_Instruments">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Ray Optics and Optical Instruments</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video3/Ray_Optics_and_Optical_Instruments"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video3/Wave_Optics">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Wave Optics</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video3/Wave_Optics"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video3/Dual_Nature_of_Radiation_and_Matter">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Dual Nature of Radiation and Matter</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video3/Dual_Nature_of_Radiation_and_Matter"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video3/Atoms">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Atoms</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video3/Atoms"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
        <div class="card">
        <Link to="/video3/Nuclei">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Nuclei</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video3/Nuclei"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>
   <div class="col s12 m5">
         <div class="card">
          <Link to="/video3/Semiconductor_Electronics">
    <div class="card-image">
      <img src={Chem}/>
      <span class="card-title">Semiconductor  Electronics</span>
    </div>
    <div class="card-content">
    <p>This section contains all the free Resources for Chemistry Group Students.</p>
    </div>
    <div class="card-action">
       <Link to="/video3/Semiconductor_Electronics"><a href="#">Get Started</a></Link>
    </div>
    </Link>
  </div>
 </div>
</div>
<div class="row">
 <div class="col s12 m5">
   <div class="card">
   <Link to="/video3/Communication_Systems">
  <div class="card-image">
    <img src={Phy}/>
    <span class="card-title">Communication Systems</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for Physcis Group Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video3/Communication_Systems"><a href="#">Get Started</a></Link>
  </div>
  </Link>
</div>
</div>
</div>


<br/>







    </div>
  );
}
}

export default Physics12;
