import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './Actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.dec = this.dec.bind(this);
  }


  //this binded implicit
  inc = () => {
    this.props.dispatch(incrementCounter())
  }

  //need this to be bind
  dec() {
    this.props.dispatch(decrementCounter())
  }

  render() {
    return (
      <Fragment>
        <label>Counter: {this.props.counter}</label>
        <div>
          <button type="button" onClick={this.inc} >Increase</button>
          <button type="button" onClick={this.dec}>Decrease</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(App);

