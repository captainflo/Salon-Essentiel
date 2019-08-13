import React from "react";
import { Slider, Caption, Slide } from "react-materialize";

class Banner extends React.Component {
  render() {
    return (
      <div style={{ height: "auto !important" }}>
        <Slider style={{ height: "auto !important" }}>
          <Slide
            image={
              <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel.jpg"}
                alt="background"
                className="responsive-img"
              />
            }
          >
            <Caption placement="right">
              <h4>Un salon unique</h4>
              <h5 className="light grey-text text-lighten-3">
                Précision, qualité et convivialité<br /> sont au rendez-vous
              </h5>
            </Caption>
          </Slide>
          <Slide
            image={
              <img
                src={process.env.PUBLIC_URL + "/images/salon2.jpg"}
                alt="background"
                className="responsive-img"
              />
            }
          >
            <Caption placement="left">
              <h4>Envie de changement ?</h4>
              <h5 className="light grey-text text-lighten-3">
                Nos coiffeurs se feront un plaisir d'échanger<br />
                et vous conseiller !
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>
    );
  }
}

export default Banner;
