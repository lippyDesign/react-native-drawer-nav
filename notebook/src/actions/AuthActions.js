import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
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
} from './types';

/////////////////////////////////////////////////////// REGISTER ///////////////////////////////////

export const registerEmailChanged = (text) => (
    {
        type: REGISTER_EMAIL_CHANGED,
        payload: text
    }
);

export const registerPasswordChanged = (text) => (
    {
        type: REGISTER_PASSWORD_CHANGED,
        payload: text
    }
);

export const registerConfirmPasswordChanged = (text) => (
    {
        type: REGISTER_CONFIRM_PASSWORD_CHANGED,
        payload: text
    }
);

export const registerUser = ({ registerEmailText, registerPasswordText, registerConfirmPasswordText }) => {
    const hasAtChar = registerEmailText.includes('@');
    const hasDotChar = registerEmailText.includes('.');

    if (registerEmailText.legth < 5 || !hasAtChar || !hasDotChar) {
        return (dispatch) => {
            dispatch({ type: REGISTER_INVALID_EMAIL });
        };
    }

    if (registerPasswordText.length < 6 || (registerPasswordText !== registerConfirmPasswordText)) {
        return (dispatch) => {
            dispatch({ type: REGISTER_INVALID_PASSWORD });
        };
    }

    return (dispatch) => {
        dispatch({ type: REGISTER_USER });

        firebase.auth().createUserWithEmailAndPassword(registerEmailText, registerPasswordText)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(error => loginUserFail(dispatch, error));
    };
};

/////////////////////////////////////////////////////// LOGIN ///////////////////////////////////

export const loginEmailChanged = (text) => (
    {
        type: LOGIN_EMAIL_CHANGED,
        payload: text
    }
);

export const loginPasswordChanged = (text) => (
    {
        type: LOGIN_PASSWORD_CHANGED,
        payload: text
    }
);

export const loginUser = ({ loginEmailText, loginPasswordText }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(loginEmailText, loginPasswordText)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => loginUserFail(dispatch, error));
    };
};

/////////////////////////////////////////////////////// HELPERS ///////////////////////////////////

const loginUserFail = (dispatch, error) => {
    console.log(error.code);
    console.log(error.message);
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.main();
};
