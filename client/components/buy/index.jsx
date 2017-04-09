import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Buy = ({ pricesSum, confirm }) => (
  <div className="buy-wrapper">
    <div className="buy">
      <p className="buy__description">
        Thank you, you bought books in sum
        <span> {pricesSum}$</span>,
        we send order to your e-mail
      </p>
      <button className="button" onClick={() => confirm()}>
        ok
      </button>
    </div>
  </div>
);


Buy.propTypes = {
  pricesSum: PropTypes.number.isRequired,
  confirm: PropTypes.func,
};

export default connect(
  ({ pricesSum }) => ({ pricesSum })
)(Buy);
