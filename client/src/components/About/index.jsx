import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles.css';
import loadCurriculum from '../../redux/actions/actionCreators';

function About({ dispatch, curriculum: { personalData } }) {
  useEffect(() => {
    if (!personalData) dispatch(loadCurriculum());
  }, []);

  return (
    <section className="about">
      <div className="about__description">
        <h2 className="title-section">About</h2>
        <p>{personalData?.description}</p>
      </div>
      <i className="fas fa-desktop about__img" />
    </section>
  );
}

About.propTypes = {
  curriculum: PropTypes.shape({
    personalData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(About);
