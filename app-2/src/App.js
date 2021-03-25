import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      schedule: ['gym', 'school', 'school', 'school', 'work', 'family time']
    };
  }
  render() {
    let newSchedule = this.state.schedule.map((element, index) => {
      return <h2 key={index}>{element}</h2>;})
  return (
      <div className="App">
      <header className="App-header">

        <p>
          {newSchedule}
        </p>



      </header>
    </div>
    );
  }
}

export default App;
