# React JS

## Creating an App
```
sudo npm install -g create-react-app
create-react-app react-quickstart
cd react-quickstart
npm start
```

## Properties
- read-only 
```javascript
class SomeComponent extends Component {

  render() {
	return(<div>{this.props.someValue}</div>);
  }
```
```html
<SomeComponent someValue="Test" />

<!-- renders <div>Test</div> -->
```

## State
- mutable
```javascript
//to set
this.setState({
	date: new Date()
});

//to access from JSX
{this.state.date.toLocaleTimeString()}
```

#### Resources
- [React Tutorial](https://facebook.github.io/react/tutorial/tutorial.html)
