import { LogoutAction, LogoutActionTypes } from '../../types/auth/logoutTypes';

export const logoutStart = (): LogoutAction => ({
  type: LogoutActionTypes.LOGOUT_START,
});

export const logoutSuccess = (user: null): LogoutAction => ({
  type: LogoutActionTypes.LOGOUT_SUCCESS,
  payload: {
    user,
  },
});

export const logoutFail = (error: string): LogoutAction => ({
  type: LogoutActionTypes.LOGOUT_FAIL,
  payload: {
    error,
  },
});

export const logoutFirebase = (): LogoutAction => ({
  type: LogoutActionTypes.LOGOUT_FIREBASE,
});
