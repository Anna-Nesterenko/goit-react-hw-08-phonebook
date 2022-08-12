import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const formSubmitData = (name, number) => {
    const addContact = { id: nanoid(7), name, number };

    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      toast.error(`${name} is in your Contacts`);
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

  console.log('render :>> ');

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <Form onData={formSubmitData} />
      </div>
      <div>
        <h2>Contacts</h2>
        {empty() ? (
          <>
            <Filter value={filter} onChangeFilter={changeFilter} />
            <ContactList
              contacts={getVisibleFilter()}
              onDeleteContact={deleteContact}
            />
          </>
        ) : (
          <h3 style={{ marginTop: '70px', fontSize: '22px' }}>
            Phonebook is empty! <br /> Add your contacts.
          </h3>
        )}
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 30px;
  outline: 1px solid white;
  box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,
    0 0 60px #008296;
`;
