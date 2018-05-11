import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ name }) => (
  <h1>{name}</h1>
);

Title.propTypes = {
  name: PropTypes.string
};

export default Title;
