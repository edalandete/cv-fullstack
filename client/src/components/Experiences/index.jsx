import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import dayjs from 'dayjs';
import loadCurriculum from '../../redux/actions/actionCreators';

function Experiences({ dispatch, curriculum: { workExperience } }) {
  useEffect(() => {
    if (!workExperience) dispatch(loadCurriculum());
  }, []);

  return (
    <ul className="timeline">
      {
        workExperience && workExperience.map((experience, index) => (
          <li>
            <div className={index % 2 === 0 ? 'direction-r' : 'direction-l'}>
              <div className="flag-wrapper">
                <span className="flag">{experience.companyName}</span>
                <span className="time-wrapper">
                  <span className="time">
                    {dayjs(experience.startDate).format('YYYY')}
                    {' '}
                    -
                    {' '}
                    {dayjs(experience.finishDate).format('YYYY')}
                  </span>
                </span>
              </div>
              <div className="desc">
                {experience.role}
                {'. '}
                {' '}
                {experience.description}
              </div>
            </div>
          </li>
        ))
      }

    </ul>
  );
}

Experiences.propTypes = {
  curriculum: PropTypes.shape({
    workExperience: PropTypes.arrayOf(
      PropTypes.shape({}).isRequired
    ).isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(Experiences);
