import { useSelector } from 'react-redux';
import { selectShowCast } from '../../../redux/selectors/showsSelector';
import { ShowCastWrapper } from './ShowCast.styles';
import Slider from 'react-slick';
import CustomPrevArrow from '../../../components/common/slider/CustomPrevArrow';
import CustomNextArrow from '../../../components/common/slider/CustomNextArrow';
import { SliderWrapper } from '../../common/slider/slider.styles';
const ShowCast = () => {
  const castData = useSelector(selectShowCast);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplayspeed: 6000,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
  };

  return (
    <ShowCastWrapper className='detail-block show-cast'>
      <h4 className='detail-block-title'>Cast</h4>
      <SliderWrapper>
        <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
          {castData?.map(cast => {
            return (
              <div className='show-cast-item' key={cast?.person?.id}>
                <div className='item-content'>
                  <img
                    src={cast?.person?.image?.medium}
                    alt={cast?.person?.name}
                    title={cast?.person?.name}
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </SliderWrapper>
    </ShowCastWrapper>
  );
};
export default ShowCast;
