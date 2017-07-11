import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

class App extends Component {

  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  render() {
    const user = {
      firstName: 'Lyndon',
      lastName: 'Bibera'
    };

    const internal1 = <InternalComponent name="Internal Component 1" />;
    const internal2 = <InternalComponent name="Internal Component 2" />;


    //const sampleJSX = (<div>Hi Im a JSX Statement</div>);
    //{ sampleJSX }
    return (
      <div className="App">
        <InternalComponent name="Test" />
        {internal1}
        {internal2}
        <span>Hello {this.formatName(user)}</span>
        <Clock />
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
