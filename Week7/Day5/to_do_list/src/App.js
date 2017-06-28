import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import NewToDo from './components/NewToDo';
import Filter from './components/Filter';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
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
    newToDos.push(newTask);
    this.setState({ 
      toDos : newToDos,
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
        tasks.splice(i, 1);
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
        <Footer />
      </div>
    );
  }
}

export default App;
