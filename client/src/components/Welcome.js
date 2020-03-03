import React from "react";
import Banner from "./utils/Banner";
import Carousel from "./utils/Carousel";
import MetaTags from "react-meta-tags";

function Welcome() {
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
      <div className="hide">
        <h1>Salon de coiffure à Gradignan</h1>
        <h2>Coiffeur à Gradignan // Tarif du salon de coiffure</h2>
        <h2>Présentation</h2>
        <p>
          L'équipe du Salon L'Essentiel à Gradignan, réalise toutes vos envies
          en matières de coiffures ! Vous hésitez pour un changement radical ?
          Nous prenons le temps d'échanger sur vos goûts et vous conseillons par
          rapport à la forme de votre visage. Vous souhaitez rafraichir votre
          coupe ou votre couleur tout en passant un moment agréable ? C'est
          toujours avec bonne humeur que nous vous accueillons !
        </p>
        <h2>Prestations tarifs</h2>
        <p>
          Notre salon de coiffure, le Salon L 'Essentiel , vous invite à
          découvrir nos différentes prestations, pour hommes , femmes et enfants
          . Venez vous faire chouchouter et oubliez vos tracas quotidiens le
          temps d'une pause dans un salon de coiffure à l'ambiance chaleureuse
          et conviviale. Profitez-en pour découvrir d'autres genres musicaux et
          les artistes qui viennent exposer, de temps à autres, dans votre salon
          de coiffure de proximité ! Vous ne viendrez plus seulement pour une
          coupe de cheveux , vous viendrez pour profiter du moment présent !
        </p>
        <h2>Les ongles de Mylène</h2>
        <p>
          Envie de donner un coup d'éclat à vos ongles ? Notre voisine, Mylène,
          vous accueille dans son bar à ongles avec son équipe ! Vous y
          trouverez, comme chez nous, un cadre chaleureux et détendu, proposant
          différentes prestations : manucure, pose de vernis , pose de gel ou
          résine et surtout des créations de décoration sur ongles et du Nail
          Art .
        </p>
      </div>
      <Banner />
      <Carousel />
    </div>
  );
}

export default Welcome;
