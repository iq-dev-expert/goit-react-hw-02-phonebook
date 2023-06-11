function ContactList({ contacts, onDeleteButtonClick }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}{' '}
            <button type="button" onClick={() => onDeleteButtonClick(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
