import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from 'styles/GlobalStyle';
import { TitleMain, TitleSecond } from 'styles/Titles.styled';
import { Section } from 'styles/Section.styled';

const STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
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
    const names = contacts.map(contact => contact.name);

    return (
      <Section>
        <GlobalStyle />
        <TitleMain>Phonebook</TitleMain>
        <ContactForm addContact={this.addContact} contacts={names} />
        <TitleSecond>Contacts</TitleSecond>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDelete={this.removeContact}
          />
        ) : (
          <p className="message">Contacts list is empty</p>
        )}
      </Section>
    );
  }
}
