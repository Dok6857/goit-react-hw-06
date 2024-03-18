// SearchBox.jsx
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const value = evt.target.value;
    dispatch(changeFilter(value));
  };
  

  return (
    <div className={css.searchCont}>
      <label htmlFor="filter">Find contacts by name</label>
      <input className={css.search} id="filter" type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

