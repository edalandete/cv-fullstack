import { combineReducers } from 'redux';
import curriculum from './curriculumReducer';

const rootReducer = combineReducers({
  curriculum,
});

export default rootReducer;
