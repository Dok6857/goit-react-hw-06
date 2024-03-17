import css from './ContactList.module.css';
import { Contact } from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={() => handleDelete(contact.id)} />
      ))}
    </ul>
  );
};

// export const ContactList = ({ contacts, onDelete }) => {
//   return (
//     <ul className={css.contactList}>
//       {contacts.map(contact => (
//         <Contact key={contact.id} contact={contact} onDelete={() => {onDelete(contact.id)}} />
//       ))}
//     </ul>
//   );
// };

