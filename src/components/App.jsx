import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

  render() {
    const { state, onChange, filterContacts, onFormSubmit } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={onFormSubmit} contacts={state.contacts} />

        <h2>Contacts</h2>
        <Filter value={state} onChange={onChange} />
        <ContactList contacts={filterContacts()} />
      </div>
    );
  }
}

export default App;
