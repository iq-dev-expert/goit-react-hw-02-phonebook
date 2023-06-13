import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/Theme';

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
    const { contacts, filter } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.onFormSubmit} contacts={contacts} />

          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.onChange} />
          <ContactList
            contacts={this.filterContacts()}
            onDeleteButtonClick={this.deleteContact}
          />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
