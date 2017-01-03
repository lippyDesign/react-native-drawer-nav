import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    NOTE_HEADING_CHANGED,
    NOTE_CONTENT_CHANGED,
    NOTE_CREATE,
    NOTES_FETCH_SUCCESS,
    NOTE_UPDATE,
    NOTE_SAVE_SUCCESS,
    NOTE_VIEW_CHANGED
} from './types';

export const noteHeadingChanged = (text) => (
    {
        type: NOTE_HEADING_CHANGED,
        payload: text
    }
);

export const noteContentChanged = (text) => (
    {
        type: NOTE_CONTENT_CHANGED,
        payload: text
    }
);

export const noteCreate = ({ noteHeadingText, noteContentText }) => {
    console.log('running noteCreate');
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes`)
            .push({ noteHeadingText, noteContentText })
            .then(() => {
                dispatch({ type: NOTE_CREATE, });
                Actions.notesList({ type: 'reset' });
            })
            .catch((error) => console.log(error));
    };
};

export const notesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes`)
            .on('value', snapshot => {
                dispatch({ type: NOTES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const noteUpdate = ({ prop, value }) => {
    return {
        type: NOTE_UPDATE,
        payload: { prop, value }
    };
};

export const noteSave = ({ noteHeadingText, noteContentText, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
            .set({ noteHeadingText, noteContentText })
            .then(() => {
                dispatch({ type: NOTE_SAVE_SUCCESS });
                Actions.notesList({ type: 'reset' });
            });
    };
};

export const noteDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/notes/${uid}`)
            .remove()
            .then(() => {
                Actions.notesList({ type: 'reset' });
            });
    };
};

export const setCurrentNoteView = (uid) => (
    {
        type: NOTE_VIEW_CHANGED,
        payload: uid
    }
);
