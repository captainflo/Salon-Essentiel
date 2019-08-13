import React from "react";
import { Link } from 'react-router-dom';

class Navabar extends React.Component {
  render() {
    return ( 
    <div>
        <nav className="nav-wrapper z-depth-5">
          <Link to="/" className="brand-logo">Salon l'essentiel</Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
              <li className="tab"><Link to="/salon">Notre Salon</Link></li>
              <li className="tab"><Link to="/equipe">L'équipe</Link></li>
              <li className="tab"><Link to="/tarif">Tarif</Link></li>
          </ul>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><Link to="/">Salon l'essentiel</Link></li>
            <li><Link to="/salon">Notre Salon</Link></li>
            <li><Link to="/equipe">L'équipe</Link></li>
            <li><Link to="/tarif">Tarif</Link></li>
        </ul>
    </div>
    );
  }
}

export default Navabar;


