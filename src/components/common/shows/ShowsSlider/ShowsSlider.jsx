import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Container } from '../../../../styles/global/default';
import SectionTitle from '../../SectionTitle/SectionTitle';
import { SliderWrapper } from '../../slider/slider.styles';
import { ShowsSliderWrapper } from './ShowsSlider.styles';
import CustomNextArrow from '../../slider/CustomNextArrow';
import CustomPrevArrow from '../../slider/CustomPrevArrow';
import ShowsItem from '../ShowsItem/ShowsItem';

const ShowsSlider = ({ sliderType, silderTitle, showData }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <ShowsSliderWrapper>
      <SectionTitle title={silderTitle} />

      <Container>
        <SliderWrapper className='slider-wrapper'>
          <Slider {...settings} nextArrow={<CustomNextArrow />} prevArrow={<CustomPrevArrow />}>
            {showData?.slice(0, 12)?.map(show => {
              return <ShowsItem key={show.id} itemData={show} itemType={sliderType} />;
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </ShowsSliderWrapper>
  );
};
export default ShowsSlider;

ShowsSlider.propTypes = {
  sliderType: PropTypes.string,
  silderTitle: PropTypes.string,
  showData: PropTypes.array,
};
