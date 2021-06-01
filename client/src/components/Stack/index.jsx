/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import loadCurriculum from '../../redux/actions/actionCreators';

function Education({ dispatch, curriculum: { stack } }) {
  useEffect(() => {
    if (!stack) dispatch(loadCurriculum());
  }, []);

  return (
    <section className="stack">
      <h2 className="title-section">My Stack</h2>
      <ul className="education__list">
        { stack && stack.length && stack.map((technology) => (
          <li className="list__study-item" key={technology._id}>
            {
             technology.svg
               ? (<img alt={technology.name} src={`data:image/svg+xml;base64,${technology.svg}`} className="technology-logo" />)
               : (<p className="stack-title">{technology.name}</p>)
           }
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
