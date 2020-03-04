import React from "react";
import MetaTags from "react-meta-tags";
import { Slider, Caption, Slide } from "react-materialize";

class SalonPessac extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>
            Salon de coiffure proche de Pessac : pour une coupe tendance
            effectuée par un professionnel
          </title>
          <meta
            name="description"
            content="La coupe de cheveux est un élément déterminant,
            car elle permet de définir votre personnalité. Le salon de coiffure
            Pessac vous aide à avoir une coiffure qui vous correspond."
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
                <h1>Coiffeur proche de Pessac</h1>
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
            Vous souhaitez avoir une coupe tendance adaptée à votre
            morphologie ? Le coiffeur Pessac Alouette peut vous offrir une
            coiffure qui vous convient le plus. Il est capable d’exécuter une
            coupe moderne et tendance.
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
                Pour avoir une coupe en accord avec votre morphologie
              </h2>
              <p>
                Une coupe doit non seulement vous permettre d’avoir un nouveau
                look, mais elle doit aussi mettre en avant la morphologie de
                votre visage. Pour qu’elle soit réussie, il faut qu’elle prenne
                en considération vos proportions. Si vous souhaitez changer de
                look, le coiffeur Pessac saura répondre à vos besoins. Bien
                exécutée, une coupe permet de cacher les imperfections de votre
                visage. Elle vous aide à paraître moins joufflu, à avoir le
                visage moins long, moins large ou moins anguleux. Ce coiffeur
                vous prodiguera les conseils nécessaires pour en choisir une.
                Grâce à son expérience, il peut vous offrir une coupe en accord
                avec vos besoins et vos attentes.
              </p>
            </div>
          </div>
          <div className="row flex-s">
            <div className="col m6 box-a">
              <h2 style={{ fontSize: "18px" }}>Pour entrer dans la tendance</h2>
              <p>
                Le salon de coiffure Pessac vous propose des styles de coiffure
                parfaitement tendance. Il dispose d’un personnel parfaitement
                compétent. Il possède les aptitudes nécessaires pour s’occuper
                de la coiffure des hommes et des femmes. Lors de chaque
                changement de saison, diverses coupes à la pointe de la mode
                font leur apparition. Le coiffeur Pessac peut parfaitement
                exécuter la coiffure tendance de votre choix. Toutefois, les
                coupes en vogue ne correspondent pas forcément à toutes les
                morphologies. Ce professionnel peut vous proposer la coiffure
                idéale qui vous correspond. Si vous avez besoin d’un relooking
                ou de moderniser un peu votre coiffure, ce salon vous prodiguera
                les conseils nécessaires. Il pourra exécuter la coiffure de
                votre choix.
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

export default SalonPessac;
