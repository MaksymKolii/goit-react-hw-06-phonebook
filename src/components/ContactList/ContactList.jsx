import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selector';

import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

import { List } from '../ContactItem/ContactItem.styled';
import { ListUl } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  console.log(contacts);

  // const dispatch = useDispatch();
  // console.log(users);

  // const getFilteredContacts = () =>
  //   contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  // contacts.length !== 0 && getFilteredContacts.length !== 0;

  const showContactsOptions = () => {
    return filter ? getFilteredContacts : contacts;
  };

  const options = showContactsOptions();

  return (
    <>
      <ListUl>
        {contacts.map(({ id, name, number }) => (
          <List key={id}>
            <ContactItem id={id} name={name} number={number}></ContactItem>
          </List>
        ))}
      </ListUl>
      {/* <p>
        Your list does not contain the contact named
        <span> {filter}</span>
      </p> */}
    </>
  );
}

ContactList.propTypes = {
  children: PropTypes.node,
};
