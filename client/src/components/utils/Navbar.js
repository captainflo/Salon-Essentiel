import React from "react";

class Navabar extends React.Component {
  render() {
    return ( 
    <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#!" class="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <div className="block-ul">
                <ul class="tabs tabs-transparent hide-on-med-and-down">
                    <li class="tab"><a href="sass.html">Contact</a></li>
                    <li class="tab"><a href="badges.html">Price</a></li>
                    <li class="tab"><a href="collapsible.html">About</a></li>
                </ul>
                </div>
                
            </div>
         </nav>

        <ul class="sidenav" id="mobile-demo">
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


