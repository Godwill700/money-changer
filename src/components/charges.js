import React from "react";
import PropTypes from "prop-types";

const Charges = (props) => {
  return (
    <div className="main-charges">
      <label htmlFor="charge">Charges</label>
      <div className="range-btn">
        <span className="increase">+</span>
        <span className="percent">5%</span>
        <span className="decrease">-</span>
      </div>
    </div>
  );
};

export default Charges;
