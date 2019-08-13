import React from "react";
import { Slider, Caption, Slide } from "react-materialize";

class Salon extends React.Component {
  render() {
    return (
      <div>
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
          <h3 className="font-title">Presentation</h3>
          <p>
            L'équipe du Salon L'Essentiel à Gradignan, réalise toutes vos envies
            en matières de coiffures ! Vous hésitez pour un changement radical ?
            Nous prenons le temps d'échanger sur vos goûts et vous conseillons
            par rapport à la forme de votre visage. Vous souhaitez rafraichir
            votre coupe ou votre couleur tout en passant un moment agréable ?
            C'est toujours avec bonne humeur que nous vous accueillons !
          </p>
          <div className="row">
            <div className="col m6">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/salon-essentiel-salon2.jpg"
                }
                alt="background"
                className="responsive-img style-img"
              />
            </div>
            <div className="col m6">
              <p>
                Venez vous faire chouchouter et oubliez vos tracas quotidiens le
                temps d'une pause dans un salon de coiffure à l'ambiance
                chaleureuse et conviviale. Profitez-en pour découvrir d'autres
                genres musicaux et les artistes qui viennent exposer, de temps à
                autres, dans votre salon de coiffure de proximité ! Vous ne
                viendrez plus seulement pour une coupe de cheveux , vous
                viendrez pour profiter du moment présent !
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <p>
              Le Salon L'Essentiel n'est pas un salon de coiffure comme les autres, mais rassurez-vous, vous pourrez tout de même vous y faire faire une coupe ! Mais une fois que vous aurez pousser les portes de ce salon de coiffure, vous y retournerez rien que pour profiter de l'ambiance ! Il faut dire que l'équipe y est pour beaucoup ! Chacun a sa personnalité, chacun ses goûts, chacun son style !
              </p>
            </div>
            <div className="col m6 box-b">
              <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel-6.jpg"}
                alt="background"
                className="responsive-img style-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Salon;
