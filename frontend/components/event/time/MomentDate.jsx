import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Intent, Tag } from '@blueprintjs/core';

const DAY_LL = 'dddd, LL';

const MomentDate = ({ date }) => {
  const m = moment(date);
  if (m.isValid()) {
    return <Tag intent={Intent.PRIMARY}>{m.format(DAY_LL)}</Tag>;
  }
  return <Tag minimal>no date</Tag>;
};

MomentDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default MomentDate;
