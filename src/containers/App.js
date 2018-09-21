import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ImgMediaCard from '../components/cards';
import GoogleMapLoader from '../components/googleMaps';

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
       <GoogleMapLoader></GoogleMapLoader>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
