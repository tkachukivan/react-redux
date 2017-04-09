import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';

const Header = ({ addedBooks }) => (
  <div className="header">
    <nav className="header-nav">
      <IndexLink
        to="/"
        className="header-nav__item"
      >
        home
      </IndexLink>

      <Link
        to="/books"
        className="header-nav__item"
      >
        my books ({ addedBooks })
      </Link>
    </nav>
  </div>
);

Header.propTypes = {
  addedBooks: PropTypes.number.isRequired,
};

export default connect(
  ({ addedBooks }) => ({ addedBooks }),
)(Header);
