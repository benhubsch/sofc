import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectGroup } from '../../actions';
import { MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';

const GROUPS = [{
  name: 'Duke Catholic Center',
  fundcode: 1111111
}, {
  name: 'The Wild Ones',
  fundcode: 2222222
}];
const SEARCH = 'Organization Name';

const renderItem = (group, itemProps) => {
  const { handleClick, modifiers, query } = itemProps;
  const text = group.name;
  return (
    <MenuItem
      active={ modifiers.active }
      label={ group.fundcode.toString() }
      key={ group.fundcode }
      onClick={ handleClick }
      text={ highlightText(text, query) }
    />
  );
};

const highlightText = (text, query) => {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter(word => word.length > 0)
    .map((word) => escapeRegExpChars(word));
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join('|'), 'gi');
  const tokens: React.ReactNode[] = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
};

const escapeRegExpChars = text =>
  text.replace(RegExp(/([.*+?^=!:${}()|[]\/\\])/g), '\\$1');

const renderInputValue = group => group.name;

const filterItem = (query, group) => {
  const groupLower = `${group.name} ${group.fundcode.toString()}`.toLowerCase();
  return groupLower.indexOf(query.toLowerCase()) >= 0;
};

const GroupName = ({ handleItemSelect }) => {
  return (
    <Suggest
      items={ GROUPS }
      inputProps={{ placeholder: SEARCH }}
      itemRenderer={ renderItem }
      itemPredicate={ filterItem }
      onItemSelect={ handleItemSelect }
      inputValueRenderer={ renderInputValue }
      noResults={ <MenuItem disabled text="No results." /> }
    />
  );
};

GroupName.propTypes = {
  handleItemSelect: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleItemSelect: group => dispatch(selectGroup(group))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupName);
