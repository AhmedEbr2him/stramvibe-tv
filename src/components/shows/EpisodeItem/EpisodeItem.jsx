import PropTypes from 'prop-types';
import { EpisodeItemWrapper } from './EpisodeItem.style';
import { Link } from 'react-router-dom';
import { Images } from '../../../assets/images';

const EpisodeItem = ({ episodeData }) => {
  return (
    <EpisodeItemWrapper>
      <div className='episode-num text-gray60 text-xl flex items-start font-bold'>
        {episodeData?.number < 10 ? '0' + episodeData?.number : episodeData?.number}
      </div>

      <div className='episode-full grid'>
        <Link to={episodeData?.url} target='_blank' className='episode-img'>
          <img
            src={episodeData?.image?.medium || Images.NoImage}
            alt={episodeData.name}
            className='object-fit-cover'
          />
        </Link>

        <div className='episode-body'>
          <div className='episode-head'>
            <h4 className='text-xl episode-title'>{episodeData?.name}</h4>
            <p
              className='episode-summary text-gray'
              dangerouslySetInnerHTML={{
                __html: episodeData?.summary,
              }}
            ></p>
          </div>
        </div>
      </div>
    </EpisodeItemWrapper>
  );
};
export default EpisodeItem;

EpisodeItem.propTypes = {
  episodeData: PropTypes.object.isRequired,
};
