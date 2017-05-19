import React, { Component } from 'react';
import './hello.css';

class Hello extends Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      text: props.date.toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({
        text:new Date().toLocaleTimeString()
      }),
      1000
    );
  } 

  handleClick(e){
    var date = new Date();
    this.setState((prevState)=>(
      {
        text:'clicked'
      }
    ))
  }
  renderList(){
    const list = ['A','B','C','D'];
    var items = list.map((item,i)=>
        <li key={item}>{item}</li>
    );
 
    return (
      <ul>{items}</ul>
    )
  }
  render() {
    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
          <h3 onClick={this.handleClick.bind(this)}>{this.state.text}</h3>
          {this.renderList()}
        </div>
    );
  }
}


export default Hello;
