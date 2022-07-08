import { put, takeEvery } from 'redux-saga/effects';
import { FirebaseError } from 'firebase/app';
import auth from '@react-native-firebase/auth';
import { registerFail, registerStart, registerSuccess } from '../../actions/auth/registerAction';
import { RegisterActionTypes, registerFirabaseAction } from '../../types/auth/registerTypes';

function* registerWorker(action: registerFirabaseAction) {
  try {
    const { email, password, displayName } = action.payload;
    yield put(registerStart());
    yield auth().createUserWithEmailAndPassword(email, password);
    yield auth().currentUser?.updateProfile({
      displayName,
    });
    const user = auth().currentUser as firebase.default.User | null;
    yield put(registerSuccess(user));
  } catch (error: FirebaseError | unknown) {
    if (error instanceof FirebaseError) {
      put(registerFail(error.name));
    }
  }
}

export function* authRegisterWatcher() {
  yield takeEvery(RegisterActionTypes.REGISTER_FIREBASE, registerWorker);
}
