import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Todo from './models/Todo';
import TodoItem from './components/TodoItem';
import TodoEdit from './components/TodoEdit';

export default class App extends Component {

  todoList = [new Todo('Test', new Date()), new Todo('Test2', new Date())];

  render() {
    const todoItems = this.todoList.map((todo, i) =>
      <TodoItem key={i} todo={todo} />
    );

    return (
      <div className="App">
        <Clock />
        <hr/>
        <h1>My Todo Items:</h1>
        {todoItems}
        <hr/>
        <TodoEdit />
      </div>
    );
  }

}
