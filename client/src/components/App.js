import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Welcome from './Welcome';
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
    M.Slider.init(elems, {
      height: 600
    });
  }
  render(){
    return (
      <div>
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Welcome}/>
        <Route  path='/contact' component={Contact}/>
        <Footer/>
      </BrowserRouter>
      
    </div>
    );
  }
}

export default App;
