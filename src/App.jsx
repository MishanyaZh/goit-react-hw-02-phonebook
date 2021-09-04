import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import SectionTitle from './SectionTitle/SectionTitle';

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
    const todoData = {
      name: data.name,
      number: data.number,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [todoData, ...prevState.contacts],
    }));
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  // if i have this name, I dont update state
  getUnicName = data => {
    const { contacts } = this.state;
    const isName = contacts.find(contact =>
      contact.name.toLowerCase().includes(data.name.toLowerCase()),
    );

    if (isName && isName.name.length === data.name.length) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.formSubmitHandler(data);
    }
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
  // this for me... I dont understant patern and I nead coment...
  // const normalizedFilter = this.state.filter.toLowerCase();
  //   const visibleName = this.state.contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter),
  //   );

  render() {
    const visibleName = this.getVisibleContacts();
    // console.log(visibleName);
    return (
      <div className={css.containerApp}>
        {/* <h1>Phonebook</h1> */}
        <SectionTitle title="Phonebook" />
        <ContactForm
          // onFormSubmitHandler={this.formSubmitHandler}
          onGetUnicName={this.getUnicName}
          onChange={this.handleChange}
        />

        {/* <h2>Contacts</h2> */}
        <SectionTitle title="Contacts" />
        <div>
          <Filter onChange={this.changeFilter} value={this.state.filter} />
          <ContactList
            contacts={visibleName}
            onDeleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
