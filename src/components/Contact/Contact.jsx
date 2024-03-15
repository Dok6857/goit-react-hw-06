import css from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';

export const Contact = ({ contact, onDelete }) => {


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
        onClick={onDelete}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};
