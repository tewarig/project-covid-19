import React,{useState} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


function Mathematics(props) {

  const videoName = props.match.params.videoName
  const courses ={
    Relation_and_Function:[
    {
        title: "Intro",
        vid: "ulKWzeH4dPY"
    },
    {
        title: "Types of Relation",
        vid: "tkM5sK9-WdM"
    }, 
    {
        title: "Reflexive Relation",
        vid: "8p2R4qHr79o"
    }, 
    {
        title: "SYMMETRIC RELATION",
        vid: "rvbUPvxC58Q"
    }, 
    {
        title: "Empty Relation,Universal Relation ",
        vid: "tNNIbyY6Dog"
    }, 
    {
        title: "TYPES OF FUNCTIONS, ONE ONE ,MANY ONE ,ONTO, INTO FUNCTIONS",
        vid: "fek4DCfxQ7M"
    },
    {
        title: "Introduction Of Binary Operations ",
        vid: "jFSwdhHZDvM"
    }, 
    {
        title: "Determine whether the function * defined are binary operations or not",
        vid: "L3Cc_P33E4c"
    }, 
    {
        title: "Show that function is bijective",
        vid: "KpCLqHxPxIE"
    }, 
    {
        title: " Composition Of Functions and Invertible Function",
        vid: "MoYgEbVMo7A"
    }, 
    {
        title: "Show that function f is Invertible",
        vid: "t5iw52NZUg0"
    }, 
    {
        title: "Relations and Functions Class 12 in 1 Shot By Neha Ma'am ",
        vid: "BTCATvvbWmM"
    },
],
Inverse_Trigonometric_Functions: [
    {
        title: "Inverse Trigonometric Functions Class 12 in 1 Shot By Neha ma'am",
        vid: "PxP1wc4sETs"
    },
    {
        title: "Inverse Trigonometric Functions Intro",
        vid: "2RZojAoBTSA"
    },
    {
        title: "Inverse Trigonometric functions, Domain and Range",
        vid: "Fg4LYx1W1Kg"
    },
    {
        title: "Inverse Trigonometric Functions exercise 2.1 ",
        vid: "5WknicFh6gw"
    },
    {
        title: "Inverse Trigonometric functions Exercise 2.2, NCERT EX. 2.2 Part-1",
        vid: "1qNu1XKTmOg"
    },
    {
        title: "Inverse Trigonometric functions || NCERT EX. 2.2 Part-2 ",
        vid: "vcdmjeuEzWo"
    },
    {
        title: "NCERT EX. Misc || Inverse Trigonometric functions ",
        vid: "aZSIBQLoTDg"
    },
    {
        title: "NCERT EX. Misc || Inverse Trigonometric functions ",
        vid: "8iq0KgxSBU0"
    },
],
Matrix: [
    {
        title: "Complete Matrices in 1 Shot with Problems by Neha Ma'am",
        vid: "KI_RMKMhV2Q"
    },
    {
        title: "INTRO",
        vid: "TjX6ic49NG4"
    },
    {
        title: "INTRO 2",
        vid: "TjX6ic49NG4"
    },
    {
        title: "Matrices Exercise 3.1",
        vid: "TjX6ic49NG4"
    },
    {
        title: "Inverse of Matrix by Adjoint",
        vid: "Il6Jri5GgkI"
    },
    {
        title: "solving systems of linear equations by Matrix,matrix solutions",
        vid: "ttYQO_HK3i8"
    },
    {
        title: "Order and Type of Matrices ",
        vid: "Uk3TpOeGm5E"
    },
    {
        title: "NCERT Ex. 3.2",
        vid: "sxmYizZSTR4"
    },
    {
        title: "Transpose of a Matrix ",
        vid: "oEXTz49_AdU"
    },
    {
        title: " Symmetric and Skew Symmetric Matrix ",
        vid: "L2Xb5M0GZBY"
    },
    {
        title: "NCERT Ex. 3.3 Questions",
        vid: "ZufZERpwDwY"
    },
    {
        title: " Matrix Elementary operations",
        vid: "NUcHudLE7O4"
    },
    {
        title: "Inverse of a Matrix",
        vid: "07yE6Qd_EdA"
    },
    {
        title: "Finding Inverse by Elementary operations ",
        vid: "woCTtN5lt7I"
    },
    {
        title: " Finding inverse 3x3 Matrix by elementary operations",
        vid: "hVbFpN2x8Zk"
    },
    {
        title: " Finding Inverse by Column Elementary Operations",
        vid: "wgUlsrKlyZI"
    },
    {
        title: "NCERT Miscellaneous Exercise ",
        vid: "NMglS8Oxess"
    },
],
Determinants: [
    {
        title: "Complete Determinants Chapter with Problems ",
        vid: "q8pIHt2r6DY"
    },
    {
        title: "Determinants, Introduction & How to open a determinant",
        vid: "KJI4crVCRxU"
    },
    {
        title: " Determinants, Properties of a Determinant",
        vid: "QJOnZAupfD4"
    },
    {
        title: " Determinants || Important questions & Ex. 4.2",
        vid: "_RXZoog5lpw"
    },
    {
        title: " Determinants || Ex. 4.2 ",
        vid: "PP7mWaztiMY"
    },
    {
        title: "Determinants exercise 4.2 || Determinants exercise 4.3 ",
        vid: "4a2oIPJo9Wo"
    },
    {
        title: "Minor and Cofactors",
        vid: "3lgwWsOB0RI"
    },
    {
        title: "Adjoint and Inverse of a Matrix",
        vid: "wcG7FYeWzK8"
    },
    {
        title: "Determinants exercise 4.5",
        vid: "RNtGTb_M4I8"
    },
    {
        title: "Solving equations by Matrix Method",
        vid: "U1mE8GIq-Hc"
    },
],
Continuity_and_Differentiability: [{
        title: "Continuity and Differentiability Class 12 in 1 Shot By Neha Ma’am",
        vid: "ZbBtyWRS4fA"
    },
    {
        title: "Concept of Continuity",
        vid: "hooqlXGrCUQ"
    },
    {
        title: "INTRO",
        vid: "3q_By47xbUc"
    },
    {
        title: "Maths Ch 5 Cont. & Differentiability Ex 5.1 hints & soln",
        vid: "jxAGn3-V6NY"
    },
    {
        title: "Continuity & Differentiability Ex 5.2 hints & solutions(Chain Rule)",
        vid: "Qn2KX-6W748"
    },
    {
        title: "Continuity & Differentiability Ex 5.3 hints & solutions (Implicit fn)",
        vid: "ZuObEuxNBXw"
    },
    {
        title: "Ex 5.4 Ch 5 Cont. & Differentiability hints & solutions",
        vid: "u5mGQG5_aOU"
    },
    {
        title: " Ex 5.5 Ch 5 Cont. & Differentiability hints & solutions",
        vid: "2nUkpliZWj8"
    },
    {
        title: " Ex 5.6 Ch 5 Cont. & Differentiability hints & solutions",
        vid: "UTpJrusB9jY"
    },
    {
        title: " Ex 5.7 Ch 5 Cont. & Differentiability hints & solutions",
        vid: "Fp-tz-17_1M"
    },
    {
        title: "Concept of Differentiability",
        vid: "Y_y0L03Hug8"
    },
    {
        title: "Derivatives of Implicit & Inverse trig. Functions",
        vid: "HG0kjudiYss"
    },
    {
        title: "Concepts of Exponential & Logarithmic Fn",
        vid: "Jixjw7nsqxY"
    },
    {
        title: "Concept of Logarithmic Differentiation",
        vid: "yCSi_mYKvl4"
    },
    {
        title: "Derivatives of Functions in Parametric form ",
        vid: "22xaQ1bdYO4"
    },
    {
        title: "Higher order derivatives Higher order derivatives ",
        vid: "__nsvPujKuw"
    },
    {
        title: "Rolle's Theorem & Mean Value Theorem",
        vid: "FZHoNt_uri4"
    },
    {
        title: " Ex 5.8 Ch 5 Continuity & Differentiability hints & solutions",
        vid: "yVD6v9-0voA"
    },
    {
        title: "Ex 5.Misc. (Part 1) Ch 5 Continuity & Differentiability hints & solutions",
        vid: "0JcFJyrk9gY"
    },
    {
        title: "Ex 5.Misc. (Part 2) Ch 5 Continuity & Differentiability hints & solutions",
        vid: "seKyWJWpEk4"
    },
],
Application_of_Derivative:[
    {
        title: "Chap-6.1-Tangent, Normal & Approximation",
        vid: "xhstmve1q3k"
    },
    {
        title: "Chap-6.2- Q on Tangent, Normal & Approx",
        vid: "qe6z6RtLr54"
    },
    {
        title: "Chap-6.3-Rate Measure",
        vid: "xm8mcf3n8mU"
    },
    {
        title: "Chap-6.4-Q on Rate measure & Inc Or dec fns",
        vid: "d_66wcSKydk"
    },
    {
        title: "Application of Derivatives, Maxima & Minima, ",
        vid: "aZa9JJ6WpCI"
    },
    {
        title: "Chap- 6.6-Questions on Maxima & Minima",
        vid: "o8T_sJAUTYo"
    },
    {
        title: "Application of Derivatives Class 12 in 1 Shot By Neha Ma’am",
        vid: "Q_c7-SGxX38"
    },
],
Integrals: [
    {
        title: "Indefinite Integration Class 12 in 1 Shot By Neha Ma’am ",
        vid: "vfay9De9X8U"
    },
    {
        title: "Definite Integration Class 12 in 1 Shot By Neha Ma’am",
        vid: "uQ4ELRtJkn4"
    },
    {
        title: "Chap-7.1 | Method of Inspection | Integration ",
        vid: "GgAcGZx7QqM"
    },
    {
        title: "Chap-7.2-Method Of Substitution-Indefinite Integration",
        vid: "UnwJwjs5wXU"
    },
    {
        title: "Chap-7.3- NCERT EX- 7.2- Substitution Method -Integration indefinite",
        vid: "I_xXakLAuvA"
    },
    {
        title: "Chap-7.4- EX. 7.3-Method Of Substitution -Integration Indefinite",
        vid: "bOZRzmvTFaU"
    },
    {
        title: "Chap-7.5-Some Special Types of Integration",
        vid: "kjgMkqE7ZjQ"
    },
    {
        title: "Chap-7.6-Ex. 7.4- Integration Indefinite",
        vid: "TO7uCBSrvxU"
    },
    {
        title: " Chap-7.7 | Integration by Partial Fractions | Integration",
        vid: "pn8C4cMYkjA"
    },
    {
        title: "Chap-7.8- Ex 7.5- NCERT based on Partial fractions",
        vid: "Wqjyxm2CcQY"
    },
    {
        title: "Chap-7.9- Integration By Parts",
        vid: "PP0PheJLJZQ"
    },
    {
        title: "Chap-7.10- Special forms of Indefinite Integration",
        vid: "9IzaSoOeDFc"
    },
    {
        title: "Chap-7.11- NCERT Important Miscellaneous",
        vid: "b3MMm6gDIPc"
    },
    {
        title: "Chap-7.1(D.I)-Definite Integration as a limit of a Sum-Definite Integration",
        vid: "ioF-nsfzm7E"
    },
    {
        title: "Chap-7.2(D.I)- Fundamental Theorem of Calculus-Definite Integration",
        vid: "nELonNjtHrE"
    },
    {
        title: "Chap-7.3(D.I)- Definite Integration By Substitution Ex 7.10- Definite Integration",
        vid: "NIutit_Hg4Y"
    },
    {
        title: " Chap-7.4- Important Properties of Definite Integration - Definite Integration",
        vid: "nSMBWv0Pzgc"
    },
    {
        title: " Chap-7.5- NCERT Ex. 7.11 Solved- Definite Integration",
        vid: "w43JEItb6Lk"
    },
    {
        title: "Chap-7.6-( D.I )- EX. Miscellaneous - Definite integration",
        vid: "XUAvhjs0UfE"
    },
],
Applications_of_the_Integrals: [
    {
        title: "Application of Integrals Class 12 in 1 Shot By Neha Ma'am ",
        vid: "AO5xftAnGys"
    },
    {
        title: "Chap-8.1- Finding area- Application of Integrals",
        vid: "FItudA16RiA"
    },
    {
        title: "Chap-8.2 Ex-8.1 & 8.2 Solved, Area between Curves, Application of Integrals",
        vid: "Ckb6G51XehU"
    },
    {
        title: "Chap-8.3- Miscellaneous Ex.- Application of Integrals",
        vid: "T6RA-lRz_X0"
    },
],
Vectors: [
    {
        title: "Vectors Class 12 in 1 Shot By Neha Ma'am",
        vid: "6tWBkjlQ5CY"
    },
    {
        title: "Chap-10.1-Direction Cosines & Ratios",
        vid: "kwwPI1X-5Ec"
    },
    {
        title: "Chap-10.2-Components of Vector Ex 10.2",
        vid: "E9yQrDGADJw"
    },
    {
        title: "Chap-10.3- Scalar dot Product of Vectors",
        vid: "z8QbD8tcHqU"
    },
    {
        title: "Chap-10.4-Vector Cross Product",
        vid: "NiWWiXpG5V4"
    },
    {
        title: "Chap-10.5-Ex 10.4 & Examples",
        vid: "e0fkTYveTDk"
    },
    {
        title: "Chap-10.6-Miscellaneous ",
        vid: "qR64pElmeRk"
    },
    {
        title: "| Scalar Triple Product | STP | Vectors |",
        vid: "Vw126r74i4s"
    },
],
Three_dimensional_Geometry: [
    {
        title: "3D Geometry Class 12 in 1 Shot By Neha Ma'am",
        vid: "QfwO_vHHyfg"
    },
    {
        title: " Chap-11.1 Direction Cosines & Direction ratios of a line",
        vid: "1JJR2bLFcEM"
    },
    {
        title: "Chap-11.2 Straight Line in a space/3D ",
        vid: "kW8lVdEEcrM"
    },
    {
        title: "Chap-11.3 Finding Intersection of Two Straight Line",
        vid: "vax6Nhsep4w"
    },
    {
        title: "Chap-11.4 | Shortest Distance b/w two skew lines",
        vid: "uIhzAsxqtUE"
    },
    {
        title: "Chap-11.5 | Line in 3D | Exercise 11.2 | Solved ",
        vid: "brh_7oHiAJM"
    },
    {
        title: "Chap-11.6 | Plane in 3D | Plane | Plane 3D ",
        vid: "ni4QEUZTKNw"
    },
    {
        title: " Chap-11.7 | Plane | 3D Plane |",
        vid: "hY93hA6X0lg"
    },
    {
        title: "Chap-11.8 | Plane | Plane passing through 3 Non Collinear points",
        vid: "2CrfZBZvqIc"
    },
    {
        title: "Chap-11.9 | Plane | Plane intercept form of a plane ",
        vid: "71zhi_OLM7E"
    },
    {
        title: " Chap-11.10 | Intersection of Two Planes | Angle between two planes ",
        vid: "i_WfsUrBKJo"
    },
    {
        title: "Chap-11.11 | Angle Between a line & a Plane",
        vid: "YBavSd1Ildc"
    },
    {
        title: "Chap-11.12 | Miscellaneous Ex. Solved",
        vid: "6zSvR1IOeKc"
    },
],
Differential_Equations: [
    {
        title: "Differential Equations Class 12 in 1 Shot with Tricks By Neha Mam",
        vid: "lOoROg1gMGQ"
    },
    {
        title: "Chap-9.1 | Order & Degree of Differential Equations ",
        vid: "jUZ8rV74UQw"
    },
    {
        title: " Chap-9.2 | General & Particular Solution ",
        vid: "_JWjytj4I9g"
    },
    {
        title: "Chap-9.3 | Variable Separable | Differential Equations ",
        vid: "P6nDmvueCUA"
    },
    {
        title: "Chap-9.4- Ex 9.4 Imp. Questions",
        vid: "ivFh4-d3_jo"
    },
    {
        title: "Chap-9.6-Linear Differential Equation of order One",
        vid: "f_aYCN7fYBU"
    },
    {
        title: "Chap-9.7-Miscellaneous Exercise- Differential Equations",
        vid: "vLP8t98QzlE"
    },
],
Linear_Programming: [
    {
        title: "Linear Programming Class 12 in 1 Shot By Neha Ma'am ",
        vid: "SahH5zZFasg"
    },
    {
        title: "Linear Programming Problem",
        vid: "HLdKQDR2Vo8"
    },
    {
        title: " Chap-12.2 | Ex. 12.1 and Ex 12.2",
        vid: "Qwmgx_5zopE"
    },
    {
        title: "Chap 12.3, Exercise, LPP",
        vid: "lFs1l63hwKI"
    },
],
Probability: [
    {
        title: "Probability Exercise 13.1",
        vid: "vQamWiE4VRk"
    },
    {
        title: "Chap-13.2 | Multiplication Theorem of Probability",
        vid: "jCeYgifZO80"
    },
    {
        title: "Chap-13.3 | Independent Events",
        vid: "6bVhFSxw7sk"
    }, 
    {
        title: "Chap-13.4 | Some more facts | Independent events",
        vid: "fRA4izexmws"
    },
    {
        title: "Chap-13.5 Ex. 13.2 Solved | NCERT Exercise Solved",
        vid: "MCgWdoojWd4"
    }, 
    {
        title: "Chap-13.6 | Law of Total Probability ",
        vid: "h9EsPGgr5c4"
    }, 
    {
        title: "Bayes Theorem",
        vid: "9E3yR4iyIEU"
    },
     {
        title: "Probability, Bayes' Theorem, NCERT Exercise 13.3",
        vid: "7s9L7VGBLvk"
    },
    {
        title: "Chap-13.9 | Random Variable | Probability Distribution |",
        vid: "c3TKP6fZDtM"
    },
    {
        title: "Chap-13.10, Mean, Variance & Standard Deviation of Probability Distribution",
        vid: "owx7ElU8PtA"
    },
    {
        title: "Chap-13.11 | Ex. 13.4 | NCERT EX. 13.4 solved",
        vid: "vMTLa7doxgo"
    },
    {
        title: "Chap-13.12 | Bernoulli Trials | Binomial Distribution",
        vid: "Aw5EVC6hpTI"
    },
    {
        title: "Chap-13.13 | Ex. 13.5 | NCERT Ex. 13.5 ",
        vid: "EeCvnizFF7A"
    },
    {
        title: "Chap-13.14 | Ex. Miscellaneous",
        vid: "3S3e2RlgYRg"
    },
    {
        title: "Cha--13.15 | Miscellaneous Ex. Part-2 ",
        vid: "QCGgra6eDhg"
    },
    {
        title: "Chap-13.16 | Ex. Miscellaneous ",
        vid: "GoVxV1Esins"
    },
    {
        title: "Probability Class 12 in 1 Shot By Neha Ma'am",
        vid: "YwdFvjqmBRM"
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
  <iframe width="40%" height="25%" src={"//www.youtube.com/embed/"+ vid +"?rel=0"} allowFullScreen="allowFullScreen" and frameBorder="0" ></iframe>
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

export default Mathematics;
