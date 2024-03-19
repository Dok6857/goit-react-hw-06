// Contact.jsx
import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <li className={css.listItem}>
      <div className={css.test}>
        <div className={css.contactInfo}>
          <FaUser size={24} />
          <p>{contact.name}</p>
        </div>

        <div className={css.phoneInfo}>
          <FaPhoneAlt size={24} />
          <p>{contact.number}</p>
        </div>
      </div>

      <button
        id={contact.id}
        type="button"
        onClick={() => handleDelete(contact.id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
