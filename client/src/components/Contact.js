import React from "react";
import { Slider, Caption, Slide } from "react-materialize";
import Google from "./utils/GoogleMap";
import MetaTags from "react-meta-tags";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Contactez le Salon L'Essentiel, salon de coiffure située à Gradignan
          </title>
          <meta
            name="description"
            content="Trouvez toutes les coordonnées du Salon L'Essentiel située à Gradignan, près de Bordeaux en Gironde et venez nous rendre visite pour vous détendre et vous faire faire une petite coupe de cheveux."
          />
          <meta
            property="og:title"
            content=" Contactez le Salon L'Essentiel, salon de coiffure située à Gradignan"
          />
          <meta
            property="og:image"
            content={
              process.env.PUBLIC_URL + "/images/salon-essentiel--logo-black.png"
            }
          />
        </MetaTags>
        <div style={{ height: "auto !important" }}>
          <Slider style={{ height: "auto !important" }}>
            <Slide
              image={
                <img
                  src={process.env.PUBLIC_URL + "/images/salon-essentiel5.jpeg"}
                  alt="background"
                  className="responsive-img"
                />
              }
            >
              <Caption placement="left">
                <h1>Un salon unique</h1>
                <h5 className="light grey-text text-lighten-3">
                  Originalité, qualité et convivialité
                  <br /> sont au rendez-vous
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <div className="container">
          <h2 className="font-title">Contact</h2>
          <div className="row">
            <div className="col m6 s6 center">
              <i className="fas fa-home"></i>
              <br></br>
              Salon L'Essentiel<br></br>
              98 Cours du Général de Gaulle<br></br>
              33170 Gradignan
            </div>
            <div className="col m6 s6 center">
              <i className="material-icons">phone</i>
              <br></br>
              <a
                style={{ color: "#fff" }}
                href="tel:0556894881"
                className="contact"
              >
                05 56 89 48 81
              </a>
            </div>
          </div>

          <Google />
        </div>
      </div>
    );
  }
}

export default Contact;
