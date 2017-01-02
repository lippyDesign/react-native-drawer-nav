import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NoteReducer from './NoteReducer';
import NotesReducer from './NotesReducer';

export default combineReducers({
    auth: AuthReducer,
    note: NoteReducer,
    notes: NotesReducer
});
