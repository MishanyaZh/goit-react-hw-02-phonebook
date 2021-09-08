import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Section from './containers/Section/Section';
import MContainer from './containers/MainContainer/MainContainer';

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

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    const newContact = {
      name: data.name,
      number: data.number,
      id: uuidv4(),
    };

    this.setState(prevState => {
      const { contacts } = prevState;

      const doubleContact = contacts.find(contact =>
        contact.name.toLowerCase().includes(data.name.toLowerCase()),
      );

      if (doubleContact && doubleContact.name.length === data.name.length) {
        alert(`${data.name} is already in contacts`);
        return [...prevState];
      }
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // finnd contact to includ word with filter
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleName = this.getVisibleContacts();
    return (
      <MContainer title="Phonebook">
        <Section>
          <ContactForm
            formSubmitHandler={this.formSubmitHandler}
            onChange={this.handleChange}
          />
        </Section>

        <Section title="Contacts">
          <Filter onChange={this.changeFilter} value={this.state.filter} />
          <ContactList
            contacts={visibleName}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </MContainer>
    );
  }
}

export default App;
