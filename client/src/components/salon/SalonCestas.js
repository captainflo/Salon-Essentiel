import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonCestas extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Salon de coiffure proche de Cestas : un professionnel pour prendre
            soin de votre chevelure
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
                <h1>Coiffeur proche de Cestas</h1>
                <h5 className="light grey-text text-lighten-3">
                  Originalité, qualité et convivialité
                  <br /> sont au rendez-vous
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <div className="container">
          <h2 className="font-title">
            Salon de coiffure proche de Cestas : un professionnel pour prendre
            soin de votre chevelure
          </h2>
          <p>
            Vous souvenez vous de la dernière fois où vous êtes allé chez le
            coiffeur ? C'est peut-être le moment idéal pour faire un saut auprès
            d’un professionnel de la coiffure. Recourir au service d’un coiffeur
            est à la fois bénéfique pour le physique et le psychique. Il vous
            aide à bien prendre soin de votre chevelure. De plus, c’est toujours
            agréable de se faire chouchouter. Cette parenthèse bien-être permet
            de se couper un peu du stress de la vie quotidienne et de se
            ressourcer.
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
              <h2 style={{ fontSize: "18px" }}>Redonner vie à sa chevelure</h2>
              <p>
                La plupart des gens ne se rendent chez le coiffeur que pour
                effectuer une coupe. Mais ce n’est pas la seule raison pour
                recourir au service d’un professionnel de la coiffure. En
                réalité, il vous aide à faire le bilan de vos cheveux. Il vous
                donne des conseils afin de leur redonner de l’éclat. En effet,
                n’attendez pas que vos cheveux soient gravement endommagés avant
                de demander l’avis d’un professionnel. Le salon de coiffure
                Cestas vous propose des soins pour mieux prendre soin de vos
                cheveux. Pour nourrir votre fibre capillaire en profondeur, il
                utilise des produits de qualité.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>
                Rafraîchir la coupe de cheveux
              </h2>
              <p>
                Le salon de coiffure Cestas vous aide également à avoir un
                nouveau look. Si vous en avez assez de toujours porter la même
                coupe, ce professionnel peut vous proposer une coiffure adaptée
                à la forme de votre visage. Si vous le souhaitez, il peut aussi
                rafraîchir votre coupe ou votre couleur. Pour maintenir vos
                cheveux en bonne santé, laissez un coiffeur Cestas expérimenté
                prendre soin de votre fibre capillaire.
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
            Meta description : Même si vous ne ressentez pas souvent le besoin
            de recourir à un coiffeur, consulter ce professionnel de temps en
            temps peut être vraiment bénéfique pour votre chevelure.
          </p>
        </div>
      </div>
    );
  }
}

export default SalonCestas;
