import React from 'react';
import { Slider, Caption, Slide } from 'react-materialize';
import Google from './utils/GoogleMap';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: 'auto !important' }}>
          <Slider style={{ height: 'auto !important' }}>
            <Slide
              image={
                <img
                  src={process.env.PUBLIC_URL + '/images/salon-essentiel5.jpeg'}
                  alt="background"
                  className="responsive-img"
                />
              }
            >
              <Caption placement="left">
                <h4>Un salon unique</h4>
                <h5 className="light grey-text text-lighten-3">
                  Originalité, qualité et convivialité
                  <br /> sont au rendez-vous
                </h5>
              </Caption>
            </Slide>
          </Slider>
        </div>

        <div className="container">
          <h3 className="font-title">Contact</h3>
          <div className="row">
            <div className="col m6 s6 center">
              <i className="fas fa-home"></i>
              <br></br>
              Salon L'Essentiel<br></br>
              98 Cours du Général de Gaulle<br></br>
              33170 Gradignan
            </div>
            <div className="col m6 s6 center">
              <i className="material-icons">phone</i>
              <br></br>
              <a
                style={{ color: '#fff' }}
                href="tel:0556894881"
                className="contact"
              >
                05 56 89 48 81
              </a>
            </div>
          </div>

          <Google />
        </div>
      </div>
    );
  }
}

export default Contact;
