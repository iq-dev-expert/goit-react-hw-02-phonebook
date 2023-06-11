import PropTypes from 'prop-types';
import { List, Item, ItemText } from './ContactList.styled';
import { Button } from './Template.styled';

function ContactList({ contacts, onDeleteButtonClick }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ItemText>
              {name}: {number}{' '}
            </ItemText>
            <Button type="button" onClick={() => onDeleteButtonClick(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
};

export default ContactList;
