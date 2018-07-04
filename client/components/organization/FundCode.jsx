import React from 'react';
import PropTypes from 'prop-types';
import { NumericInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Fund Code';

const FundCode = ({ fundCode, handleFundCodeChange }) => (
  <NumericInput
    className="pt-fill"
    onValueChange={handleFundCodeChange}
    value={fundCode}
    placeholder={PLACEHOLDER}
    selectAllOnFocus
    allowNumericCharactersOnly
  />
);

FundCode.propTypes = {
  fundCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleFundCodeChange: PropTypes.func.isRequired
};

export default FundCode;
