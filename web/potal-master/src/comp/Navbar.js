import React , {Component}from 'react';
import ReactDOM from "react-dom";
import {theme} from "./script.js"
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
  componentDidMount() {
    theme();
  }
  render(){
  return (
    <div className="App" ref={el => (this.div = el)}>
    <nav class="navb0r">
      <ul class="navb0r-nav">
        <li class="log0">
          <a href="/sch" class="na4-link">
            <span class="link4txt log0-text">ResourceFul</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        <li class="nav4item">
          <Link to ="/" class="na4-link">
          <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"/></svg>


            <span class="link4txt">Home</span>
          </Link>
        </li>

        <li class="nav4item">
          <Link to="/submit" class="na4-link">
          <svg  viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 1600q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-764q0-189-167-189-26 0-56 5-16-30-52.5-47.5t-73.5-17.5-69 18q-50-53-119-53-25 0-55.5 10t-47.5 25v-331q0-52-38-90t-90-38q-51 0-89.5 39t-38.5 89v576q-20 0-48.5-15t-55-33-68-33-84.5-15q-67 0-97.5 44.5t-30.5 115.5q0 24 139 90 44 24 65 37 64 40 145 112 81 71 106 101 57 69 57 140v32h640v-32q0-72 32-167t64-193.5 32-179.5zm128-5q0 133-69 322-59 164-59 223v288q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5v-288q0-10-4.5-21.5t-14-23.5-18-22.5-22.5-24-21.5-20.5-21.5-19-17-14q-74-65-129-100-21-13-62-33t-72-37-63-40.5-49.5-55-17.5-69.5q0-125 67-206.5t189-81.5q68 0 128 22v-374q0-104 76-180t179-76q105 0 181 75.5t76 180.5v169q62 4 119 37 21-3 43-3 101 0 178 60 139-1 219.5 85t80.5 227z"/></svg>

            <span class="link4txt">Submit Resources</span>
          </Link>
        </li>

        <li class="nav4item">
          <Link to="/resources" class="na4-link">
          <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M896 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0 768q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-384q237 0 443-43t325-127v170q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-170q119 84 325 127t443 43zm0-1152q208 0 385 34.5t280 93.5 103 128v128q0 69-103 128t-280 93.5-385 34.5-385-34.5-280-93.5-103-128v-128q0-69 103-128t280-93.5 385-34.5z"/></svg>

            <span class="link4txt">Resources</span>
          </Link>
        </li>

        <li class="nav4item">
          <Link to="/about" class="na4-link">
          <svg  viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg"><path d="M657 896q-162 5-265 128h-134q-82 0-138-40.5t-56-118.5q0-353 124-353 6 0 43.5 21t97.5 42.5 119 21.5q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-1024-1277q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm704 384q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"/></svg>

            <span class="link4txt">About Us</span>
          </Link>
        </li>

        <li class="nav4item mobi" id="themeButton">
          <a href="#" class="na4-link">
            <svg
              class="theme-icon"
              id="lightIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="moon-stars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>

          </a>
        </li>
      </ul>
    </nav>

    </div>
  );
}
}

export default NavBar;
