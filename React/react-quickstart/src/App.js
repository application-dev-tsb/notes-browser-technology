import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Todo from './model';
import TodoItem from './TodoItem';
import TodoEdit from './TodoEdit';

class App extends Component {

  todoList = [new Todo('Test', new Date()), new Todo('Test2', new Date())];

  render() {
    const todoItems = this.todoList.map((todo, i) =>
      <TodoItem key={i} todo={todo} />
    );

    return (
      <div className="App">
        <Clock />
        <h1>My Todo Items:</h1>
        {todoItems}
        <TodoEdit />
      </div>
    );
  }

}

export default App;
