import React, { Component } from 'react';
import './../node_modules/todomvc-app-css/index.css';
//import AddToDo from './addToDo.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }
  addToDo = (e) => {
    
    console.log(`inside addToDo, str = ${str}`)
    console.log(str)
    let [...todosArr] = [...this.state.todos];
    todosArr.push(str)
  }
  render() {
    let todoList = this.state.todos.map( (item, index) => {
      return `<div>${index+1}. ${item}</div>`;
    });
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <div className="complete-all">></div>
          <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyUp={this.addToDo}/>
        </header>
        <div>
          {todoList}
        </div>

      </section>
    );
  }
}

export default App;
