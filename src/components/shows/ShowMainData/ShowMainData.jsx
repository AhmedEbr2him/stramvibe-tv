import { useSelector } from 'react-redux';
import { Paragraph } from '../../../styles/global/default';
import { ShowMainDataWrapper } from './ShowMainData.styles';
import { selectShowDescription } from '../../../redux/selectors/showsSelector';
import SeasonList from '../SeasonList/SeasonList';
import ShowCast from '../ShowsCast/ShowCast';

const ShowMainData = () => {
  const descriptionData = useSelector(selectShowDescription);

  return (
    <ShowMainDataWrapper>
      <SeasonList />
      <div className='detail-block show-description'>
        <h4 className='detail-block-title'>Description</h4>
        <Paragraph
          className='text-white'
          dangerouslySetInnerHTML={{
            __html: descriptionData,
          }}
        ></Paragraph>
      </div>
      <ShowCast />
    </ShowMainDataWrapper>
  );
};
export default ShowMainData;
