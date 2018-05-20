import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Intent, Tag } from '@blueprintjs/core';

const DAY_LL = 'dddd, LL';

export const MomentDate = (date) => {
  const m = moment(date);
  if (m.isValid()) {
    return <Tag intent={Intent.PRIMARY}>{m.format(DAY_LL)}</Tag>;
  }
  return <Tag minimal>no date</Tag>;
};


MomentDate.propTypes = {
  date: PropTypes.date
};

const mapStateToProps = (state) => {
  return {
    date: state.date
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MomentDate);
