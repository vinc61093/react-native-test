import { SELECT_VIDEO } from './type'; 

export const selectVideo = (videoId) => {
    return {
      type: SELECT_VIDEO,
      payload: videoId
    };
  };