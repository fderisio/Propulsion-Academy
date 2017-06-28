import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Header from './Header';
import Header from './components/Header'; // aunque escribas el nombre de la carpeta, va a buscar el header.js, index.js
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import Filter from './components/Filter';


class App extends Component {

  constructor(props) {
    super(props); // constructor of react component
    this.state = {
      toDos: [
        {id: 1, content: 'Learn JS', completed: false},
        {id: 2, content: 'Learn React', completed: false},
        {id: 3, content: 'Learn Redux', completed: false},
        {id: 4, content: 'Learn Spanish', completed: true},
      ],
      filter: 'all'
    }
  }

  addToDo = (newToDo) => {
    const newId = this.state.toDos.length+1;
    const newTask = { id: newId, content: newToDo, completed: false}
    const newToDos = [ ...this.state.toDos ];
    newToDos.push(newTask); // siempre hay que crear una nueva lista de states
    this.setState({ // con setState: cada vez que se tipea en el input se renderea()
      toDos : newToDos,
      //inputValue : ''
    });
  }

  setCompleted = (key) => {
    const tasks = [ ...this.state.toDos ];
    for (let i=0; i<tasks.length; i++) {
      if (key === tasks[i].id) {
        if (tasks[i].completed === false) {
          tasks[i].completed = true;
        } else {
          tasks[i].completed = false;
        }
      }
    }
    this.setState({
      toDos : tasks
    })
  }

  setFilter = (newFilter) => {
      this.setState({
        filter : newFilter
      })
  }

  deleteTask = (id) => {
    const tasks = [ ...this.state.toDos ];
    for (let i=0; i<tasks.length; i++) {
      if (id === tasks[i].id) {
        tasks.pop(tasks[i]);
      }
    }
    this.setState({
      toDos : tasks
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header /><br/>
        <NewToDo addToDo={this.addToDo} /><br/>
        <Filter setFilter={this.setFilter}/>
        <ToDoList toDos={ this.state.toDos } filter={ this.state.filter } delete={ this.deleteTask} setCompleted={this.setCompleted}/>
      </div>
    );
  }
}
// todo lo que se envia en el return del render -> va al props
// <p className="App-intro">
        //   To get started, edit <code>{ 'src/App.js' }</code> and save to reload.
        // </p>
export default App;
