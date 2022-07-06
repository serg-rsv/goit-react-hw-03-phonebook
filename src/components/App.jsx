import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const normalizeName = name.toLowerCase();
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizeName
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);

      return;
    }

    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilterChange = e => this.setState({ filter: e.currentTarget.value });

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.removeContact}
        />
      </>
    );
  }
}
