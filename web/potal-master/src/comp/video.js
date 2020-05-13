import React,{useState} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


function Video(props) {

  const videoName = props.match.params.videoName
  const courses ={
    PewDiePie:[
      {title:"video1",vid:"PUe-BLqeFwk"},
        {title:"video2",vid:"efXTz0h7ov4"},
          {title:"video3",vid:"efXTz0h7ov4"}
    ],
    course1:[
      {title:"title1",vid:"efXTz0h7ov4"},
        {title:"title2",vid:"efXTz0h7ov4"},
          {title:"title3",vid:"efXTz0h7ov4"}
    ],
  "Fourier Series By Dr Abhinav Goel Sir":[
    {title:"Fourier Series A Basic Phenomena",vid:"gMIBE9S143Q"},
    {title:"Euler's Formula, Dirichlet's Condition : Part-1",vid:"K9MWEGqGNAM"},
    {title:"Euler's Formula, Dirichlet's Condition with Example: Part-2",vid:"YqCJXpn4ulg"},
    {title:"Even & Odd Function: Problems with Deduction",vid:"56gDFIyjHKU"},
    {title:"Fourier series for Discontinued functions",vid:"EzZE0fSSOl8"},
   {title:"Half Range Series",vid:"7diNA6_ElhI"},
   {title:"Function having arbitrary limit",vid:"whL3rcj7gkY"}]
,
  "Partial Differential Equation By Dr Abhinav Goel Sir" :[
    {title:"Method of separable of Variable",vid:"LsX4im5UTYM"},
    {title:"Classification of Partial Differential Equations",vid:"rW2os2q4dho"},
    {title:"Linear Homogeneous Partial Differential Equation: Method to find Particular Integral Part:-1",vid:"CiMlANbQj5Y"},
    {title:"Linear Homogeneous Partial Differential Equation: Method to find Particular Integral Part:-2",vid:"Gdv19TcpM0s"},
    {title:"Linear Homogeneous Partial Differential Equation: Method to find Particular Integral Part:-3",vid:"Vu9QL7vDsAc"},
    {title:"Linear Homogeneous Partial Differential Equation: Particular Integral ",vid:"5OT68ZhyfxA"},
    {title:"Homogeneous Partial Differential Equation with Constant Coefficient: Particular Integral:Lecture-2.1",vid:"kSwEN336QEA"},
    {title:"Application of P D E : Solution of One Dimensional Wave Equation by Method of Separable of Variable Part-1",vid:"J24_Ay8XW78"},
    {title:"Linear Ho. Partial Differential Equation: Method to find Particular Integral: Miscellaneous Problems",vid:"lGtTbWybjMY"},
    {title:"Application of Partial Differential Equation: Variable Separable Method: 1-D Wave Equation: Part-2",vid:"l6PUaJbIucA"},
  ],
  "Laplace Transform By Dr Abhinav Goel Sir": [
    {title:"First Shifting Theorem, Multiplication with t, Initial & Final Valued Theorem",vid:"kthWd_6JOcw"},
    {title:"Laplace Transform: Division by t and mixed problem", vid:"A1Xn5a2t_iM"},
    {title:"Unit step function & Second Shifting Theorem",vid:"M7yGsyJ6_5U"}
  ],
  "TPH201 By Dr Deepak Sir":[
    {title:"L-1 Introduction to Quantum mechanics",vid:"b0IXz4lxOBc"},
     {title:"L-2 de Broglie Hypothesis and Heisenberg Uncertainty Principle",vid:"h_zXEWl0phI"},
     {title:"L-3 Wave function and Schrodinger Equations",vid:"DQWfh9WQAkQ"},
     {title:"L-4 Particle in 1 D box",vid:"No6IBm38NI4"}
  ]
 }
    const[vid,uid]= useState(courses[videoName][0].vid);
    const[title,utit]= useState(courses[videoName][0].title);

    const renderVideo = () =>{
      return(
        <div>
        <h3>{title}</h3>
        <div class="video-container">
        

  <iframe width="40%" height="25%" src={"//www.youtube.com/embed/"+ vid +"?rel=0"} allowFullScreen="allowFullScreen" and frameBorder="0" ></iframe>

</div>
</div>
)
    }


  return (
    <div className="Content">
     <div class="row">

   <h3>  {videoName} </h3>
   <div class="col s12 m7">

   {renderVideo()}
   </div>
   <div class="col s12 m5">

   <div className="collection">
     {courses[videoName].map(item=>{
       return      <a href="#!" className="collection-item" onClick={()=>{
         uid(item.vid)
         utit(item.title)
       }}>{item.title}</a>

     })}
     </div>
     <br/>
     <br/>
     <br/>
   </div>

    </div>
    </div>
  );
}

export default Video;
