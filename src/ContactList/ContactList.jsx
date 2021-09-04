const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <span>{name}</span>: <span>{number}</span>
        <span>
          <button type="button" onClick={() => onDeleteContact(id)}>
            delete
          </button>
        </span>
      </li>
    ))}
  </ul>
);

export default ContactList;
