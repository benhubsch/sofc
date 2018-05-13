import React, { Component } from 'react';
import _ from 'lodash';
import IsEmail from 'isemail';
import { TagInput } from '@blueprintjs/core';

const PLACEHOLDER = 'Type contact email(s).';
const LEFT_ICON = 'envelope';

export default class EmailBox extends Component {

  constructor(props) {
    super(props);
    this.handleTagAdd = this.handleTagAdd.bind(this);
    this.handleTagRemove = this.handleTagRemove.bind(this);
    this.state = {
      emails: []
    };
  }

  handleTagAdd(values) {
    var emails = this.validateEmails(values);
    this.setState({ emails: this.state.emails.concat(emails) });
  }

  validateEmails(values) {
    var emails = [];
    _(values).each((input) => {
      if (IsEmail.validate(input)) {
        emails.push(input);
      } else {
        console.log('NOT AN EMAIL', input);
      }
    });
    return emails;
  }

  handleTagRemove(value, dex) {
    this.state.emails.splice(dex, 1);
    this.setState({ emails: this.state.emails.slice() });
  }

  render() {
    return (
      <TagInput
        onAdd={ this.handleTagAdd }
        onRemove={ this.handleTagRemove }
        values={ this.state.emails }
        leftIcon={ LEFT_ICON }
        placeholder={ PLACEHOLDER }
        addOnBlur
      />
    );
  }

}
