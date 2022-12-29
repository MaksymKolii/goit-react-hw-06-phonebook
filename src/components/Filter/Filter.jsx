import React, { Component } from 'react';
import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.filterChange}
          value={this.props.filtered}
        />
      </Label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
