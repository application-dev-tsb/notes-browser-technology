import React, { Component } from 'react';

export default class TodoEdit extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		deadline: '',
  		detail: 'Write Something Here...'
  	};

  	this.handleChangeDeadline = this.handleChangeDeadline.bind(this);
  	this.handleChangeDetail = this.handleChangeDetail.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDeadline(event) {
  	console.log('change:', event);
  	this.setState({
  		deadline: event.target.value
  	});
  }

  handleChangeDetail(event) {
  	console.log('change:', event);
  	this.setState({
  		detail: event.target.value
  	});
  }

  handleSubmit(event) {
  	console.log('A name was submitted: ', this.state.value);
    event.preventDefault();
  }

  render() {
   
    return (
      <form onSubmit={this.handleSubmit}>
      	<label>
      		TODO:
      		<textarea value={this.state.detail} onChange={this.handleChangeDetail}>
      		</textarea>
      	</label>
      	<br/>
      	<label>
      		Deadline:
      		<input type="datetime" value={this.state.deadline} onChange={this.handleChangeDeadline} />
      	</label>
      	<input type="submit" value="Submit" />
      </form>
    );
  }

}
