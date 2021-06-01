import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';

import loadCurriculum from '../../redux/actions/actionCreators';

function Header({ dispatch, curriculum }) {
  useEffect(() => {
    if (!curriculum?.personalData?.name) dispatch(loadCurriculum());
  }, []);

  return (
    <>
      <nav className="main-navigator">
        <div className="main-navigator__logo">
          <Link className="link" to="/">{curriculum?.personalData?.name}</Link>
        </div>
        <ul className="main-navigator__list">
          <li className="list__item"><Link className="link" to="/about">About</Link></li>
          <li className="list__item"><Link className="link" to="/education">Education</Link></li>
          <li className="list__item"><Link className="link" to="/experiences">Experiences</Link></li>
          <li className="list__item"><Link className="link" to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </>
  );
}

Header.propTypes = {
  curriculum: PropTypes.shape({
    personalData: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(Header);
