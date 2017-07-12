import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Todo from './model';
import TodoItem from './TodoItem';

class App extends Component {

  todoList = [new Todo('Test', new Date()), new Todo('Test2', new Date())];

  render() {
    return (
      <div className="App">
        <Clock />
        <h1>My Todo Items:</h1>
        {this.todoList.map((todo, i) => <TodoItem key={i} todo={todo} />)}
      </div>
    );
  }

  renderTodoItem(index, todo) {
    return <TodoItem todo="{todo}" />
  }
}

export default App;
