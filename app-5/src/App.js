import React, { Component } from 'react';
import Image from './image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Image url={'https://cdn.pixabay.com/photo/2013/03/09/14/38/machines-91849_1280.jpg'} />

      </div>
    );
  }
}

export default App;
