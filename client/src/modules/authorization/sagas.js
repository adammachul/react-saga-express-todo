import { takeLatest, call, put } from 'redux-saga';
import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE
} from './actions';

const API_URL = 'localhost:5000/api/auth/register';

// TODO: changes to sagas -> reduce it to one saga and action type for login and register.

function signupApi (email, password) {
    return axios.post(API_URL)
        .then(response => response.json())
        .catch(error => { throw error });
}

function * signupFlow(action) {
    try {
        const {email, password } = action;

        const response = yield call(signupApi, email, password);

        yield put({ type: SIGNUP_SUCCESS, response });
    } catch (error) {
        yield put({ types: SIGNUP_FAILURE, error });
    }
}

function * signupWatcher() {
    yield takeLatest(SIGNUP_REQUEST, signupFlow);
}

export default signupWatcher;