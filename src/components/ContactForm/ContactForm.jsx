import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form } from './Form.styled';
import { Button } from 'styles/Button.styled';

export class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.string).isRequired,
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { addContact, contacts } = this.props;

    const normalizeName = name.toLowerCase();
    const isExist = contacts.some(
      contactName => contactName.toLowerCase() === normalizeName
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);

      return;
    }

    addContact({ name, number });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
