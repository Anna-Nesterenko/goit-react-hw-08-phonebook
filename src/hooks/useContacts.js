import { useSelector, useDispatch } from 'react-redux';
import { getVisibleFilter } from 'redux/selectors';
import { addContact, fetchContacts, removeContact } from 'redux/contactsThunk';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

export const useContacts = () => {
  const contacts = useSelector(getVisibleFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
   //  console.log(fetchContacts);
  }, [dispatch]);

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
