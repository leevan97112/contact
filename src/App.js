import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">      
      <fieldset className="contactContainer" ><legend className="legendContact"><h2>Renseignements</h2></legend>
      <p><i className="fa fa-home" aria-hidden="true"></i><b> Adresse : </b></p>
      <p><i className="fa fa-envelope" aria-hidden="true"></i><b> Email : </b></p>
      <p><i className="fa fa-phone" aria-hidden="true"></i><b> N° de téléphone : </b></p>
      </fieldset>
      <fieldset className="MapContainer" ><legend className="legendContact"><h2>Carte</h2></legend>
      <iframe className="Mapping" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d901.4133424767539!2d-61.3137995!3d15.8841353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6b54b98e31a5c9%3A0xe5f003c862fb434e!2sLyc%C3%A9e+Hyacinthe+Bastaraud!5e1!3m2!1sfr!2sgp!4v1515675330467"></iframe>
      </fieldset>
      </div>
    );
  }
}

export default App;
