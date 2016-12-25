import { FETCH_TWITTER } from '../actions';

const INITIAL_STATE = {
  tweets: {}
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
      case FETCH_TWITTER:
        return { ...state, tweets: action.payload.data };
      default:
        return state;
    }
}