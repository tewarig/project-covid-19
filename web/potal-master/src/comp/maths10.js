import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js";
import Phy from "./img/phy.jpg";
import Chem from "./img/Chemistry.jpg";
import For from "./img/4th.jpg";
import The3 from "./img/3rd.jpg";
import {Link} from 'react-router-dom';






class Math10 extends React.Component {
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
            <Link to="/video2/Real_Number">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Real Number</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video2/Real_Number"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video2/Polynomials">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Polynomials</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video2/Polynomials"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
<div class="row">
 <div class="col s12 m5">
       <div class="card">
        <Link to="/video2/Pair_of_Linear_Equations_in_Two_Variables">
  <div class="card-image">
    <img src={The3}/>
    <span class="card-title">Pair of Linear Equations in Two Variables</span>
  </div>
  <div class="card-content">
    <p>This section contains all the free Resources for 3rd Semester Students.</p>
  </div>
  <div class="card-action">
     <Link to="/video2/Pair_of_Linear_Equations_in_Two_Variables"><a href="#">Get Started</a></Link>
  </div>
  </Link>
</div>
</div>

<div class="col s12 m5">
   <div class="card">
    <Link to="/video2/Quadratic_Equations">
<div class="card-image">
<img src={For}/>
<span class="card-title">Quadratic Equations</span>
</div>
<div class="card-content">
<p>This section contains all the free Resources for 4th Semester Students.</p>
</div>
<div class="card-action">
  <Link to="/video2/Quadratic_Equations"><a href="#">Get Started</a></Link>

</div>
</Link>
</div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video2/Arithmatic_Progression">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Arithmatic Progression</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video2/Arithmatic_Progression"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video2/Triangles">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Triangles</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video2/Triangles"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video2/Coordinate_Geometry">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Coordinate Geometry</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video2/Coordinate_Geometry"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video2/Introduction_to_Trigonometry">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title"> Introduction_to_Trigonometry</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video2/Introduction_to_Trigonometry"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
             <Link to="/video2/Application_of_Trigonometry">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Application of Trigonometry</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video2/Application_of_Trigonometry"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video2/Circles">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Circles</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video2/Circles"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
            <div class="card">
            <Link to="/video2/Constructions">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Constructions</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video2/Constructions"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>

  <div class="col s12 m5">
        <div class="card">
         <Link to="/video2/Area_Related_to_Circles">
   <div class="card-image">
     <img src={Chem}/>
     <span class="card-title">Area Related to Circles</span>
   </div>
   <div class="card-content">
   <p>This section contains all the free Resources for Chemistry Group Students.</p>
   </div>
   <div class="card-action">
      <Link to="/video2/Area_Related_to_Circles"><a href="#">Get Started</a></Link>
   </div>
   </Link>
 </div>
</div>

</div>
     <div class="row">
      <div class="col s12 m5">
        <div class="card">
        <Link to="/video2/Surface_Areas_and_Volumes">
       <div class="card-image">
         <img src={Phy}/>
         <span class="card-title">Surface Areas and Volumes</span>
       </div>
       <div class="card-content">
         <p>This section contains all the free Resources for Physcis Group Students.</p>
       </div>
       <div class="card-action">
          <Link to="/video2/Surface_Areas_and_Volumes"><a href="#">Get Started</a></Link>
       </div>
       </Link>
     </div>
   </div>
   </div>
   <div class="row">
    <div class="col s12 m5">
          <div class="card">
           <Link to="/video2/Statistics">
     <div class="card-image">
       <img src={Phy}/>
       <span class="card-title">Statistics</span>
     </div>
     <div class="card-content">
       <p>This section contains all the free Resources for Physcis Group Students.</p>
     </div>
     <div class="card-action">
        <Link to="/video2/Statistics"><a href="#">Get Started</a></Link>
     </div>
     </Link>
   </div>
 </div>

<div class="col s12 m5">
      <div class="card">
       <Link to="/video2/Probability">
 <div class="card-image">
   <img src={Chem}/>
   <span class="card-title">Probability</span>
 </div>
 <div class="card-content">
 <p>This section contains all the free Resources for Chemistry Group Students.</p>
 </div>
 <div class="card-action">
    <Link to="/video2/Probability"><a href="#">Get Started</a></Link>
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

export default Math10;
