import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

class Carousel extends React.Component {
  componentDidMount() {
    // Carousel
    var elemCarou = document.querySelectorAll(".carousel");
    M.Carousel.init(elemCarou, {
      padding: 100
    });
  }
  render() {
    return (
      <div className="mimi-carousel">
        <h2 className="center carousel-title font-title">
          L'essentiel en un clic!
        </h2>
        <div className="carousel">
          <Link className="carousel-item center" to="/coiffure">
            <i style={{ fontSize: "50px" }} className="fas fa-home "></i>
            <p>Notre Salon</p>
          </Link>
          <Link className="carousel-item center" to="/equipe">
            <i style={{ fontSize: "50px" }} className="fas fa-users"></i>
            <p>Notre Equipe</p>
          </Link>
          <Link className="carousel-item center" to="/tarifs">
            <i
              style={{ fontSize: "50px" }}
              className="fas fa-comment-dollar"
            ></i>
            <p>Nos Tarifs</p>
          </Link>
          <Link className="carousel-item center" to="/contact">
            <i style={{ fontSize: "50px" }} className="fas fa-comment-dots"></i>
            <p>Contact</p>
          </Link>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default Carousel;
