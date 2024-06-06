import { Icons } from '../../../assets/icons';
import routeConstants from '../../../constant/routeConstants';
import { Container, HeadingBanner, Paragraph } from '../../../styles/global/default';
import { BaseLinkPrimary } from '../../../styles/theme/components/Button';
import { BannerWrapper } from './Banner.styles';

const Banner = () => {
  return (
    <BannerWrapper>
      <div className='banner-img flex items-center justify-center'>
        <img src={Icons.Streamvibe} alt='banner icon' className='banner-icon' />
      </div>

      <Container className='text-center'>
        <div className='banner-content mx-auto'>
          <HeadingBanner>The Best Streaming Experience</HeadingBanner>
          <Paragraph className='baanner-text text-lg'>
            StreamVibe is the best streaming experience for watching your favorite movies and shows
            on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content,
            including the latest blockblusters, classic movies, popular TV shows, and more. You can
            also create your own watchlists, so you can easily find the contnet you want to watch.
          </Paragraph>
          <BaseLinkPrimary to={routeConstants.SHOWS}>
            <span className='btn-icon'>
              <img src={Icons.Play} alt='play icon' />
            </span>
            <span className='btn-text'>Start Watching Now!</span>
          </BaseLinkPrimary>
        </div>
      </Container>
    </BannerWrapper>
  );
};
export default Banner;
