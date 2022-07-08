import { put, takeEvery } from 'redux-saga/effects';
import { FirebaseError } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import { LogoutActionTypes } from '../../types/auth/logoutTypes';
import { logoutFail, logoutStart, logoutSuccess } from '../../actions/auth/logoutAction';

function* logoutWorker() {
  try {
    yield put(logoutStart());
    yield auth().signOut();
    yield put(logoutSuccess(null));
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      put(logoutFail(error.name));
    }
  }
}

export function* authLogoutWatcher() {
  yield takeEvery(LogoutActionTypes.LOGOUT_FIREBASE, logoutWorker);
}
