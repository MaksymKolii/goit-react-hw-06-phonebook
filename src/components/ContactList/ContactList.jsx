import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selector';

import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { List } from '../ContactItem/ContactItem.styled';
import { ListUl, P, Span } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const showContactsOptions = () => {
    return filter ? getFilteredContacts : contacts;
  };

  const options = showContactsOptions();

  return (
    <>
      <ListUl>
        {getFilteredContacts.length !== 0 ? (
          options.map(({ id, name, number }) => (
            <List key={id}>
              <ContactItem id={id} name={name} number={number}></ContactItem>
            </List>
          ))
        ) : (
          <P>
            You don't have any contacts named
            <Span> {filter}</Span>
          </P>
        )}
      </ListUl>
    </>
  );
}

ContactList.propTypes = {
  children: PropTypes.node,
};
