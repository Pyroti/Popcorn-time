import firebase from 'firebase/compat/app';

export enum LoginGoogleActionTypes {
  LOGIN_GOOGLE_START = 'LOGIN__GOOGLE_START',
  LOGIN_GOOGLE_SUCCESS = 'LOGIN__GOOGLE_SUCCESS',
  LOGIN_GOOGLE_FAIL = 'LOGIN__GOOGLE_FAIL',
  LOGIN_GOOGLE_FIREBASE = 'LOGIN__GOOGLE_FIREBASE',
}

export interface LoginGoogleFirabaseAction {
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_FIREBASE;
}

export interface LoginGoogleStartAction {
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_START;
}

interface LoginGoogleSuccessAction {
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_SUCCESS;
  payload: {
    user: firebase.User | null;
  };
}

interface LoginGoogleFailAction {
  type: LoginGoogleActionTypes.LOGIN_GOOGLE_FAIL;
  payload: {
    error: string;
  };
}

export type LoginGoogleAction =
  | LoginGoogleStartAction
  | LoginGoogleSuccessAction
  | LoginGoogleFailAction
  | LoginGoogleFirabaseAction;
