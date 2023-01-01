// import { useState, useEffect } from 'react';
import { useLocalStorage } from './Hooks/useLocalStorage';
import { GlobalStyle } from './Utils/GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Section } from './Section/Section';
import { useState } from 'react';

export function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', []);

  // const [filter, setFilter] = useState('');

  // // *const addContact = (name, number) => {
  // const addContact = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     //* name,
  //     //* number,
  //     ...data,
  //   };

  //   const isNameExist = contacts.find(({ name, number }) => {
  //     return name === newContact.name || number === newContact.number;
  //   });

  //   isNameExist
  //     ? window.alert(`${newContact.name} is alredy in contacts!`)
  //     : setContacts(prevS => [newContact, ...prevS]);
  // };

  // const deleteContact = iD => {
  //   setContacts(prevContacts => prevContacts.filter(({ id }) => id !== iD));
  // };

  // const onFilterChange = ev => {
  //   setFilter(ev.target.value);
  // };

  // const getFilteredContacts = () =>
  //   contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  // const showContactsOptions = () => {
  //   return filter ? getFilteredContacts() : contacts;
  // };

  // const options = showContactsOptions();
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList
        // options={options}
        // onClickDelete={deleteContact}
        ></ContactList>
      </Section>

      <GlobalStyle />
    </>
  );
}
