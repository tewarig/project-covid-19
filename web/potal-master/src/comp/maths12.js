import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import maths1 from "./img/maths1.jpg";
import For from "./img/4th.jpg";
import The3 from "./img/3rd.jpg";
import {Link} from 'react-router-dom';
import maths2 from "./img/maths2.jpg";
import maths3 from "./img/maths3.jpg";
import maths4 from "./img/maths4.jpg";
import maths5 from "./img/maths5.jpg";
import maths6 from "./img/maths6.jpg";
import maths7 from "./img/maths7.jpg";
import maths8 from "./img/maths8.jpg";
import maths9 from "./img/maths9.jpg";
import maths10 from "./img/maths10.jpg";
import maths11 from "./img/maths11.jpg";
import maths12 from "./img/maths12.jpg";
import maths13 from "./img/maths13.jpg";






class Math extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="Content" ref={el => (this.div = el)}>
    <div class="font_changer"><h1>Resources For 12th Students</h1></div>

     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video1/Relation_and_Function">
       <div class="card-image">
         <img src={maths5}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for 12th class Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Relation_and_Function"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Inverse_Trigonometric_Functions">
   <div class="card-image">
     <img src={maths6}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for 12th class Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Inverse_Trigonometric_Functions"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
        <Link to="/video1/Matrix">
  <div class="card-image">
    <img src={maths7}/>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for 12th class Group Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video1/Matrix"><a href="#">Get Started</a></Link>
  </div>
  </Link>
</div>
</div>

<div class="col s12 m5">
   <div class="card">
    <Link to="/video1/Determinants">
<div class="card-image">
<img src={maths8}/>
</div>
<div class="card-content">
<p>This section contains all the free Resources for 12th class Group Students.</p>
</div>
<div class="card-action">
  <Link to="/video1/Determinants"><a href="#">Get Started</a></Link>

</div>
</Link>
</div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video1/Continuity_and_Differentiability">
       <div class="card-image">
         <img src={maths9}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for 12th class Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Continuity_and_Differentiability"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Application_of_Derivative">
   <div class="card-image">
     <img src={maths10}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for 12th class Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Application_of_Derivative"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video1/Integrals">
       <div class="card-image">
         <img src={maths11}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for 12th class Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Integrals"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Applications_of_the_Integrals">
   <div class="card-image">
     <img src={maths12}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for 12th class Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Applications_of_the_Integrals"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video1/Differential_Equations">
       <div class="card-image">
         <img src={maths13}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for 12th class Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Differential_Equations"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Vectors">
   <div class="card-image">
     <img src={maths1}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for 12th class Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Vectors"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video1/Three_dimensional_Geometry">
       <div class="card-image">
         <img src={maths2}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for 12th class Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Three_dimensional_Geometry"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video1/Linear_Programming">
   <div class="card-image">
     <img src={maths3}/>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for 12th class Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video1/Linear_Programming"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
        <div class="card">
        <Link to="/video1/Probability">
       <div class="card-image">
         <img src={maths4}/>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for 12th class Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video1/Probability"><a href="#">Get Started</a></Link>
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

export default Math;
