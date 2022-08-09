import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import styled from 'styled-components';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitData = (name, number) => {
    const addContact = { id: nanoid(7), name, number };

    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${name} is in your Contacts`);
      return;
    }

    const sortArr = [...contacts, addContact].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContacts(sortArr);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleFilter = () =>
    contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));

  const empty = () => contacts.length > 0;

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <Form onData={formSubmitData} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={changeFilter} />
        {empty() ? (
          <ContactList
            contacts={getVisibleFilter()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <h3 style={{ marginTop: '55px', fontSize: '18px' }}>
            Phonebook is empty! Add your contacts.
          </h3>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
