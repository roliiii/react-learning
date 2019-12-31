import React, { Component, Fragment } from 'react';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {counter : 0};
    this.dec = this.dec.bind(this);
  }


  //this binded implicit
  inc = () => {
    this.setState({counter: this.state.counter + 1});
  }

  //need this to be bind
  dec(){
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <Fragment>
      <label>Counter: {this.state.counter}</label>
      <div>
       <button type="button" onClick={this.inc} >Increase</button>
       <button type="button" onClick={this.dec}>Decrease</button>
      </div>
      </Fragment>
    );
  }
}

