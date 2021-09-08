import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor={value.id} className={css.filter}>
    <p className={css.filterName}>Find contacts by name</p>
    <input
      id={uuidv4()}
      className={css.input}
      value={value}
      onChange={onChange}
      type="text"
      name="filter"
      placeholder="find"
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
