import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputChange } from '../../actions';
import { InputGroup } from '@blueprintjs/core';

const PLACEHOLDER = 'Fund Code';

const FundCode = ({ fundCode, handleChange }) => {
  return (
    <InputGroup
      className="pt-fill"
      onChange={ handleChange }
      value={ fundCode }
      placeholder={ PLACEHOLDER }
    />
  );
};

FundCode.propTypes = {
  fundCode: PropTypes.string,
  handleChange: PropTypes.func
};

const mapStateToProps = state => {
  return {
    fundCode: state.organizationReducer.fundCode
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(inputChange(event.target.value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundCode);
