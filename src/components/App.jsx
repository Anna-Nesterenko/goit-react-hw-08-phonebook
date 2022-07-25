import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(7), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(7), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(7), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(7), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitData = objContact => {
    const addContact = {
      id: nanoid(7),
      ...objContact,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, addContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <Form onData={this.formSubmitData} />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
