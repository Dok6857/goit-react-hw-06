import { useId } from 'react';
import css from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const handleChange = evt => {
    onChange(evt.target.value);
  };

  const searchId = useId();

  return (
    <div className={css.searchCont}>
      <label htmlFor={searchId}>Find contacts by name</label>

      <input
        id={searchId}
        className={css.search}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
