
import { takeLatest, delay, put, fork } from 'redux-saga/effects'
import { incrementCounter, INC, INC_DELAYED } from './Actions'


function* increaseCounter(action){
    console.log("I am called too (before delay)")
    yield delay(500)
    console.log("I am called too (after delay)")
    yield put(incrementCounter())
}

function* increaseSaga() {
    yield takeLatest(INC_DELAYED, increaseCounter);
  }


  export default function* rootSaga() {
    yield fork(increaseSaga)
    // code after fork-effect
  }