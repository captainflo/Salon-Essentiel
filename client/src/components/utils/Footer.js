import React from 'react';
import { Link } from 'react-router-dom';

class Navabar extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h6 className="white-text">Contact</h6>
              <ul className="grey-text text-lighten-4">
                <li>
                  <i className="material-icons">markunread_mailbox</i>{' '}
                  <span className="contact">
                    98 Cours du Général de Gaulle 33170 Gradignan
                  </span>
                </li>
                <li>
                  <i className="material-icons">phone</i>{' '}
                  <a
                    style={{ color: '#fff' }}
                    href="tel:0556894881"
                    className="contact"
                  >
                    05 56 89 48 81
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <h6 className="white-text">Un Salon proche de chez vous</h6>
              <ul>
                <li>
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header">
                        <i className="fas fa-cut"></i> Salon
                      </div>
                      <div className="collapsible-body">
                        <ul>
                          <div className="box-coiffeur">
                            <Link
                              to="/salon-cestas"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Cestas
                            </Link>
                            <Link
                              to="/salon-canejan"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Canejan
                            </Link>
                            <Link
                              to="/salon-leognan"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Léognan
                            </Link>
                            <Link
                              to="/salon-pessac"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Pessac
                            </Link>
                            <Link
                              to="/salon-villenave"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Villenave d'ornon
                            </Link>
                            <Link
                              to="/salon-begles"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Begles
                            </Link>
                            <Link
                              to="/salon-talence"
                              className="btn-coiffure btn"
                            >
                              <i className="fas fa-cut"></i> Talence
                            </Link>
                          </div>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="collapsible">
                    <li>
                      <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>En savoir
                        +
                      </div>
                      <div className="collapsible-body">
                        <h1 style={{ fontSize: '21px' }}>
                          Salon de coiffure à Gradignan
                        </h1>
                        <h2 style={{ fontSize: '20px' }}>
                          Coiffeur à Gradignan
                        </h2>
                        <h2 style={{ fontSize: '20px' }}>Présentation</h2>
                        <p>
                          L'équipe du Salon L'Essentiel à Gradignan, réalise
                          toutes vos envies en matières de coiffures ! Vous
                          hésitez pour un changement radical ? Nous prenons le
                          temps d'échanger sur vos goûts et vous conseillons par
                          rapport à la forme de votre visage. Vous souhaitez
                          rafraichir votre coupe ou votre couleur tout en
                          passant un moment agréable ? C'est toujours avec bonne
                          humeur que nous vous accueillons !
                        </p>
                        <h2 style={{ fontSize: '20px' }}>Prestations tarifs</h2>
                        <p>
                          Notre salon de coiffure, le Salon L 'Essentiel , vous
                          invite à découvrir nos différentes prestations, pour
                          hommes , femmes et enfants . Venez vous faire
                          chouchouter et oubliez vos tracas quotidiens le temps
                          d'une pause dans un salon de coiffure à l'ambiance
                          chaleureuse et conviviale. Profitez-en pour découvrir
                          d'autres genres musicaux et les artistes qui viennent
                          exposer, de temps à autres, dans votre salon de
                          coiffure de proximité ! Vous ne viendrez plus
                          seulement pour une coupe de cheveux , vous viendrez
                          pour profiter du moment présent !
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2019 Copyright salon l'essentiel
            <Link className="grey-text text-lighten-4 right" to="/cookies">
              Cookies
            </Link>
            <Link
              style={{ marginRight: '10px' }}
              className="grey-text text-lighten-4 right"
              to="/mentions-legales"
            >
              Mentions légales
            </Link>
            <Link
              style={{ marginRight: '10px' }}
              className="grey-text text-lighten-4 right"
              to="/privacy"
            >
              Protection de la vie privée
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Navabar;
