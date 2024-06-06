import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Spinner from '../../components/common/spinner/Spinner';
import { ErrorMessage, FreeTrail, ShowsBanner, ShowsList, ShowsSlider } from '../../components';
import { fetchAllShows } from '../../redux/slices/showsSlice';
import {
  selectAllShows,
  selectSortedHighRateShows,
  selectSortedNewShows,
} from '../../redux/selectors/showsSelector';
import { scrollToTop } from '../../utilities/scrollToTop';
import { HIGH_RATED_SHOWS, NEW_SHOWS } from '../../constant/showsConstants';
const ShowsScreen = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.shows.isLoading.fetchAllShows);
  const isError = useSelector(state => state.shows.isError.fetchAllShows);
  // const error = useSelector(state => state.shows.error);
  const allShowsData = useSelector(selectAllShows);
  const hightRatedShowsData = useSelector(selectSortedHighRateShows);
  const latestPremieredShowsData = useSelector(selectSortedNewShows);

  useEffect(() => {
    dispatch(fetchAllShows());
  }, [dispatch]);

  useEffect(() => {
    scrollToTop();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className='pg-shows'>
      {hightRatedShowsData?.length > 0 && (
        <ShowsBanner showsData={hightRatedShowsData[Math.floor(Math.random() * 10)]} />
      )}

      {hightRatedShowsData?.length > 0 && (
        <ShowsSlider
          sliderType={HIGH_RATED_SHOWS}
          silderTitle={'All Time Popular Shows'}
          showData={hightRatedShowsData}
        />
      )}

      {latestPremieredShowsData?.length > 0 && (
        <ShowsSlider
          sliderType={NEW_SHOWS}
          silderTitle={'New Shows to Watch'}
          showData={latestPremieredShowsData}
        />
      )}
      {allShowsData.length > 0 && <ShowsList showsData={allShowsData} showsTitle={'All Shows'} />}

      <FreeTrail />
    </div>
  );
};
export default ShowsScreen;
