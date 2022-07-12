export enum LogoutActionTypes {
  LOGOUT_START = 'LOGOUT_START',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_FAIL = 'LOGOUT_FAIL',
  LOGOUT_FIREBASE = 'LOGOUT_FIREBASE',
}

export interface registerFirabaseAction {
  type: LogoutActionTypes.LOGOUT_FIREBASE;
}

export interface LogoutStartAction {
  type: LogoutActionTypes.LOGOUT_START;
}

interface LogoutSuccessAction {
  type: LogoutActionTypes.LOGOUT_SUCCESS;
  payload: {
    user: null;
  };
}

interface LogoutFailAction {
  type: LogoutActionTypes.LOGOUT_FAIL;
  payload: {
    error: string;
  };
}

export type LogoutAction =
  | LogoutStartAction
  | LogoutSuccessAction
  | LogoutFailAction
  | registerFirabaseAction;
