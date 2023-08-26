import React from "react";
import gridImage from '../../assets/imag2.png'

const Support = () => {
  return (
    <div className="support container flex">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>

        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel Requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi Risk Travel Insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!
              </p>
            </div>

          </div>
          <div className="imgDiv">
            <img src={gridImage} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Support;
