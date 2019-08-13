import React from "react";

class Navabar extends React.Component {
  render() {
    return ( 
        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Contact</h5>
              <ul className="grey-text text-lighten-4">
                <li><i className="material-icons">markunread_mailbox</i> <span className="contact">98 Cours du Général de Gaulle 33170 Gradignan</span></li>
                <li><i className="material-icons">phone</i> <span className="contact">05 56 89 48 81</span></li>
              </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="https://www.facebook.com/pageSalonLEssentiel/?fref=ts" target='blank'><i className="fab fa-facebook-square"></i> Facebook</a></li>
                <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/salon_lessentiel/" target='blank'><i className="fab fa-instagram"></i> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2019 Copyright salon l'essentiel
          {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
          </div>
        </div>
      </footer>
      );
  }
}

export default Navabar;


