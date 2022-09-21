import { useState, createContext } from 'react';
import { WrapperContacts } from './ContactsPage.styled';
// import { Toaster } from 'react-hot-toast';
import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Switch } from 'components/Switch/Switch';
import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';
import { Container, TextStyled } from './ContactsPage.styled';

export const ThemeContext = createContext(null);

const ContactsPage = () => {
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
        <WrapperContacts>
          <h1>Phonebook</h1>
          <Form onData={onAddContact} />
        </WrapperContacts>
        <WrapperContacts>
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
          {/* <Toaster position="top-center" reverseOrder={false} /> */}
          <Switch theme={theme} toggleTheme={toggleTheme} />
        </WrapperContacts>
      </Container>
    </ThemeContext.Provider>
  );
};
export default ContactsPage;
