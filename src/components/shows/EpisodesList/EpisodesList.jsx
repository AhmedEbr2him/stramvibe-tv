import PropTypes from 'prop-types';
import { EpisodesListWrapper } from './EpisodesList.styles';
import EpisodeItem from '../EpisodeItem/EpisodeItem';

const EpisodesList = ({ episodesData, seasonNo }) => {
  const filterEpisodes = episodesData.filter(episode => episode?.season === seasonNo);

  return (
    <EpisodesListWrapper className='grid'>
      {filterEpisodes?.map(episode => {
        return <EpisodeItem key={episode?.id} seasonNo={seasonNo} episodeData={episode} />;
      })}
    </EpisodesListWrapper>
  );
};
export default EpisodesList;

EpisodesList.propTypes = {
  episodesData: PropTypes.array.isRequired,
  seasonNo: PropTypes.number,
};
