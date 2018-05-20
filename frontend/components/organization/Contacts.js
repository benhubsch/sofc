import React, { Component } from 'react';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Contact Person(s)';
const LEFT_ICON = 'people';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.handleTagAdd = this.handleTagAdd.bind(this);
    this.handleTagRemove = this.handleTagRemove.bind(this);
    this.state = {
      contacts: []
    };
  }

  handleTagAdd(values) {
    this.setState({ contacts: this.state.contacts.concat(values) });
  }

  handleTagRemove(value, dex) {
    this.state.contacts.splice(dex, 1);
    this.setState({ contacts: [...this.state.contacts] });
  }

  render() {
    return (
      <TagInput
        onAdd={ this.handleTagAdd }
        onRemove={ this.handleTagRemove }
        values={ this.state.contacts }
        leftIcon={ LEFT_ICON }
        placeholder={ PLACEHOLDER }
        addOnBlur
        fill
      />
    );
  }
}
