import { AuthState } from '../redusers/authReducer';
import { RootState } from '../redusers/rootReducer';

const authSelector = (state: RootState): AuthState => state.auth;

export default authSelector;
