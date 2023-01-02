import { React } from 'react';
import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={ev => dispatch(setFilter(ev.target.value.toLowerCase()))}
        // value={filtered}
      />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  // value: PropTypes.string,
};
