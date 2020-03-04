import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Tarif from "./Tarif";
import Salon from "./Salon";
import Equipe from "./Equipe";
import Contact from "./Contact";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import Cookies from "./Cookies";
import Mention from "./Mention";
import Privacy from "./Privacy";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SalonCestas from "./salon/SalonCestas";
import SalonCanejan from "./salon/SalonCanejan";
import SalonVillenave from "./salon/SalonVillenave";
import SalonPessac from "./salon/SalonPessac";
import SalonLeognan from "./salon/SalonLeognan";
import SalonTalence from "./salon/SalonTalence";
import SalonBegles from "./salon/SalonBegles";

class App extends React.Component {
  componentDidMount() {
    // Sidebar
    const elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    // Tabs
    const el = document.querySelector(".tabs");
    M.Tabs.init(el, {});
    // Slider
    const elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {});
    // Carousel
    var elemCarou = document.querySelectorAll(".carousel");
    M.Carousel.init(elemCarou, {
      padding: 50
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Welcome} />
          <Route path="/tarifs" component={Tarif} />
          <Route path="/coiffure" component={Salon} />
          <Route path="/equipe" component={Equipe} />
          <Route path="/contact" component={Contact} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/mentions-legales" component={Mention} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/salon-cestas" component={SalonCestas} />
          <Route path="/salon-canejan" component={SalonCanejan} />
          <Route path="/salon-villenave" component={SalonVillenave} />
          <Route path="/salon-pessac" component={SalonPessac} />
          <Route path="/salon-leognan" component={SalonLeognan} />
          <Route path="/salon-talence" component={SalonTalence} />
          <Route path="/salon-begles" component={SalonBegles} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
