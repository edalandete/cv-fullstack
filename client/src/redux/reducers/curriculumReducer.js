import actionTypes from '../actions/actionTypes';

export default function curriculumReducer(currentCurriculum = {}, { type, curriculum }) {
  let newCurriculum = { ...currentCurriculum };
  if (type === actionTypes.LOAD_CURRICULUM) {
    newCurriculum = curriculum;
  }

  return newCurriculum;
}
