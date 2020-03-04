import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonCanejan extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Coiffeur proche de canejan : un professionnel expérimenté qui
            s’assure du bien-être de votre chevelure
          </title>
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
                <h1>Coiffeur proche de Canejan</h1>
                <h5 className="light grey-text text-lighten-3">
                  Originalité, qualité et convivialité
                  <br /> sont au rendez-vous
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <div className="container">
          <h1 className="font-title">
            Coiffeur proche de canejan : un professionnel expérimenté qui
            s’assure du bien-être de votre chevelure
          </h1>
          <p>
            Certaines personnes vont chez le coiffeur pour seulement effectuer
            leur traditionnelle coupe saisonnière. Vous voulez changer de
            coupe ? Vous souhaitez avoir la même coiffure que votre star
            préférée ? Le Coiffeur Canejan fera de son mieux pour vous
            satisfaire. Il accorde une grande valeur à son métier. Il possède le
            talent nécessaire pour reproduire la coupe de votre choix. Il peut
            également vous conseiller sur la meilleure coupe adaptée à votre
            visage.
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
              <h2 style={{ fontSize: "18px" }}>
                Un professionnel aux conseils bien avisés
              </h2>
              <p>
                Chaque nouvelle saison, des coupes originales apparaissent. Vous
                serez peut-être tenté de reproduire une de ces coiffures. Mais
                il faut savoir que la coupe que vous aurez choisie ne convient
                pas forcément à votre morphologie. Le Coiffeur Canejan est un
                professionnel qui peut vous conseiller sur la meilleure coiffure
                pour vous mettre en valeur. Avant de vous proposer une coupe, il
                fera une analyse de vos besoins. Il ne faut pas hésiter à leur
                faire part de vos attentes.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>
                Un professionnel proposant des services sur-mesure
              </h2>
              <p>
                Certaines personnes sortent insatisfaites de leur salon de
                coiffure. Le Coiffeur Canejan accorde une grande importance à
                vos besoins et à votre bien-être. Ce professionnel propose un
                service sur-mesure à ses clients. Il essaie d’identifier vos
                attentes pour mieux vous satisfaire. Il dispose d’une large
                panoplie de services sur-mesure. Que vous ayez besoin d’une
                coupe ou d’une nouvelle coloration, il possède le talent et les
                compétences nécessaires pour répondre à vos besoins. Il vous
                offrira un service de qualité. Si vos cheveux sont abîmés et
                ternes, il vous aidera à les raviver. Votre fibre capillaire
                retrouvera sa brillance.
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
          <p>
            Meta description : Le Coiffeur Canejan est un professionnel qui
            offre des services sur mesure. Au-delà des services qu’il vous
            propose, il peut également vous conseiller sur les styles de
            coiffures adaptés à votre morphologie.
          </p>
        </div>
      </div>
    );
  }
}

export default SalonCanejan;
