import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonLeognan extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Profitez des différentes prestations du salon de coiffure proche de
            Leognan
          </title>
          <meta
            name="description"
            content="Quel que soit le style de coiffure que vous
            souhaitiez avoir, le salon de coiffure Leognan fera son maximum pour
            satisfaire vos besoins."
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
                <h1>Coiffeur proche de Leognan</h1>
                <h5 className="light grey-text text-lighten-3">
                  Originalité, qualité et convivialité
                  <br /> sont au rendez-vous
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <div className="container">
          <p>
            Vous êtes à la recherche d’un coiffeur qui peut exécuter des
            coiffures tendances ? Le salon de coiffure Leognan se donnera au
            maximum pour mieux répondre à vos besoins. Mais avant d’exécuter
            votre requête, un membre du personnel du salon vous conseillera sur
            la meilleure option adaptée à votre morphologie. Les coiffeurs du
            salon peuvent vous offrir différentes prestations pour mettre en
            valeur votre chevelure. Ils mettent la satisfaction de leur client
            au centre de leur préoccupation.
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
                Un professionnel qui offre une multitude de services
              </h2>
              <p>
                Quel que soit votre besoin : une coupe, un brushing, un lissage
                ou un défrisage, orientez-vous vers le salon de coiffure
                Leognan. Ce professionnel peut également raviver votre couleur
                naturelle ou vous donnez une nouvelle coloration. Si vous
                souhaitez offrir un nouvel aspect à vos cheveux, il vous aidera
                à leur donner un nouveau look. Ce coiffeur peut exécuter des
                coiffures modernes et classiques. Pour que vous ne soyez pas
                déçu du rendu, il vous expliquera en détail le résultat final.
                Ce professionnel se donnera au maximum en vue de satisfaire ses
                clients.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>
                Un professionnel qui reste constamment à l’écoute de ses clients
              </h2>
              <p>
                Le bien-être de ses clients est primordial pour le salon de
                coiffure Leognan. Il ambitionne de répondre parfaitement aux
                attentes de sa clientèle. Afin de faciliter les échanges, il
                l’immerge dans un environnement agréable et convivial. Avant
                d’exécuter leur prestation, ce coiffeur cherche à bien
                comprendre les besoins de ses clients. Il n’hésite pas à
                discuter avec eux. Une fois qu’il a cerné les attentes de la
                personne concernée, il passera ensuite à l’action. Il met tout
                son talent au service de son métier afin de satisfaire sa
                clientèle
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

export default SalonLeognan;
