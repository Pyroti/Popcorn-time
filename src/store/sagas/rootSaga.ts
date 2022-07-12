import { all } from 'redux-saga/effects';
import { authLoginGoogleWatcher } from './auth/loginGoogleSaga';
import { authLoginWatcher } from './auth/loginSaga';
import { authLogoutWatcher } from './auth/logoutSaga';
import { authRegisterWatcher } from './auth/registerSaga';

export function* rootWatcher() {
  yield all([
    authRegisterWatcher(),
    authLoginWatcher(),
    authLogoutWatcher(),
    authLoginGoogleWatcher(),
  ]);
}
