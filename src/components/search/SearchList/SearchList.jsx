import PropTypes from 'prop-types';
import ShowsList from '../../common/shows/ShowsList/ShowsList';
import { SearchListWrapper } from './SearchList.styles';

const SearchList = ({ searchResultsData }) => {
  const showData = searchResultsData.map(singleResult => singleResult.show);

  return (
    <SearchListWrapper>
      <ShowsList showsData={showData} showsTitle={'Search Results'} />
    </SearchListWrapper>
  );
};
export default SearchList;

SearchList.propTypes = {
  searchResultsData: PropTypes.array.isRequired,
};
