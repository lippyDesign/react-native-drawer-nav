import { FETCH_YOUTUBE, FETCH_METRICS } from '../actions';

const INITIAL_STATE = {
  youtubeStats: [],
  videos: [],
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
      case FETCH_YOUTUBE:
        return { ...state, videos: [...action.payload.data.items] };

      case FETCH_METRICS:
        const youtubeStats = [...state.youtubeStats, ...action.payload.data.items];
        return { ...state, youtubeStats };
      default:
        return state;
    }
}