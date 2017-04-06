import React, { PropTypes } from 'react';

const A = ({ href, name, title }) => (
  <a
    href={href}
    target="blank"
    title={title || name}
    className="link"
  >
    {name}
  </a>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
};

A.defaultProps = {
  title: '',
};

export default A;
