import React from 'react'
import "./intro.css"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Kadin Pegram</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">2022 College Grad</div>
              <div className="i-title-item">Software Developer in Test</div>
              <div className="i-title-item">Gamer</div>
              <div className="i-title-item">Skateboarder</div>
              <div className="i-title-item">Snowboarder</div>
              <div className="i-title-item">Beatmaker</div>
            </div>
          </div>
          <p className="i-desc">
            I recieved my bachelor's degree in Computer Science
            graduating from Towson University in May 2022. I'm
            currently working as a Software Developer in Test
            for General Motors.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="https://www.pngkey.com/png/full/313-3134378_snowboarder-snowboarder-png.png" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;