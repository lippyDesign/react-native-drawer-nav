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
    LOGIN_USER,
    RECOVERY_EMAIL_CHANGED,
    RECOVER_ACCOUNT,
    LOGOUT_USER_SUCCESS,
    PASSWORD_SENT_SUCCESS,
    PASSWORD_SENT_FAIL,
    DELETE_ACCOUNT_PASSWORD_CHANGED,
    CHANGE_PASSWORD_OLD_CHANGED,
    CHANGE_PASSWORD_NEW_CHANGED,
    CHANGE_PASSWORD_NEW_CONFIRM_CHANGED,
    SHOW_CHANGE_PASSWORD,
    HIDE_CHANGE_PASSWORD,
    PASSWORD_RESET_SUCCESS

} from '../actions/types';

const INITIAL_STATE = {
    registerEmailText: '',
    registerPasswordText: '',
    registerConfirmPasswordText: '',
    loginEmailText: '',
    loginPasswordText: '',
    user: null,
    error: '',
    loading: false,
    loggingOut: false,
    recoveryEmail: '',
    helperMessage: '',
    deleteAccountPasswordText: '',
    changePasswordTextOld: '',
    changePasswordTextNew: '',
    changePasswordTextNewConfirm: '',
    showPasswordChangeModal: false
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
        case RECOVERY_EMAIL_CHANGED:
            return { ...state, recoveryEmail: action.payload };
        case RECOVER_ACCOUNT:
            return { ...state, loading: true, error: '', helperMessage: '' };
        case LOGOUT_USER_SUCCESS:
            return { ...state, loggingOut: false };
        case PASSWORD_SENT_SUCCESS:
            return { ...state, ...INITIAL_STATE, helperMessage: 'Password Sent' };
        case PASSWORD_SENT_FAIL:
            return { ...state, ...INITIAL_STATE, helperMessage: action.payload };
        case DELETE_ACCOUNT_PASSWORD_CHANGED:
            return { ...state, deleteAccountPasswordText: action.payload };
        case SHOW_CHANGE_PASSWORD:
            return { ...state, showPasswordChangeModal: true };
        case HIDE_CHANGE_PASSWORD:
            return { ...state, showPasswordChangeModal: false };
        case CHANGE_PASSWORD_OLD_CHANGED:
            return { ...state, changePasswordTextOld: action.payload };
        case CHANGE_PASSWORD_NEW_CHANGED:
            return { ...state, changePasswordTextNew: action.payload };
        case CHANGE_PASSWORD_NEW_CONFIRM_CHANGED:
            return { ...state, changePasswordTextNewConfirm: action.payload };
        case PASSWORD_RESET_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        default:
            return state;
    }
};
