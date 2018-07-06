import React from 'react';
import PropTypes from 'prop-types';
import { NumericInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Fund Code';

const FundCode = ({ fundcode, handleFundCodeChange }) => (
  <NumericInput
    className="pt-fill"
    onValueChange={handleFundCodeChange}
    value={fundcode}
    placeholder={PLACEHOLDER}
    selectAllOnFocus
    allowNumericCharactersOnly
  />
);

FundCode.propTypes = {
  fundcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleFundCodeChange: PropTypes.func.isRequired
};

export default FundCode;
