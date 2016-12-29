import {
    REGISTER_EMAIL_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_CONFIRM_PASSWORD_CHANGED,
    REGISTER_USER,
    REGISTER_INVALID_EMAIL,
    REGISTER_INVALID_PASSWORD,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_EMAIL_CHANGED,
    LOGIN_PASSWORD_CHANGED,
    LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
    registerEmailText: '',
    registerPasswordText: '',
    registerConfirmPasswordText: '',
    loginEmailText: '',
    loginPasswordText: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_EMAIL_CHANGED:
            return { ...state, error: '', registerEmailText: action.payload };
        case REGISTER_PASSWORD_CHANGED:
            return { ...state, registerPasswordText: action.payload };
        case REGISTER_CONFIRM_PASSWORD_CHANGED:
            return { ...state, registerConfirmPasswordText: action.payload };
        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_INVALID_EMAIL:
            return {
                ...state,
                error: 'Invalid Email',
                registerPasswordText: '',
                registerConfirmPasswordText: '',
                loading: false
            };
        case REGISTER_INVALID_PASSWORD:
            return {
                ...state,
                error: 'Invalid Password(s)',
                registerPasswordText: '',
                registerConfirmPasswordText: '',
                loading: false
            };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: 'Authentication Failed',
                registerPasswordText: '',
                registerConfirmPasswordText: '',
                loginPasswordText: '',
                loading: false
            };
        case LOGIN_EMAIL_CHANGED:
            return { ...state, error: '', loginEmailText: action.payload };
        case LOGIN_PASSWORD_CHANGED:
            return { ...state, loginPasswordText: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
