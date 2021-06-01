import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Header />
  );
}

App.propTypes = {

};

const mapStateToProps = ({ curriculum }) => ({ curriculum });

export default connect(mapStateToProps)(App);
