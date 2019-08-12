import React from "react";
import { Slider, Caption, Slide } from "react-materialize";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <Slider>
          <Slide image={ <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel.jpg"}
                alt="background"
              />
          }>
            <Caption>
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={ <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel2.jpg"}
                alt="background"
              />
          }>
            <Caption placement="left">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
          <Slide image={ <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel3.jpg"}
                alt="background"
              />
          }>
            <Caption placement="right">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">
                Here's our small slogan.
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>
    );
  }
}

export default Banner;
