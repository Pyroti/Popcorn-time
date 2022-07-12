import firebase from 'firebase/compat/app';

export enum LoginActionTypes {
  LOGIN_START = 'LOGIN_START',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  LOGIN_FIREBASE = 'LOGIN_FIREBASE',
}

export interface LoginFirabaseAction {
  type: LoginActionTypes.LOGIN_FIREBASE;
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginStartAction {
  type: LoginActionTypes.LOGIN_START;
}

interface LoginSuccessAction {
  type: LoginActionTypes.LOGIN_SUCCESS;
  payload: {
    user: firebase.User | null;
  };
}

interface LoginFailAction {
  type: LoginActionTypes.LOGIN_FAIL;
  payload: {
    error: string;
  };
}

export type LoginAction =
  | LoginStartAction
  | LoginSuccessAction
  | LoginFailAction
  | LoginFirabaseAction;
