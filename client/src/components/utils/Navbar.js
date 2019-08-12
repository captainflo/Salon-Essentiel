import React from "react";

class Navabar extends React.Component {
  render() {
    return ( 
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <div className="block-ul">
                <ul className="tabs tabs-transparent hide-on-med-and-down">
                    <li className="tab"><a href="sass.html">Contact</a></li>
                    <li className="tab"><a href="badges.html">Price</a></li>
                    <li className="tab"><a href="collapsible.html">About</a></li>
                </ul>
                </div>
                
            </div>
         </nav>

        <ul className="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>
    </div>
    );
  }
}

export default Navabar;


