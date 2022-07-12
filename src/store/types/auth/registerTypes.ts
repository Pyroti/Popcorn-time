import firebase from 'firebase/compat/app';

export enum RegisterActionTypes {
  REGISTER_START = 'REGISTER_START',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  REGISTER_FIREBASE = 'REGISTER_FIREBASE',
}

export interface registerFirabaseAction {
  type: RegisterActionTypes.REGISTER_FIREBASE;
  payload: {
    email: string;
    password: string;
    displayName: string;
  };
}

export interface registerStartAction {
  type: RegisterActionTypes.REGISTER_START;
}

interface registerSuccessAction {
  type: RegisterActionTypes.REGISTER_SUCCESS;
  payload: {
    user: firebase.User | null;
  };
}

interface registerFailAction {
  type: RegisterActionTypes.REGISTER_FAIL;
  payload: {
    error: string;
  };
}

export type RegisterAction =
  | registerStartAction
  | registerSuccessAction
  | registerFailAction
  | registerFirabaseAction;
