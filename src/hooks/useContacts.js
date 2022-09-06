import { useSelector, useDispatch } from 'react-redux';
import { getVisibleFilter } from 'redux/selectors';
import { addContact, removeContact } from 'redux/contacts-slice';
import { toast } from 'react-hot-toast';

export const useContacts = () => {
  const contacts = useSelector(getVisibleFilter);
  const dispatch = useDispatch();

  const onAddContact = payload => {
    const isFindCopyContact = contacts.find(
      el => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
    );
    if (isFindCopyContact) {
      toast.error(`${payload.name} is in your Contacts`);
      return;
    }
    dispatch(addContact(payload));
  };

  const onDeleteContact = payload => {
    dispatch(removeContact(payload));
  };
  return [contacts, onAddContact, onDeleteContact];
};
