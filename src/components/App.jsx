import { useState, createContext } from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Switch } from './Switch/Switch';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';
export const ThemeContext = createContext(null);

export function App() {
  const [theme, setTheme] = useState('dark');
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container id={theme}>
        <div>
          <h1>Phonebook</h1>
          <Form onData={onAddContact} />
        </div>
        <div>
          <h2>Contacts</h2>

          <Filter value={filter} onChangeFilter={onSetFilter} />
          {empty() ? (
            <>
              <ContactList
                contacts={contacts}
                onDeleteContact={onDeleteContact}
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
  margin-top: 50px;
  font-size: 22px;
`;
