import React, { Component, Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { decrementCounter, incrementDelay } from './Actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.dec = this.dec.bind(this);
  }


  //this binded implicit
  inc = () => {
    //this.props.dispatch(incrementCounter())
    this.props.inc()
  }

  //need this to be bind
  dec() {
    // before mapDispatchToProps
    // this.props.dispatch(decrementCounter())
    // after
    this.props.decrementCounter()
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

// if we not specify that paramter in connect 
// we will get a dispatch method as props
const mapDispatchToProps = { /*func new name ->*/ inc : incrementDelay, decrementCounter }

export default connect(mapStateToProps, mapDispatchToProps)(App);

