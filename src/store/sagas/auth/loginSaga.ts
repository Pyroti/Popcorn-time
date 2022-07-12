import { put, takeEvery } from 'redux-saga/effects';
import auth from '@react-native-firebase/auth';
import { LoginActionTypes, LoginFirabaseAction } from '../../types/auth/loginTypes';
import { loginFail, loginStart, loginSuccess } from '../../actions/auth/loginAction';

function* loginWorker(action: LoginFirabaseAction) {
  try {
    const { email, password } = action.payload;
    yield put(loginStart());
    const { user } = yield auth().signInWithEmailAndPassword(email, password);
    yield put(loginSuccess(user));
  } catch (error: any) {
    yield put(loginFail(error.code));
  }
}

export function* authLoginWatcher() {
  yield takeEvery(LoginActionTypes.LOGIN_FIREBASE, loginWorker);
}
