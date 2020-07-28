import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
  componentDidMount() {
    // Carousel
    var elemCarou = document.querySelectorAll('.carousel');
    M.Carousel.init(elemCarou, {
      padding: 100,
    });
  }
  render() {
    return (
      <div className="mimi-carousel">
        <h2 className="center carousel-title font-title">
          L'essentiel en un clic!
        </h2>
        <div className="carousel">
          <a
            className="carousel-item center"
            target="_blank"
            rel="noopener noreferrer"
            href="https://rendezvous.hairnet.fr/?token=9aedc40c534d3854784c85e6f6d16d92&iframe=1"
          >
            <i style={{ fontSize: '50px' }} className="fas fa-book"></i>
            <p>Reservation</p>
          </a>

          <Link className="carousel-item center" to="/coiffure">
            <i style={{ fontSize: '50px' }} className="fas fa-home "></i>
            <p>Notre Salon</p>
          </Link>
          <Link className="carousel-item center" to="/equipe">
            <i style={{ fontSize: '50px' }} className="fas fa-users"></i>
            <p>Notre Equipe</p>
          </Link>
          <Link className="carousel-item center" to="/tarifs">
            <i
              style={{ fontSize: '50px' }}
              className="fas fa-comment-dollar"
            ></i>
            <p>Nos Tarifs</p>
          </Link>
          <Link className="carousel-item center" to="/contact">
            <i style={{ fontSize: '50px' }} className="fas fa-comment-dots"></i>
            <p>Contact</p>
          </Link>
          <a
            className="carousel-item center"
            href="https://www.facebook.com/pageSalonLEssentiel/?fref=ts"
            target="blank"
          >
            <i
              style={{ fontSize: '50px' }}
              className="fab fa-facebook-square"
            ></i>
            <p>Facebook</p>
          </a>

          <a
            className="carousel-item center"
            href="https://www.instagram.com/salon_lessentiel/"
            target="blank"
          >
            <i style={{ fontSize: '50px' }} className="fab fa-instagram"></i>
            <p>Instagram</p>
          </a>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Carousel;
