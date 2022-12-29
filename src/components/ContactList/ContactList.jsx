import React from 'react';

import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { List } from './ContactList.styled';

export function ContactList({ options, onClickDelete }) {
  return options.map(({ id, name, number }) => {
    return (
      <List key={id}>
        <ContactItem
          id={id}
          name={name}
          number={number}
          onClickDelete={() => onClickDelete(id)}
        ></ContactItem>
      </List>
    );
  });
}

ContactList.propTypes = {
  children: PropTypes.node,
};
