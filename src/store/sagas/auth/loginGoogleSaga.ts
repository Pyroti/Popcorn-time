import { put, takeEvery } from 'redux-saga/effects';
import { FirebaseError } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginGoogleActionTypes } from '../../types/auth/loginGoogleTypes';
import {
  loginGoogleFail,
  loginGoogleStart,
  loginGoogleSuccess,
} from '../../actions/auth/loginGoogleAction';

GoogleSignin.configure({
  webClientId: '502971375351-vvuhjuq6l4k0tedo390vslhctt0fvkrq.apps.googleusercontent.com',
});

function* loginGoogleWorker() {
  try {
    yield put(loginGoogleStart());
    const { idToken } = yield GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const { user } = yield auth().signInWithCredential(googleCredential);
    yield put(loginGoogleSuccess(user));
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      put(loginGoogleFail(error.name));
    }
  }
}

export function* authLoginGoogleWatcher() {
  yield takeEvery(LoginGoogleActionTypes.LOGIN_GOOGLE_FIREBASE, loginGoogleWorker);
}
