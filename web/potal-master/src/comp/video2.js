import React,{useState} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


function Mathematics10(props) {

  const videoName = props.match.params.videoName
  const courses ={
    Real_Number:[
    {
        title: "Real no., Decimal,Fraction",
        vid: "XDMHAjJ80_w"
    },
    {
        title: "Rational And Irrational no.",
        vid: "ouQ-ls2VyII"
    },
    {
        title: "Real Number",
        vid: "z2heYbJfZnY"
    },

],
 Polynomials: [
    {
        title: "Degree of Polynomial",
        vid: "gdld5IGtZJI"
    },
    {
        title: "Types of Polynomials",
        vid: "hFf2UvjEbcc"
    },
    {
        title: "Exercise and Numerical",
        vid: "xYnDN39PsCk"
    },
    {
        title: "Covered all topic and solution of NCERT ex-2.1 and 2.2 solution",
        vid: "a2_TJkXpTXU"
    },
    {
        title: "Covered all topic",
        vid: "SeejizAqSlY"
    },
    {
        title: "Covered all topic ",
        vid: "3Rc6oSylxVg"
    },
],
Pair_of_Linear_Equations_in_Two_Variables: [
    {
        title: "Intro to Linear Equation",
        vid: "kmkpgyCp4fE"
    },
    {
        title: "Graph of Linear Equation",
        vid: "uZhnreMYKkw"
    },
    {
        title: "Covered all topic",
        vid: "Wh_69w5Q3zw"
    },
],
Quadratic_Equations: [
    {
        title: "Intro to Quadratic Equation",
        vid: "jquqYPvU-vM"
    },
    {
        title: "Nature of Roots",
        vid: "PCDNucUXgvQ"
    },
    {
        title: "Intro to Quadratic Equation",
        vid: "Mc34-LkuwJA"
    },
    {
        title: " Important questions for boards",
        vid: "vq2B2HW5WtA"
    },

],
Arithmatic_Progression: [
    {
        title: "Intro to AP",
        vid: "5yClnVhGEXc"
    },
    {
        title: "Finding middle term of a series",
        vid: "VicdpR4Lgt4"
    },
    {
        title: "Find sum upto nth term",
        vid: "B4cW81kLOdw"
    },
    {
        title: "Intro of AP and few important question",
        vid: "X4J5r0Fcxeg"
    },
    {
        title: "Important questions for boards",
        vid: "nQpwpgZvagg"
    },
],
Triangles:[
    {
        title: "Intro ",
        vid: "y6qqk7ytnEQ"
    },
    {
        title: "Derivation of theorm and similarity of triangle",
        vid: "-UZBAfLhfF8"
    },
    {
        title: "Important Questions",
        vid: "Ktw8WkXTeJs"
    },
    {
        title: "Important Questions 2 ",
        vid: "1IwwgeL4R4A"
    },
],
Coordinate_Geometry: [
    {
        title: "Area of triangle ",
        vid: "Kb6OO5xgw_Y"
    },
    {
        title: "Whole chapter explained with important question",
        vid: "hwb88XSUSdc"
    },
],
 Introduction_to_Trigonometry: [
    {
        title: "PART-1 ",
        vid: "STy4v3OzQkM"
    },
    {
        title: "PART-2",
        vid: "4UO79KWFZ0M"
    },
],
Application_of_Trigonometry: [
    {
        title: "Some application question-double evaluation question",
        vid: "AvPqaPsgqg0"
    },
    {
        title: "Some application question",
        vid: "QTGEIgT4deM"
    },
    {
        title: "Some application question",
        vid: "yOWeMNrG_Xw"
    },
    {
        title: "Angle of elevation and depression",
        vid: "6Xlv1i1-ZJs"
    },
],
Circles: [
    {
        title: "Intro and important questions",
        vid: "UcrVp7Ry7Fo"
    },
    {
        title: "Theorem 1",
        vid: "t53qUaCSKDU"
    },
    {
        title: "Theorem 2 ",
        vid: "4BwCE1PcCZQ"
    },
    {
        title: "Theorem 3",
        vid: "eVRlUWY1tz8"
    },
],
Constructions: [
    {
        title: "Construction - 1 ",
        vid: "VoDmtZdSLCg"
    },
    {
        title: "Construction - 2",
        vid: "aj1DVtLAemI"
    },
    {
        title: " Construction - 3.1 ",
        vid: "YDm7xkWSgpA"
    },
    {
        title: "Construction - 3.2",
        vid: "l9QheYALrn0"
    },
    {
        title: "Construction - 4",
        vid: "NLelxrbFyAk"
    },
    {
        title: "Construction of tangent to a circle ",
        vid: "sUA1h333vn4"
    },
    {
        title: "Construction of tangent to a circle(exercise)",
        vid: "1HgLfImMKCc"
    },
],
Area_Related_to_Circles: [
    {
        title: "Intro",
        vid: "SrHgIjuOkMA"
    },
    {
        title: "Rotation of wheel and revolution",
        vid: "1LfOktt2EXo"
    },
    {
        title: "Formula and Concept",
        vid: "lj08aOEzf44"
    },
],
Surface_Areas_and_Volumes: [
    {
        title: "Part 1",
        vid: "OCAskD6upPg"
    },
    {
        title: "Part 2",
        vid: "KJA8_wt0ZQ8"
    },
],
Statistics: [
    {
        title: "Intro",
        vid: "K6p8O_KTaPY"
    },
    {
        title: "Mean",
        vid: "_CQNfODSGyI"
    },
    {
        title: "Mean of grouped data",
        vid: "8znAdlVoexs"
    },
    {
        title: "Cumulative frequency",
        vid: "bQjKbfwfBfY"
    },
    {
        title: "Application of cumulative frequency ",
        vid: "eZvEM0RA5fo"
    },
    {
        title: "Median of ungrouped data",
        vid: "2JfV5FXT1uA"
    },
    {
        title: "Median-numerical",
        vid: "WBEYvVyKj78"
    },
],
Probability: [
    {
        title: "Concept and Important numerical ",
        vid: "uRhb6btmisg"
    },
    {
        title: "Intro to the chapter",
        vid: "_l5kyeL7Vzw"
    },
    {
        title: "Introduction and few examples",
        vid: "ldipJjmLbA8"
    },
    {
        title: "Theoretical probability and Expermental probability",
        vid: "yzAjuzAoEkY"
    },
],


}
    const[vid,uid]= useState(courses[videoName][0].vid);
    const[title,utit]= useState(courses[videoName][0].title);

    const renderVideo = () =>{
      return(
        <>
        <h3>{title}</h3>
        <div class="video-container">
  <iframe width="40%" height="25%" src={"//www.youtube.com/embed/"+ vid +"?rel=0"} frameBorder="0" allowfullscreen></iframe>
</div>
</>
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

export default Mathematics10;
