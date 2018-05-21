import React, { Component } from 'react';
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

export default class GroupName extends Component {
  constructor(props) {
    super(props);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderInputValue = this.renderInputValue.bind(this);
    this.filterItem = this.filterItem.bind(this);
    this.state = {
      group: GROUPS[0]
    };
  }

  handleItemSelect(group) {
    this.setState({ group });
  }

  renderItem(group, itemProps) {
    const { handleClick, modifiers, query } = itemProps;
    // I don't have a predicate -- what is the behavior in this case?
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = group.name;
    return (
      <MenuItem
        active={ modifiers.active }
        label={ group.fundcode.toString() }
        key={ group.fundcode }
        onClick={ handleClick }
        text={ this.highlightText(text, query) }
      />
    );
  }

  highlightText(text, query) {
    let lastIndex = 0;
    const words = query
      .split(/\s+/)
      .filter(word => word.length > 0)
      .map(this.escapeRegExpChars);
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
  }

  escapeRegExpChars(text) {
    return text.replace(RegExp(/([.*+?^=!:${}()|[]\/\\])/g), '\\$1');
  }

  renderInputValue(group) {
    return group.name;
  }

  filterItem(query, group) {
    const groupLower = `${group.name} ${group.fundcode.toString()}`.toLowerCase();
    return groupLower.indexOf(query.toLowerCase()) >= 0;
  }

  render() {
    return (
      <Suggest
        items={ GROUPS }
        inputProps={{ placeholder: SEARCH }}
        itemRenderer={ this.renderItem }
        itemPredicate={ this.filterItem }
        onItemSelect={ this.handleItemSelect }
        inputValueRenderer={ this.renderInputValue }
        noResults={ <MenuItem disabled text="No results." /> }
      />
    );
  }
}
