import { useSelector } from 'react-redux';
import { Icons } from '../../../assets/icons';
import { ShowMetaDataWrapper } from './ShowMetaData.styles';
import { selectShowMetaData } from '../../../redux/selectors/showsSelector';
import { Paragraph } from '../../../styles/global/default';

const ShowMetaData = () => {
  const metaData = useSelector(selectShowMetaData);
  console.log(metaData);
  return (
    <ShowMetaDataWrapper>
      <div className='detail-block'>
        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.CalendarGrey} alt='class name date icon' />
            </span>
            <span className='titel-text'>Relased Date</span>
          </Paragraph>

          <div className='block-item-body'>
            <div className='block-item-pill text-md'>{metaData?.premiered}</div>
          </div>
        </div>

        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.LanguageGrey} alt='class name date icon' />
            </span>
            <span className='titel-text'>Available Language</span>
          </Paragraph>

          <div className='block-item-body'>
            <div className='block-item-pill text-md'>{metaData?.language}</div>
          </div>
        </div>

        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-center justify-start'>
            <span className='title-icon'>
              <img src={Icons.StarGrey} alt='class name date icon' />
            </span>
            <span className='titel-text'>Ratings</span>
          </Paragraph>

          <div className='block-item-body'>
            <div className='block-item-pill text-md'>{metaData?.rating?.average || 0} / 10</div>
          </div>
        </div>

        <div className='detail-block-item'>
          <Paragraph className='block-item-title flex items-start justify-start'>
            <span className='title-icon'>
              <img src={Icons.GridGrey} alt='class name date icon' />
            </span>
            <span className='titel-text'>Genres</span>
          </Paragraph>

          <div className='block-item-body flex items-center flex-wrap'>
            {metaData?.genres?.map((genre, index) => (
              <div className='block-item-pill text-md' key={index}>
                {genre}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShowMetaDataWrapper>
  );
};
export default ShowMetaData;
