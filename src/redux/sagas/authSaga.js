
import {call, delay, put, takeLatest, takeEvery} from "@redux-saga/core/effects";

function* setUserName(){
    try{
        yield delay(2000);
        yield put({type: 'INCREMENT_SUCCESS'})
        yield delay(2000);
    }
    catch(e){
        yield put({type: 'INCREMENT_FAILED'})
        console.warn(e);
    }
}

const authSaga = [
    takeEvery('INCREMENT', setUserName)
];

export default authSaga;
