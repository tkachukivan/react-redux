import React, { PropTypes } from 'react';
import Header from '../../components/header';

const Root = ({ children }) => (
  <div className="root">
    <Header />

    <div className="content">
      {children}
    </div>
  </div>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
