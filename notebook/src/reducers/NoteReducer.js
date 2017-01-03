import {
    NOTE_HEADING_CHANGED,
    NOTE_CONTENT_CHANGED,
    NOTE_CREATE,
    NOTE_UPDATE,
    NOTE_SAVE_SUCCESS,
    NOTE_VIEW_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    noteHeadingText: '',
    noteContentText: '',
    currentNote: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NOTE_HEADING_CHANGED:
            return { ...state, noteHeadingText: action.payload };
        case NOTE_CONTENT_CHANGED:
            return { ...state, noteContentText: action.payload };
        case NOTE_CREATE:
            return { ...INITIAL_STATE };
        case NOTE_UPDATE:
            //action.payload ==== { prop: 'noteHeadingChanged', value: 'My Note' }
            return { ...state, [action.payload.prop]: action.payload.value };
        case NOTE_SAVE_SUCCESS:
            return { ...INITIAL_STATE };
        case NOTE_VIEW_CHANGED:
            return { ...state, currentNote: action.payload };
        default:
            return state;
    }
};
