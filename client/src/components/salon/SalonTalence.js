import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonTalence extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Salon de coiffure proche de Talence : confiez votre beauté à un
            professionnel
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
                <h1>Coiffeur proche de Talence</h1>
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
            Salon de coiffure proche de Talence : confiez votre beauté à un
            professionnel
          </h1>
          <p>
            La chevelure est un élément déterminant pour la beauté d’une
            personne. Plus elle est réussie, plus son propriétaire paraît sur
            son plus beau jour. La séance chez le coiffeur est cruciale.
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
                Pour profiter des services d’un professionnel expérimenté et
                compétent
              </h2>
              <p>
                Avoir une jolie coiffure influe positivement sur moral. Que ce
                soit pour rafraîchir votre coupe de cheveux ou pour changer
                radicalement de coiffure, rendez-vous auprès d’un professionnel
                expérimenté, comme le salon de coiffure Talence. Ce
                professionnel veille à répondre parfaitement à vos besoins. Il
                vous proposera une coupe en harmonie avec votre visage. Le
                personnel de ce salon est à la fois accueillant et dynamique.
                Vous n’aurez pas de difficulté à communiquer avec les membres du
                personnel. Ce coiffeur peut vous guider dans vos choix.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>
                Pour profiter d’une coiffure réussie
              </h2>
              <p>
                Le salon de coiffure Talence vous aide à mettre en valeur la
                beauté de votre chevelure. Il vous propose des produits de
                qualité afin de les rendre plus soyeux et brillants. Grâce à ce
                professionnel, vous pourrez mieux prendre soin de votre
                chevelure. Elle sera moins cassante et retrouvera
                progressivement la santé. Quel que soit votre type de cheveux
                fins, lisses ou épais, il vous aidera à mieux les dompter. Que
                vous ayez besoin de faire un brushing, de rafraîchir votre coupe
                ou de raviver vos couleurs, adressez-vous à ce professionnel
                expérimenté. Vous serez ravi à chaque fois que vous sortirez de
                ce salon. Les membres du personnel de ce salon sont à l’écoute
                de vos attentes pour qu’il puisse y répondre de manière
                optimale. Chaque prestation est effectuée dans un environnement
                agréable et convivial. Chaque moment que vous passerez chez ce
                coiffeur est un vrai plaisir.
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
            Meta description : Que ce soit pour aller au travail ou pour une
            sortie entre amies, offrez-vous toujours une coiffure impeccable.
          </p>
        </div>
      </div>
    );
  }
}

export default SalonTalence;
