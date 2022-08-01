import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import styled from 'styled-components';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  formSubmitData = objContact => {
    const { contacts } = this.state;

    const addContact = {
      id: nanoid(7),
      ...objContact,
    };

    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === objContact.name.toLocaleLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${objContact.name} is in your Contacts`);
      return;
    }
    const sortArr = [...contacts, addContact].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({ contacts: sortArr });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getVisibleFilter();

    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <Form onData={this.formSubmitData} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
`;
