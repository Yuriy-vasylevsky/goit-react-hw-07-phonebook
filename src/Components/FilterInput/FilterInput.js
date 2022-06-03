import { filters } from '../../redux/contact/contact-action';
import { useDispatch } from 'react-redux';

function FilterInput() {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filters(e.target.value));
  };

  return (
    <input type="text" className="input" onInput={handleChange} name="filter" />
  );
}

export default FilterInput;
