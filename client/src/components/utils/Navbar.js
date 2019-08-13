import React from "react";
import { Link } from 'react-router-dom';

class Navabar extends React.Component {
  render() {
    return ( 
    <div>
        <nav className="nav-wrapper z-depth-5">
          <Link to="/" className="brand-logo">Salon l'essentiel</Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
              <li className="tab"><Link to="/salon">Notre Salon</Link></li>
              <li className="tab"><Link to="/equipe">L'équipe</Link></li>
              <li className="tab"><Link to="/tarif">Tarif</Link></li>
              <li className="tab"><Link to="/Contact"> Contact</Link></li>
          </ul>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li className='font-title'><Link className='title-Sidebar' to="/">Salon l'essentiel</Link></li>
            <hr></hr>
            <li><Link to="/salon"><i className="fas fa-home "></i> Notre Salon</Link></li>
            <li><Link to="/equipe"><i className="fas fa-users"></i> L'équipe</Link></li>
            <li><Link to="/tarif"><i className="fas fa-comment-dollar"></i> Tarif</Link></li>
            <li><Link to="/Contact"><i className="fas fa-comment-dots"></i> Contact</Link></li>
        </ul>
    </div>
    );
  }
}

export default Navabar;


