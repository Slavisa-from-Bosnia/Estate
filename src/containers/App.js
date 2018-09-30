import React, { Component } from 'react';
import './App.css';
import ImgMediaCard from '../components/cards';
import ButtonAppBar from '../components/appbar';
import Map from '../components/googleMaps';
//SET PATH=C:\Program Files\Nodejs;%PATH%
import FullWidthGrid from '../components/FullWidthGrid';
class App extends Component {
  render() {
    return (
      <div className="App" >
        <ButtonAppBar/>
        <FullWidthGrid/>
         <Map/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
