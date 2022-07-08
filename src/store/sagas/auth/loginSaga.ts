import { put, takeEvery } from 'redux-saga/effects';
import { FirebaseError } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import { LoginActionTypes, LoginFirabaseAction } from '../../types/auth/loginTypes';
import { loginFail, loginStart, loginSuccess } from '../../actions/auth/loginAction';

function* loginWorker(action: LoginFirabaseAction) {
  try {
    const { email, password } = action.payload;
    yield put(loginStart());
    const { user } = yield auth().signInWithEmailAndPassword(email, password);
    yield put(loginSuccess(user));
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      put(loginFail(error.name));
    }
  }
}

export function* authLoginWatcher() {
  yield takeEvery(LoginActionTypes.LOGIN_FIREBASE, loginWorker);
}
