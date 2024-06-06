import PropTypes from 'prop-types';

import routeConstants from '../../../../constant/routeConstants';
import { DEFAULT_SHOWS, HIGH_RATED_SHOWS, NEW_SHOWS } from '../../../../constant/showsConstants';
import { Icons } from '../../../../assets/icons';
import { Text } from '../../../../styles/global/default';
import { ShowItemWrapper } from './ShowsItem.styles';

const ShowsItem = ({ itemData, itemType }) => {
  return (
    <ShowItemWrapper to={routeConstants.SHOWS + `/${itemData?.id}`} title={itemData.name}>
      <div className='item-content bg-black10'>
        <div className='item-img'>
          <img src={itemData?.image?.medium} alt={itemData.name} />
        </div>

        <div className='item-body'>
          <div className='item-info flex items-center justify-between flex-wrap '>
            <div className='item-title font-semibold'>
              {itemData?.name?.length > 16
                ? itemData?.name?.substring(0, 16) + '...'
                : itemData.name}
            </div>

            {/* displaying info as per the rating */}
            {itemType === HIGH_RATED_SHOWS && (
              <div className='rating flex items-center'>
                <img className='rating-star' src={Icons.StarRed} alt='star rating' />
                <Text className='rating-value text-sm'>{itemData?.rating?.average} / 10</Text>
              </div>
            )}

            {/* displaying info as per the premiere data */}
            {itemType === NEW_SHOWS && (
              <div className='premiere flex items-center'>
                <Text className='text-sm'>{itemData?.premiered}</Text>
              </div>
            )}

            {/* displaying info as per the default show card */}
            {itemType === DEFAULT_SHOWS && (
              <>
                <div className='rating flex items-center'>
                  <img src={Icons.StarRed} alt='star rating' className='rating-star' />
                  <Text className='rating-value text-sm'>
                    {itemData?.rating?.average || 'NA'} / 10
                  </Text>
                </div>

                <div className='genre'>
                  <div className='text-sm'>
                    <span className='font-medium'>Genre:&nbsp;</span>&nbsp;
                    <Text className='text-sm inline'>{itemData?.genres?.join(', ')}</Text>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ShowItemWrapper>
  );
};
export default ShowsItem;

ShowsItem.propTypes = {
  itemData: PropTypes.object.isRequired,
  itemType: PropTypes.string,
};
