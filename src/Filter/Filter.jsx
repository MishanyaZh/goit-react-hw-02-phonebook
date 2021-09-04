const Filter = ({ value, onChange }) => (
  <label id={{ value }}>
    <p>Find contacts by name</p>
    <input value={value} onChange={onChange} type="text" name="filter" />
  </label>
);

export default Filter;
