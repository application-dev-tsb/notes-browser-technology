import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Lyndon',
      lastName: 'Bibera'
    };

    const sampleJSX = (<div>Hi Im a JSX Statement</div>);

    return (
      <div className="App">
        <InternalComponent name="Test" />
        { sampleJSX }
        <span>Hello {this.formatName(user)}</span>
      </div>
    );
  }
}

class InternalComponent extends Component {
  
  render() {
    return (
      <div>
        Internal Component with name = {this.props.name}
      </div>
    );
  }
}

export default App;
