import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onFormSubmit = formState => {
    const id = nanoid(16);

    this.setState(({ contacts }) => {
      const { name, number } = formState;

      return {
        contacts: [...contacts, { name, number, id }],
      };
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { state, onChange, filterContacts, onFormSubmit, deleteContact } =
      this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={onFormSubmit} contacts={state.contacts} />

        <h2>Contacts</h2>
        <Filter value={state} onChange={onChange} />
        <ContactList
          contacts={filterContacts()}
          onDeleteButtonClick={deleteContact}
        />
      </div>
    );
  }
}

export default App;
