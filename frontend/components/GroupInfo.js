import React, { Component } from 'react';
import { MenuItem } from '@blueprintjs/core';
import { Suggest } from '@blueprintjs/select';

const GROUPS = [{
  name: 'Duke Catholic Center',
  fundCode: 1111111
}, {
  name: 'The Wild Ones',
  fundCode: 2222222
}];
const SEARCH = 'Search for your group...';

export default class GroupInfo extends Component {

  constructor(props) {
    super(props);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderInputValue = this.renderInputValue.bind(this);
    this.state = {
      group: GROUPS[0]
    };
  }

  handleItemSelect(group) {
    console.log('onItemSelect');
    this.setState({ group });
  }

  renderItem(group, itemProps) {
    const { handleClick, modifiers, query } = itemProps;
    // I don't have a predicate -- what is the behavior in this case?
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = group.name;
    console.log('text', text);
    return (
        <MenuItem
            active={ modifiers.active }
            label={ group.fundCode.toString() }
            key={ group.fundCode }
            onClick={ handleClick }
            text={ text }
            // text={ highlightText(text, query) }
        />
    );
  }

//   highlightText(text, query) {
//     let lastIndex = 0;
//     const words = query
//         .split(/\s+/)
//         .filter(word => word.length > 0)
//         .map(escapeRegExpChars);
//     if (words.length === 0) {
//         return [text];
//     }
//     const regexp = new RegExp(words.join("|"), "gi");
//     const tokens: React.ReactNode[] = [];
//     while (true) {
//         const match = regexp.exec(text);
//         if (!match) {
//             break;
//         }
//         const length = match[0].length;
//         const before = text.slice(lastIndex, regexp.lastIndex - length);
//         if (before.length > 0) {
//             tokens.push(before);
//         }
//         lastIndex = regexp.lastIndex;
//         tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
//     }
//     const rest = text.slice(lastIndex);
//     if (rest.length > 0) {
//         tokens.push(rest);
//     }
//     return tokens;
// }

  renderInputValue(group) {
    return group.name;
  }

  render() {
    return (
      <Suggest
        items={ GROUPS }
        inputProps={{ placeholder: SEARCH }}
        itemRenderer={ this.renderItem }
        onItemSelect={ this.handleItemSelect }
        inputValueRenderer={ this.renderInputValue }
        // noResults={<MenuItem disabled text="No results." />}
      />
    );
  }

}
