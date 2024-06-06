import { useSelector } from 'react-redux';
import { SeasonListWrapper } from './SeasonList.styles';
import { selectShowSeasons } from '../../../redux/selectors/showsSelector';
import { HeadingTitleMd } from '../../../styles/global/default';
import SeasonItem from '../SeasonItem/SeasonItem';

const SeasonList = () => {
  const seasonsData = useSelector(selectShowSeasons);

  return (
    <SeasonListWrapper className='detail-block'>
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {seasonsData?.map(season => {
        return <SeasonItem key={season.id} seasonData={season} />;
      })}
    </SeasonListWrapper>
  );
};
export default SeasonList;
