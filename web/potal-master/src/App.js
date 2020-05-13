import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Route} from 'react-router-dom';

import NavBar from "./comp/Navbar";
import Bodyi  from "./comp/body";
import Home  from "./comp/home";
import Res  from "./comp/res";
import Uni  from "./comp/uni";
import Sch  from "./comp/school";
import About  from "./comp/about";
import Video from "./comp/video";
import Video1 from "./comp/gdrive";
import Submit from "./comp/submit";
import SectionD from "./comp/sectiond";
import Tma201 from "./comp/tma201";
import Tcs201 from "./comp/tcs201";
import Upnav from "./comp/upnav";
import Elec from "./comp/electrical";
import Ee from "./comp/ee";
import Dev from "./comp/cbse12";
import Math from "./comp/maths12";
import Mathematics from "./comp/video1";
import Tenth from "./comp/cbse10";
import Math10 from "./comp/maths10";
import Mathematics10 from "./comp/video2";
import Phy12 from "./comp/video3";
import Physics12 from "./comp/physics12";











function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <NavBar/>
    <Upnav/>
    <Route exact path="/"  component={Home} />
    <Route exact path="/resources"  component={Res} />
    <Route exact path="/uni"  component={Uni} />
    <Route exact path="/school"  component={Sch} />
    <Route exact path="/about"  component={About} />
    <Route exact path="/submit"  component={Submit} />
    <Route exact path = "/cbse12" component = {Dev}/>
    <Route exact path = "/maths12" component = {Math}/>
    <Route exact path = "/cbse10" component = {Tenth}/>
    <Route exact path = "/maths10" component = {Math10}/>
    <Route exact path = "/physics12" component = {Physics12}/>

    <Route exact path="/video/:videoName" component={Video}/>
    <Route exact path="/gdrive/:videoName" component={Video1}/>
    <Route exact path="/sectiond" component={SectionD}/>
    <Route exact path="/tma" component={Tma201}/>
    <Route exact path="/tcs" component={Tcs201}/>
    <Route exact path="/Elec" component={Elec}/>
    <Route exact path="/404" component={Ee}/>
    <Route exact path = "/Maths/:videoName" component = {Mathematics}/>
    <Route exact path = "/Maths10/:videoName" component = {Mathematics10}/>
    <Route exact path = "/Physics12/:videoName" component = {Phy12}/>










    </div>
    </BrowserRouter>
  );
}

export default App;
