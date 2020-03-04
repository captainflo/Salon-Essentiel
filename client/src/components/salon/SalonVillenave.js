import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonVillenave extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Coiffeur proche de Villenave-d’Ornon : un professionnel dynamique et
            accueillant au service de votre chevelure
          </title>
          <meta
            name="description"
            content="Que vous soyez un homme ou une femme, le coiffeur
            Villenave-d’Ornon fera de son mieux pour satisfaire vos besoins."
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
                <h1>Coiffeur proche de Villenave-d'ornon</h1>
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
            Le Coiffeur Villenave-d’Ornon est un professionnel qui se charge du
            bien-être de votre chevelure. Chaque moment que vous passez chez ce
            coiffeur sera à la fois agréable et relaxant. Lorsque vous allez
            chez ce coiffeur, vous serez accueilli par un personnel dynamique et
            accueillant. Il se distingue grâce à la qualité de son service et sa
            sociabilité.
          </p>
          <div className="row">
            <div className="col m6">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/salon-essentiel-salon2.jpg"
                }
                alt="background"
                style={{ marginTop: "15%" }}
                className="responsive-img style-img"
              />
            </div>
            <div className="col m6">
              <h2 style={{ fontSize: "18px" }}>
                Un professionnel de la coiffure pour vous conseiller
              </h2>
              <p>
                Le Coiffeur Villenave-d’Ornon se distingue grâce à son talent et
                à son savoir-faire. Si vous hésitez entre plusieurs coupes, il
                peut vous conseiller sur la coupe qui correspond à votre
                morphologie. Il ne se contente pas d’exécuter la coiffure que
                vous avez élue. Il vous apporte son concours pour que vous
                fassiez le bon choix. Il peut également vous orienter dans le
                cas où vous avez envie de changer de couleurs de cheveux. Grâce
                à son expertise, ce coiffeur vous offre des propositions sur
                mesure. Il peut aussi accomplir des coiffures sur mesure
                conforme aux dernières tendances. Que vous souhaitiez avoir une
                chevelure frisée ou lisse, il possède les techniques nécessaires
                pour être en phase avec vos demandes. En tant qu’expert de la
                coiffure, il a la possibilité de vous proposer des produits
                répondant à vos besoins.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>
                Un professionnel au petit soin
              </h2>
              <p>
                Le Coiffeur Villenave-d’Ornon veille au bien-être de votre
                chevelure et aussi à votre confort personnel. Il reste attentif
                aux demandes de ses clients. Il vous reçoit dans un
                environnement agréable et convivial. Vous vous mettrez aisément
                à l’aise lorsque vous arriverez chez ce coiffeur. Pour bien
                comprendre vos besoins, il reste toujours à l’écoute. Il fait en
                sorte de comprendre vos attentes. La satisfaction de ses clients
                est sa principale préoccupation.
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
            Meta description : Que vous soyez un homme ou une femme, le coiffeur
            Villenave-d’Ornon fera de son mieux pour satisfaire vos besoins.
          </p>
        </div>
      </div>
    );
  }
}

export default SalonVillenave;
