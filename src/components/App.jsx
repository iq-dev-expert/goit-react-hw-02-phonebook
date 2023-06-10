import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
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

    this.setState(prevState => {
      const { name, number } = this.state;

      return {
        contacts: [...prevState.contacts, { name, number, id }],
      };
    });

    this.setState({ name: '', number: '' });
  };

  render() {
    const {
      state,
      state: { contacts },
      onChange,
      onAddButtonClick,
    } = this;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          value={state}
          onChange={onChange}
          onAddButtonClick={onAddButtonClick}
        />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
