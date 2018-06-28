import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Fund Code';

const FundCode = ({ fundCode, handleFundCodeChange }) => (
  <InputGroup
    className="pt-fill"
    onChange={handleFundCodeChange}
    value={fundCode}
    placeholder={PLACEHOLDER}
  />
);

FundCode.propTypes = {
  fundCode: PropTypes.string,
  handleFundCodeChange: PropTypes.func
};

export default FundCode;
