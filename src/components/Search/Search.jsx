import PropTypes from 'prop-types';
import { updateFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { SearchLabel, SearchInput } from './Search.styled';

export const Search = ({ searchLabel }) => {
  const dispatch = useDispatch();
  return (
    <SearchLabel>
      {searchLabel}
      <SearchInput
        name="search"
        type="text"
        onChange={evt => dispatch(updateFilter(evt.currentTarget.value))}
      />
    </SearchLabel>
  );
};

Search.propTypes = {
  searchLabel: PropTypes.string.isRequired,
};
