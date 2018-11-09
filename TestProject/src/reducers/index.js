import { combineReducers } from 'redux';
import VideoListReducer from './VideoListReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    videoList: VideoListReducer,
    selectVideo: SelectionReducer,
  });