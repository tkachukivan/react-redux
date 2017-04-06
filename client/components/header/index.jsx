import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => (
  <div className="header">
    <IndexLink
      to="/"
      className="link"
      activeClassName="link_active"
    >
      Home
    </IndexLink>

    <Link
      to="/features"
      className="link"
      activeClassName="link_active"
    >
      Libraries/Tools
    </Link>
  </div>
);
