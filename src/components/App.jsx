import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import useLocalStorage from 'hooks/useLocalStorage';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import { createContext } from 'react';
import { Switch } from './Switch/Switch';

export const ThemeContext = createContext(null);

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');
  const [theme, setTheme] = useState('dark');

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

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container id={theme}>
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
            <TextStyled>
              Phonebook is empty! <br /> Add your contacts.
            </TextStyled>
          )}
          <Toaster position="top-center" reverseOrder={false} />
          <Switch theme={theme} toggleTheme={toggleTheme} />
        </div>
      </Container>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  padding: 30px;
  outline: 1px solid white;
  box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,
    0 0 60px #008296, 0 0 80px #008296;
`;
const TextStyled = styled.h3`
  margin-top: 70px;
  font-size: 22px;
`;
