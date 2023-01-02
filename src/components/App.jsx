import { GlobalStyle } from './Utils/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Section } from './Section/Section';

export function App() {
  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>

      <GlobalStyle />
    </>
  );
}
