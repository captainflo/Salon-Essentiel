import React from "react";
import Banner from "./utils/Banner";
import Carousel from "./utils/Carousel";
import MetaTags from "react-meta-tags";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // Collapse
    const elemcol = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elemcol, {});
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>Salon de coiffure à Gradignan : Coiffeur l'essentiel</title>
          <meta
            name="description"
            content="Coiffeur Gradignan vous invite à vous détendre et à échangez entre amis. Salon de coiffure à Gradignan pour une coupe de cheveux professionnelle."
          />
          <meta
            name="keywords"
            content="coiffure gradignan, coiffeur gradignan"
          ></meta>
          <meta
            property="og:title"
            content="Salon de coiffure à Gradignan : Coiffeur l'essentiel"
          />
          <meta
            property="og:image"
            content={
              process.env.PUBLIC_URL + "/images/salon-essentiel--logo-black.png"
            }
          />
        </MetaTags>
        <Banner />
        <Carousel />
        <div>
          <h2
            className="center"
            style={{
              marginBottom: "40px",
              marginTop: "65px"
            }}
          >
            Salon de coiffure proche de chez vous
          </h2>
          <div className="row center">
            <div className="col m6">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="fas fa-cut"></i> Salon
                  </div>
                  <div className="collapsible-body">
                    <ul>
                      <div className="box-coiffeur">
                        <Link to="/salon-cestas" className="btn-coiffure btn">
                          <i className="fas fa-cut"></i> Cestas
                        </Link>
                        <Link to="/salon-canejan" className="btn-coiffure btn">
                          <i className="fas fa-cut"></i> Canejan
                        </Link>
                        <Link to="/salon-leognan" className="btn-coiffure btn">
                          <i className="fas fa-cut"></i> Léognan
                        </Link>
                        <Link to="/salon-pessac" className="btn-coiffure btn">
                          <i className="fas fa-cut"></i> Pessac
                        </Link>
                        <Link
                          to="/salon-villenave"
                          className="btn-coiffure btn"
                        >
                          <i className="fas fa-cut"></i> Villenave d'ornon
                        </Link>
                        <Link to="/salon-begles" className="btn-coiffure btn">
                          <i className="fas fa-cut"></i> Begles
                        </Link>
                        <Link to="/salon-talence" className="btn-coiffure btn">
                          <i className="fas fa-cut"></i> Talence
                        </Link>
                      </div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col m6">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">filter_drama</i>En savoir +
                  </div>
                  <div className="collapsible-body">
                    <h1>Salon de coiffure à Gradignan</h1>
                    <h2 style={{ fontSize: "30px" }}>Coiffeur à Gradignan</h2>
                    <h2 style={{ fontSize: "25px" }}>Présentation</h2>
                    <p>
                      L'équipe du Salon L'Essentiel à Gradignan, réalise toutes
                      vos envies en matières de coiffures ! Vous hésitez pour un
                      changement radical ? Nous prenons le temps d'échanger sur
                      vos goûts et vous conseillons par rapport à la forme de
                      votre visage. Vous souhaitez rafraichir votre coupe ou
                      votre couleur tout en passant un moment agréable ? C'est
                      toujours avec bonne humeur que nous vous accueillons !
                    </p>
                    <h2 style={{ fontSize: "25px" }}>Prestations tarifs</h2>
                    <p>
                      Notre salon de coiffure, le Salon L 'Essentiel , vous
                      invite à découvrir nos différentes prestations, pour
                      hommes , femmes et enfants . Venez vous faire chouchouter
                      et oubliez vos tracas quotidiens le temps d'une pause dans
                      un salon de coiffure à l'ambiance chaleureuse et
                      conviviale. Profitez-en pour découvrir d'autres genres
                      musicaux et les artistes qui viennent exposer, de temps à
                      autres, dans votre salon de coiffure de proximité ! Vous
                      ne viendrez plus seulement pour une coupe de cheveux ,
                      vous viendrez pour profiter du moment présent !
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
