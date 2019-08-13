import React from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from 'react-router-dom';

class Carousel extends React.Component {
  componentDidMount(){
    // Carousel
    var elemCarou = document.querySelectorAll('.carousel');
    M.Carousel.init(elemCarou, {
      padding: 100
    });
  }
  render(){
    return (
      <div>
          <h4 className='center carousel-title'>L'essentiel en un clic!</h4>
          <div className="carousel">
            <Link className="carousel-item center" to="/salon">
              <i style={{fontSize: '100px'}} class="fas fa-home "></i>
              <p>Notre Salon</p>
            </Link>
            <Link className="carousel-item center" to="/salon">
              <i style={{fontSize: '100px'}} class="fas fa-users"></i>
              <p>Notre Equipe</p>
            </Link>
            <Link className="carousel-item center" to="/tarif">
              <i style={{fontSize: '100px'}} class="fas fa-comment-dollar"></i>
              <p>Nos Tarifs</p>
            </Link>
          </div>
    </div>
    );
  }
 
}

export default Carousel;
