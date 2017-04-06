import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import A from '../../components/a';

const Features = ({ features }) => {
  features = features.map((feature, index) => (
    <li className="feature" key={index}>
      <A {...feature} />
    </li>
  ));

  return (
    <ol className="features">
      {features}
    </ol>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default connect(
  ({ features }) => ({ features }),
)(Features);
