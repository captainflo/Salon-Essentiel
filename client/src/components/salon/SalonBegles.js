import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonBegles extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Salon de coiffure proche Begles : pour veiller au bien-être de votre
            chevelure
          </title>
          <meta
            name="description"
            content="Que vous souhaitiez raviver la couleur de vos
            cheveux ou adopter un nouveau look, le salon de coiffure Begles vous
            aide à atteindre vos objectifs."
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
                <h1>Coiffeur proche de Begles</h1>
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
            Les cheveux sont en permanence agressés. Ils deviennent de plus en
            plus secs et sont facilement vulnérables. À cause de ces facteurs,
            il est impératif de bien en prendre soin. Il faut leur dispenser les
            soins nécessaires. Pour connaître les soins adaptés au bien-être de
            votre fibre capillaire, recourez à l’aide d’un professionnel, comme
            le salon de coiffure Begles. Il vous prodigue les conseils utiles
            pour bien entretenir vos cheveux.
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
                Un professionnel pour veiller au bien-être de vos cheveux
              </h2>
              <p>
                À cause de plusieurs facteurs extérieurs, la chevelure perd de
                son éclat et de sa brillance. C’est surtout le cas après les
                saisons hivernales ou lors d’une forte exposition au soleil.
                Pour que votre chevelure ne soit plus aussi terne, vous devez
                lui donner les soins nécessaires. Le salon de coiffure Begles
                est un professionnel qui veille spécialement au bien-être de
                votre fibre capillaire. Son personnel expérimenté fera en sorte
                de la traiter pour qu’elle devienne éclatante de beauté. Il vous
                conseillera aussi sur les produits adaptés pour votre chevelure.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>
                Un professionnel pour vous donner un nouveau look
              </h2>
              <p>
                Vous avez envie de vous démarquer un peu des autres ? Vous
                envisagez de commencer une nouvelle vie ? Offrez-vous un nouveau
                look. Pour cela, il faudra adopter une autre coupe de cheveux.
                Si vous souhaitez aller plus loin, vous pouvez même adopter une
                nouvelle coloration. Le salon de coiffure Begles vous permet
                d’avoir le style que vous envisagez de mettre en valeur. En
                allant chez ce professionnel, vous serez reçu dans un
                environnement convivial. Chaque membre du personnel sera au
                petit soin pour vous. Profitez-en pour vous relaxer
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

export default SalonBegles;
