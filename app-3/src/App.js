import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: ['PB', 'Pineapple', 'protein', 'chicken'],
      filteredList: ''
    };
  }
  updateList(value) {
    this.setState({ filteredList: value })
  }

  render() {
    let listDisplay = this.state.groceries
      .filter((element, index) => {
        return element.includes(this.state.filteredList);
      })
      .map((element, index) => {
        return <h2 key={index} > {element} </h2>;
      });

    return (
      <div className="App">
        <input onChange={(e) => this.updateList(e.target.value)} type="text" />
        {listDisplay}
      </div>
    );
  }
}


export default App;
