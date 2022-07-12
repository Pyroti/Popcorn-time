import firebase from 'firebase/compat/app';
import { LoginGoogleAction, LoginGoogleActionTypes } from '../../types/auth/loginGoogleTypes';

export const loginGoogleStart = (): LoginGoogleAction => ({
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_START,
});

export const loginGoogleSuccess = (user: firebase.User): LoginGoogleAction => ({
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_SUCCESS,
  payload: {
    user,
  },
});

export const loginGoogleFail = (error: string): LoginGoogleAction => ({
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_FAIL,
  payload: {
    error,
  },
});

export const loginGoogleFirabase = (): LoginGoogleAction => ({
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_FIREBASE,
});
