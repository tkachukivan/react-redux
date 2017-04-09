import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header';
import Loader from '../../components/loader';

const Root = ({ children, loader }) => (
  <div className="root">
    <Header />
    {loader &&
      <Loader />
    }
    <div className="content">
      {children}
    </div>
  </div>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
  loader: PropTypes.bool.isRequired
};

export default connect(
    ({ loader }) => ({ loader }),
)(Root);
