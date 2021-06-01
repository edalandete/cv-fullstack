/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import './styles.css';
import loadCurriculum from '../../redux/actions/actionCreators';

function Education({ dispatch, curriculum: { studies } }) {
  useEffect(() => {
    if (!studies) dispatch(loadCurriculum());
  }, []);

  return (
    <section className="education">
      <h2 className="title-section">My Education</h2>
      <ul className="education__list">
        { studies && studies.oficial.length && studies.oficial.map((study) => (
          <li className="list__study-item" key={study._id}>
            <h3 className="study-item__title">{study.school}</h3>
            <p>
              <span className="dates">{dayjs('2019-01-25').format('YYYY')}</span>
              {'  -  '}
              {study.title}
            </p>
            <p>{study.description}</p>
          </li>
        ))}
      </ul>
      <ul className="education__list">
        { studies && studies.oficial.length && studies.languages.map((language) => (
          <li className="list__study-item" key={language._id}>
            <h3 className="study-item__title">{language.name}</h3>
            <p>
              <span className="dates">{language.level}</span>
              {'  -  '}
              {language.certification ? (language.certification) : 'Home language'}
            </p>
            <p>{language.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

Education.propTypes = {
  curriculum: PropTypes.shape({
    studies: PropTypes.arrayOf(
      PropTypes.shape({
        official: PropTypes.arrayOf(
          PropTypes.shape({

          }).isRequired,
        ),
        languages: PropTypes.shape({}).isRequired,
      }).isRequired,
    ),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(Education);
