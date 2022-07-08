import firebase from 'firebase/compat/app';
import { LoginGoogleAction, LoginGoogleActionTypes } from '../types/auth/loginGoogleTypes';
import { LoginAction, LoginActionTypes } from '../types/auth/loginTypes';
import { LogoutAction, LogoutActionTypes } from '../types/auth/logoutTypes';
import { RegisterAction, RegisterActionTypes } from '../types/auth/registerTypes';

export interface AuthState {
  loading: boolean;
  currentUser: firebase.User | null;
  error: firebase.User | string | null;
}

const initialState: AuthState = {
  loading: false,
  currentUser: null,
  error: null,
};

type ActionTypes = RegisterAction | LoginAction | LogoutAction | LoginGoogleAction;

const authReducer = (state = initialState, action: ActionTypes): AuthState => {
  switch (action.type) {
    case RegisterActionTypes.REGISTER_START:
    case LoginActionTypes.LOGIN_START:
    case LogoutActionTypes.LOGOUT_START:
    case LoginGoogleActionTypes.LOGIN_GOOGLE_START:
      return {
        ...state,
        loading: true,
      };
    case RegisterActionTypes.REGISTER_SUCCESS:
    case LoginActionTypes.LOGIN_SUCCESS:
    case LogoutActionTypes.LOGOUT_SUCCESS:
    case LoginGoogleActionTypes.LOGIN_GOOGLE_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload.user,
        error: null,
      };
    case RegisterActionTypes.REGISTER_FAIL:
    case LoginActionTypes.LOGIN_FAIL:
    case LogoutActionTypes.LOGOUT_FAIL:
    case LoginGoogleActionTypes.LOGIN_GOOGLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
