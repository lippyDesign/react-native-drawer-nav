import { combineReducers } from 'redux';
import YoutubeReducer from './YoutubeReducer';
import TwitterReducer from './TwitterReducer';

const rootReducer = combineReducers({
  youtube: YoutubeReducer,
  twitter: TwitterReducer
});

export default rootReducer;
