import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_CV_API_DEV;

export default function loadCurriculum() {
  return async (dispatch) => {
    try {
      const { data } = await axios(url);
      dispatch({
        type: actionTypes.LOAD_CURRICULUM,
        curriculum: data[0],
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_CURRICULUM_ERROR,
      });
    }
  };
}
