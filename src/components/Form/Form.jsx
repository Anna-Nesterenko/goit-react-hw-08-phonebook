import { useState } from 'react';
import { Field, ContainerForm, BtnDisabled } from './Form.styled';
import toast from 'react-hot-toast';

export function Form({ contacts, onData }) {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (isFindCopyContact) {
      toast.error(`${name} is in your Contacts`);
      setState({ ...initialState });
      return;
    }

    onData({ ...state });
    setState({ ...initialState });
  };

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <label>
        Name
        <Field
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name..."
          onChange={handleChange}
        />
      </label>
      <label>
        Phone number
        <Field
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number..."
          onChange={handleChange}
        />
      </label>
      <BtnDisabled type="submit" disabled={!name || !number}>
        Add contact
      </BtnDisabled>
    </ContainerForm>
  );
}
