import { Component } from 'react';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      // name: = [event.currentTarget.name]:
      // [event.currentTarget.name]: event.currentTarget.value,
      [name]: value,
    });
    // console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    // console.log(this.state.name);
    this.formSubmitHandler(this.state.name);
    this.reset();
  };

  formSubmitHandler = data => {
    // console.log(data);
    const todoo = {
      data,
    };
    this.setState(prevState => ({
      name: [todoo, ...prevState.name],
    }));
    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: '' });
  };

  // addToodo = () => {
  //   const todoo = {

  //   }
  // };

  render() {
    return (
      <div className={css.containerApp}>
        <p>Phonebook</p>
        <div>
          <form className={css.containerForm} onSubmit={this.handleSubmit}>
            <label>
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
            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <p>Contacts</p>
          <p>{this.state.name}</p>
          <ul></ul>
        </div>
      </div>
    );
  }
}

export default App;
