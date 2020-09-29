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
