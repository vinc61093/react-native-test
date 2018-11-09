import { combineReducers } from 'redux';
import VideoListReducer from './VideoListReducer';

export default combineReducers({
    videoList: VideoListReducer,
  });