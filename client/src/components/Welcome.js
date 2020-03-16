import React from 'react';
import Banner from './utils/Banner';
import Carousel from './utils/Carousel';
import MetaTags from 'react-meta-tags';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

class Welcome extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // Collapse
    const elemcol = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elemcol, {});
  }

  render() {
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
              process.env.PUBLIC_URL + '/images/salon-essentiel--logo-black.png'
            }
          />
        </MetaTags>
        <Banner />
        <Carousel />
      </div>
    );
  }
}

export default Welcome;
