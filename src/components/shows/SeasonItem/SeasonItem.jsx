import PropTypes from 'prop-types';
import { HeadingTitleMd, Text } from '../../../styles/global/default';
import { Icons } from '../../../assets/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectShowEpisodes } from '../../../redux/selectors/showsSelector';
import EpisodesList from '../EpisodesList/EpisodesList';
import { SeasonItemWrapper } from './SeasonItem.styles';

const SeasonItem = ({ seasonData }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const episodesData = useSelector(selectShowEpisodes);

  const handleAccordion = () => {
    setIsCollapse(!isCollapse);
  };
  useEffect(() => {
    if (episodesData.length === 1) setIsCollapse(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SeasonItemWrapper className='bg-black06'>
      <div className='season-head flex items-center justify-between'>
        <div className='season-head-title flex items-center flex-wrap'>
          <HeadingTitleMd>Season {seasonData?.number}</HeadingTitleMd>
          <Text>{seasonData?.episodeOrder} Episodes</Text>
        </div>

        <button
          className='season-head-btn inline-flex items-center justify-center'
          onClick={handleAccordion}
        >
          <img src={Icons.ArrowDownGrey} alt='down button' />
        </button>
      </div>

      <div className={`season-body ${!isCollapse ? 'show' : ''}`}>
        {episodesData && <EpisodesList seasonNo={seasonData?.number} episodesData={episodesData} />}
      </div>
    </SeasonItemWrapper>
  );
};
export default SeasonItem;

SeasonItem.propTypes = {
  seasonData: PropTypes.object.isRequired,
};
