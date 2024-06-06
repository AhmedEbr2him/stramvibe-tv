import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectShowDetail, selectShowMetaData } from '../../redux/selectors/showsSelector';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
import { fetchShowDetail } from '../../redux/slices/showsSlice';
import {
  ErrorMessage,
  FreeTrail,
  ShowMainData,
  ShowMetaData,
  ShowsBanner,
  Spinner,
} from '../../components';
import { Container } from '../../styles/global/default';
import { ShowDetailContent } from './ShowDetailScreen';

const ShowDetailScreen = () => {
  const { id: showId } = useParams();
  const dispatch = useDispatch();
  const showDetailData = useSelector(selectShowDetail);
  const isLoading = useSelector(state => state.shows.isLoading.fetchShowDetail);
  const isError = useSelector(state => state.shows.isError.fetchShowDetail);
  const error = useSelector(state => state.shows.error);
  const showMetaData = useSelector(selectShowMetaData);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    dispatch(fetchShowDetail(showId));
  }, [dispatch, showId]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }
  return (
    <div className='pg-show-detail'>
      {showDetailData && <ShowsBanner showsData={showDetailData} />}

      <Container>
        {showDetailData && (
          <ShowDetailContent>
            <ShowMainData />
            <ShowMetaData metaData={showMetaData} />
          </ShowDetailContent>
        )}
      </Container>

      <FreeTrail />
    </div>
  );
};
export default ShowDetailScreen;
