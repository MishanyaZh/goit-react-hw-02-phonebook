import { Component } from 'react';
// not this css
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, number, value } = event.currentTarget;
    this.setState({
      // name: = [event.currentTarget.name]:
      // [event.currentTarget.name]: event.currentTarget.value,
      [name]: value,
      [number]: value,
    });
    // console.log(event.currentTarget.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.name);
    // this.formSubmitHandler(this.state.name,this.state.number);
    this.props.onGetUnicName(this.state);
    // old code
    // this.props.onFormSubmitHandler(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label id={this.name}>
          <p className={css.formNameNumber}>Name</p>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="add name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label id={this.name}>
          <p className={css.formNameNumber}>Number</p>
          <input
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            placeholder="add number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
