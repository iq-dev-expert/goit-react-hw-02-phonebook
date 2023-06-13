import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';
import { Button } from '../../style/Template.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onAddButtonClick = e => {
    e.preventDefault();

    const { contacts, onFormSubmit } = this.props;

    if (this.isContactInPhonebook(contacts)) {
      alert(`${this.state.name} is already in contacts.`);
      this.resetForm();
      return;
    }

    onFormSubmit(this.state);
    this.resetForm();
  };

  isContactInPhonebook = contacts => {
    return contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onAddButtonClick}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
