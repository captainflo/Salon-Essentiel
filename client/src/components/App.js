import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Welcome from './Welcome';
import Tarif from './Tarif';
import Salon from './Salon';
import Equipe from './Equipe';
import Contact from './Contact';
import Navbar from './utils/Navbar'
import Footer from './utils/Footer'

import './App.css'
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

class App extends React.Component {
  componentDidMount(){
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
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems, {});
    // Carousel
    var elemCarou = document.querySelectorAll('.carousel');
    M.Carousel.init(elemCarou, {
      padding: 50
    });
  }
  render(){
    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Welcome}/>
        <Route  path='/tarif' component={Tarif}/>
        <Route  path='/salon' component={Salon}/>
        <Route  path='/equipe' component={Equipe}/>
        <Route  path='/contact' component={Contact}/>
        <Footer/>
      </BrowserRouter>
      
    </div>
    );
  }
}

export default App;
