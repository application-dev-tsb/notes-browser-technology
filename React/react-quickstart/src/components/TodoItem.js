import React, { Component } from 'react';

export default class TodoItem extends Component {

  render() {
    
    return (
      <div>
        <div>Task: {this.props.todo.description} </div>
        <div>Deadline: {this.props.todo.date.toLocaleDateString()} {this.props.todo.date.toLocaleTimeString()} </div>
      </div>
    );
  }
}
