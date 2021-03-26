import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      todoNew: ''
    }
    this.addTasks = this.addTasks.bind(this)
  }

  updateTodo(value) {
    this.setState({ todoNew: value })
  }
  addTasks(task) {
    this.setState({
      todo: [...this.state.todo, this.state.todoNew],
      todoNew: ''
    })

  }
  render() {
    let todo = this.state.todo.map((element, index) => {
      return <Todo key={index} task={element} />;
    })

    return (
      <div className="App">
        <h1>My to-do list</h1>
        <div>
          <input
            value={this.state.todoNew}
            placeholder="Enter new task"
            onChange={(e) => this.updateTodo(e.target.value)}
          />
          <button onClick={this.addTasks}>Add</button>
        </div>
        <br />
        {todo}
      </div>
    );
  }
}

export default App;
