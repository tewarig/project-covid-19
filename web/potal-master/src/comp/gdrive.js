import React,{useState} from 'react';
import {BrowserRouter ,Route} from 'react-router-dom';


function Video1(props) {

  const videoName = props.match.params.videoName
  const courses ={
    "Structures":[
      {title:"Leacture 1",vid:"//drive.google.com/file/d/1r9U_wXNOyVzhXNJ2qx8vcxpV0K0a4-98/preview"},
      {title:"Leacture 2",vid:"//drive.google.com/file/d/1SKoCei7miCRTM1xgm0emJJ2jj9GDjVFQ/preview"}
    ],
    "File Handling":[
      {title:"Leacture 1",vid:"//drive.google.com/file/d/1USk8H_qD0EA8um8N2kYhiLLddH9F7H-y/preview"},
      {title:"Leacture 2",vid:"//drive.google.com/file/d/1kyygDh-tefSf0AlPUK08wWHUErbY-ddd/preview"},
      {title:"Leacture 4",vid:"//drive.google.com/file/d/1Ql5KGv-YGxfYxYY8M8XVL7tX15AHIDlJ/preview"},
      {title:"Leacture 5",vid:"//drive.google.com/file/d/1F_Sch1gLyDMvdtyy1od2lxRMtaz-GExO/preview"},
      {title:"Leacture 6",vid:"//drive.google.com/file/d/1XGwbzKKyie_aU5NHnhM7W0TfxlI7jUsG/preview"}
    ]
    }
    const[vid,uid]= useState(courses[videoName][0].vid);
    const[title,utit]= useState(courses[videoName][0].title);

    const renderVideo = () =>{
      return(
        <>
        <h1>{title}</h1>
        <div class="video-container">
  <iframe width="40%" height="25%" src={vid} frameBorder="0" allowFullScreen="allowFullScreen" and frameBorder="0"></iframe>
</div>
</>
)
    }


  return (
    <div className="Content">
    <div class="row">
   <h1>  {videoName} </h1>
   <div class="col s12 m7">
   {renderVideo()}
   </div>
   <div class="col s12 m3">
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

export default Video1;
