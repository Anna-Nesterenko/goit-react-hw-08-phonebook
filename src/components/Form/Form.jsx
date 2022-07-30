import { Component } from 'react';
import { Field, ContainerForm, BtnDisabled } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onData(this.state);

    this.resetSubmit();
  };

  resetSubmit = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContainerForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <Field
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="enter name"
            onChange={this.handleChange}
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
            placeholder="enter number"
            onChange={this.handleChange}
          />
        </label>
        <BtnDisabled type="submit" disabled={!name || !number}>
          Add contact
        </BtnDisabled>
      </ContainerForm>
    );
  }
}
