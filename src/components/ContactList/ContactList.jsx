import PropTypes from 'prop-types';
import { ContactContainer, ContactEl, ContactBtn } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  //   console.log(contacts);
  return (
    <ContactContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactEl key={id}>
          <span>- {name}: </span>
          <span>{number}</span>
          <ContactBtn type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </ContactBtn>
        </ContactEl>
      ))}
    </ContactContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
