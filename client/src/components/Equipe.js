import React from "react";
import { Slider, Caption, Slide } from "react-materialize";

class Equipe extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: "auto !important" }}>
        <Slider style={{ height: "auto !important" }}>
          <Slide
            image={
              <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel2.jpg"}
                alt="background"
                class="responsive-img"
              />
            }
          >
            <Caption placement="left">
              <h4>Un salon unique</h4>
              <h5 className="light grey-text text-lighten-3">
                Précision, qualité et convivialité
                <br /> sont au rendez-vous
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>
        <div className="container">
          <h3 className="font-title">Notre Team</h3>
          <div className="row">
            <div className="col m4 s12">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/salon-essentiel-alicia.png"
                    }
                    alt="background"
                    class="activator responsive-img"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Alice<i class="material-icons right">more_vert</i>
                  </span>
                  Expérience <i class="fas fa-star" /> : 16 ans.<br />
                  Spécialisté <i class="fas fa-cut" /> : Coupe et couleur.<br />
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Histoire<i class="material-icons right">close</i>
                  </span>
                  On commence par notre petite dernière ! Arrivée en 2011,
                  Alicia est une artiste dans l'âme et saura vous faire
                  découvrir ses créations en coiffures.
                </div>
              </div>
            </div>
            <div className="col m4 s12">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/salon-essentiel-camille.jpg"
                    }
                    alt="background"
                    class="activator responsive-img"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Camille<i class="material-icons right">more_vert</i>
                  </span>
                  Expérience <i class="fas fa-star" /> : 16 ans.<br />
                  Spécialisté <i class="fas fa-cut" /> : Coupe et couleur.<br />
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Histoire<i class="material-icons right">close</i>
                  </span>
                  Coiffeuse polyvalente et efficace, Camille est vraiment à
                  l'écoute de nos clients. En coiffure, elle parviendra toujours
                  à vous faire plaisir !
                </div>
              </div>
            </div>
            <div className="col m4 s12">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/salon-essentiel-delphine.png"
                    }
                    alt="background"
                    class="activator responsive-img"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Delphine<i class="material-icons right">more_vert</i>
                  </span>
                  Expérience <i class="fas fa-star" /> : 16 ans.<br />
                  Spécialisté <i class="fas fa-cut" /> : Coupe et couleur.<br />
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Histoire<i class="material-icons right">close</i>
                  </span>
                  Polyvalente, cette coiffeuse expérimentée est arrivée il y a
                  déjà 18 ans dans notre salon. Elle respire la joie de vivre,
                  vous vous sentirez tout de suite à l'aise avec elle !
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col m4 s12">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/salon-essentiel-nathalie.png"
                    }
                    alt="background"
                    class="activator responsive-img"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Nathalie<i class="material-icons right">more_vert</i>
                  </span>
                  Expérience <i class="fas fa-star" /> : 16 ans.<br />
                  Spécialisté <i class="fas fa-cut" /> : Coupe et couleur.<br />
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Histoire<i class="material-icons right">close</i>
                  </span>
                  Notre technicienne en titre, présente depuis le début de l'aventure, son expérience en tant que coloriste est un atout pour notre salon !
                </div>
              </div>
            </div>
            <div className="col m4 s12">
              <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/salon-essentiel-jean-christophe.jpg"
                    }
                    alt="background"
                    class="activator responsive-img"
                  />
                </div>
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">
                    Jean Christophe<i class="material-icons right">more_vert</i>
                  </span>
                  Expérience <i class="fas fa-star" /> : 16 ans.<br />
                  Spécialisté <i class="fas fa-cut" /> : Coupe et couleur.<br />
                </div>
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">
                    Histoire<i class="material-icons right">close</i>
                  </span>
                  Catalyseur d'énergies, Jean-Christophe est spécialisé dans la coiffure masculine, il apporte chaque jour sa bonne humeur et vous la fera partager !
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Equipe;
