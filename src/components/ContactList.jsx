import PropTypes from 'prop-types';

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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default ContactList;
