import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ImgMediaCard from '../components/cards';
<<<<<<< HEAD
import Map from '../components/googleMaps';
=======
import GoogleMapLoader from '../components/googleMaps';
>>>>>>> 6a23e19657074b0de51ecaed586ee4cb27c9022f

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ImgMediaCard/>
        <ImgMediaCard/>
<<<<<<< HEAD
         <Map/>
=======
       <GoogleMapLoader></GoogleMapLoader>
>>>>>>> 6a23e19657074b0de51ecaed586ee4cb27c9022f
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
