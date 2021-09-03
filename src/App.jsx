import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    const { name, number, filter, value } = event.currentTarget;
    this.setState({
      // name: = [event.currentTarget.name]:
      // [event.currentTarget.name]: event.currentTarget.value,
      [name]: value,
      [number]: value,
      [filter]: value,
    });
    //   const visibleName = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase)
    //   );
    // console.log(visibleName);
    console.log(event.currentTarget.value);
  };

  filter = () => {
    const visibleName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase),
    );
    console.log(visibleName);
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.name);
    // this.formSubmitHandler(this.state.name,this.state.number);

    this.formSubmitHandler(this.state);
    this.reset();
  };

  formSubmitHandler = data => {
    console.log(data);
    const todoData = {
      name: data.name,
      number: data.number,
      id: uuidv4(),
    };
    console.log(todoData);

    this.setState(prevState => ({
      contacts: [todoData, ...prevState.contacts],
    }));
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      // filter: '',
    });
  };

  render() {
    return (
      <div className={css.containerApp}>
        <p>Phonebook</p>
        <div>
          <form className={css.containerForm} onSubmit={this.handleSubmit}>
            <label id={this.name}>
              <p>Name</p>
              <input
                value={this.state.name}
                onChange={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>
            <label id={this.name}>
              <p>Number</p>
              <input
                value={this.state.number}
                onChange={this.handleChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label>

            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <p>Contacts</p>

          <label id={this.name}>
            <p>Find contacts by name</p>
            <input
              // value={this.findContactsByName=>()}
              value={this.state.filter}
              onChange={this.handleChange}
              type="text"
              name="filter"
            />
          </label>

          <ul>
            {this.state.contacts.map(contact => (
              <li key={contact.id}>
                <span>{contact.name}</span>: <span>{contact.number}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
