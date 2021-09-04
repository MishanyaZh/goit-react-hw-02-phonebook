import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contactsItem}>
        <span>{name}</span>: <span>{number}</span>
        <span>
          <button
            className={css.listButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </span>
      </li>
    ))}
  </ul>
);

export default ContactList;
