import React from 'react';
import { Link } from 'react-router-dom';

class Navabar extends React.Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper z-depth-5">
          <Link to="/" className="brand-logo">
            <img
              className="logo-brand"
              src={
                process.env.PUBLIC_URL +
                '/images/salon-essentiel--logo-white.png'
              }
              alt="logo"
            />
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="tab heartBeat">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://rendezvous.hairnet.fr/?token=9aedc40c534d3854784c85e6f6d16d92&iframe=1"
              >
                Reservation
              </a>
            </li>
            <li className="tab">
              <Link to="/coiffure">Notre Salon</Link>
            </li>
            <li className="tab">
              <Link to="/equipe">L'équipe</Link>
            </li>
            <li className="tab">
              <Link to="/tarifs">Tarifs</Link>
            </li>
            <li className="tab">
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li className="font-title">
            <Link className="title-Sidebar" to="/">
              <img
                className="logo-brand"
                src={
                  process.env.PUBLIC_URL +
                  '/images/salon-essentiel--logo-black.png'
                }
                alt="logo"
              />
            </Link>
          </li>
          <hr></hr>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://rendezvous.hairnet.fr/?token=9aedc40c534d3854784c85e6f6d16d92&iframe=1"
            >
              <i className="fas fa-book heartBeat"></i>
              Reservation
            </a>
          </li>
          <li>
            <Link className="sidenav-close" to="/coiffure">
              <i className="fas fa-home "></i> Notre Salon
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/equipe">
              <i className="fas fa-users"></i> L'équipe
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/tarifs">
              <i className="fas fa-comment-dollar"></i> Tarifs
            </Link>
          </li>
          <li>
            <Link className="sidenav-close" to="/contact">
              <i className="fas fa-comment-dots"></i> Contact
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navabar;
