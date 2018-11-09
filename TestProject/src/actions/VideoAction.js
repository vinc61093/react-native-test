import { VIDEO_LIST_FETCH_SUCCESS } from './type';
import axios from 'axios';

const API_URL = 'https://private-c31a5-task27.apiary-mock.com'; 

export function videoListFetch() {  
	return function(dispatch) {
			axios.get(`${API_URL}/videos`)
			.then(response => {
			dispatch({
					type: VIDEO_LIST_FETCH_SUCCESS,
					payload: response.data
			});
			})
			.catch((error) => {
			console.log(error);
			})
	}
}
