import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  onAddButtonClick = e => {
    e.preventDefault();
    const id = nanoid(16);

    this.setState(({ contacts }) => {
      const { name, number } = this.state;

      return {
        contacts: [...contacts, { name, number, id }],
      };
    });

    this.setState({ name: '', number: '' });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;

    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  render() {
    const { state, onChange, onAddButtonClick, filterContacts } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          value={state}
          onChange={onChange}
          onAddButtonClick={onAddButtonClick}
        />

        <h2>Contacts</h2>
        <Filter value={state} onChange={onChange} />
        <ContactList contacts={filterContacts()} />
      </div>
    );
  }
}

export default App;
