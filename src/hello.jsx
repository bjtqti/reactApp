import React, { Component } from 'react';
import './hello.css';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '点击试试'
    };
  }
  handleClick(e){
    var date = new Date();
    this.setState({
      text:date.toLocaleTimeString()
    })
  }
  render() {
    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
          <h3 onClick={this.handleClick.bind(this)}>{this.state.text}</h3>
        </div>
    );
  }
}


export default Hello;
