import React, { Component } from "react";
import * as images from "./images";
import "./App.css";
import imageCards from "./data"

import ImageGallery from "./ImageGallery"

class App extends Component {
  render() {
    return (
      <div id="App">
      <div id="wrapper">
        <header id="header">
          <span className="avatar">
            <img src={images.avatar} alt="" />
          </span>
          
          <h1>
            <p id="arb"> عبدالله </p>
          </h1>
          <h1>
            A Simple programmer <br />
            that tries to complicate things. oh my.
          </h1>

          <br />

          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">More Info</div>
          </div>

          <ul className="icons">  
            <li>
              <a href="https://twitter.com/premptive" className="icon style2 fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>

            <li>
              <a
                href="mailto:abdullah@tuwaiq.com"
                className="icon style2 fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/pre1"
                className="icon style2 fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>

          </ul>
          <p id="bio">
            CS grad from JUC. worked on couble of projects most of them on IOS.
            Things I like: Coffee, Coffee and playing video games (I don't have
            time for the last one though). I'm starting to learn Go, the board
            game not the languge (both of them are interesting).
          </p>
        </header>

        <section id="main">
          <ImageGallery imageCards = {imageCards}/>
        </section>

        <footer id="footer">
          <p>
            Abdullah &copy;. All rights reserved. Design:{" "}
            <a href="http://templated.co">TEMPLATED</a>.
          </p>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;