import { useRef, useState } from 'react';
import { Images } from '../../../assets/images';
import { SearchBarWrapper } from './SearchBar.styles';
import { Icons } from '../../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults, resetSearchResults } from '../../../redux/slices/showsSlice';
import { selectSearchResults } from '../../../redux/selectors/showsSelector';
import { NoDataFound, SearchList } from '../../index';

const SearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const [searchError, setSearchError] = useState('');
  const [hasValidQuery, setHasValidQuery] = useState(false);
  const searchResulstData = useSelector(selectSearchResults);

  const isValidSearchQuery = query => {
    const regex = /^[\w\s-',.?!&]+$/i;
    return regex.test(query);
  };

  const handleQuerySubmit = async event => {
    event.preventDefault();
    if (isValidSearchQuery(query)) {
      dispatch(resetSearchResults());
      setHasValidQuery(true);
      setSearchError('');
      await dispatch(fetchSearchResults(query));
    } else if (query.trim().length === 0) {
      setSearchError('Please enter show name.');
      setHasValidQuery(false);
    } else {
      setSearchError('Please enter show title or name.');
      setHasValidQuery(false);
    }
  };

  const handleQueryChange = event => setQuery(event.target.value);

  return (
    <SearchBarWrapper>
      <div className='searchbar-top flex items-center justify-center'>
        <img src={Images.HomeBanner} alt='home banner' className='obj-fit-cover searchbar-banner' />

        <form onSubmit={handleQuerySubmit}>
          <div className='search-box flex'>
            <div className='search-input'>
              <input
                type='text'
                name='input field'
                className='text-lg font-semibold'
                placeholder='Search for TV shows...'
                ref={inputRef}
                onChange={handleQueryChange}
              />
            </div>

            <button type='submit' className='search-icon bg-transparent'>
              <img src={Icons.Search} alt='search icon' />
            </button>
            <span className='search-error-text'>{hasValidQuery ? '' : searchError}</span>
          </div>
        </form>
      </div>

      <div className='searchbar-bottom'>
        {hasValidQuery && searchResulstData && searchResulstData.length > 0 ? (
          <SearchList searchResultsData={searchResulstData} />
        ) : (
          <NoDataFound />
        )}
      </div>
    </SearchBarWrapper>
  );
};
export default SearchBar;
