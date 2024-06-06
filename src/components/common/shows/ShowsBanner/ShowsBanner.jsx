import PropTypes from 'prop-types';
import { Container, HeadingTitle, Paragraph } from '../../../../styles/global/default';
import { ShowsBannerWrapper } from './ShowsBanner.styles';
import { BaseLinkPrimary } from '../../../../styles/theme/components/Button';
import { FiExternalLink } from 'react-icons/fi';
import { MdLanguage } from 'react-icons/md';
import { Icons } from '../../../../assets/icons';

const ShowsBanner = ({ showsData }) => {
  return (
    <ShowsBannerWrapper className='top-spacing-fix'>
      <Container>
        <div
          className='banner-img flex justify-center items-end'
          style={{
            background: `linear-gradient(0deg,#141414 0%, rgba(20,20,20,0.00)100%), url(${showsData?.image?.original}) top/cover no-repeat fixed`,
          }}
        >
          <div className='banner-content text-center'>
            <HeadingTitle className='banner-title'>{showsData?.name}</HeadingTitle>
            <div
              className='summary-text'
              dangerouslySetInnerHTML={{ __html: showsData?.summary?.substring(0, 240) + ' ...' }}
            ></div>

            <div className='banner-info flex flex-col items-center'>
              <BaseLinkPrimary
                to={showsData?.officialSite}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='btn-text'>Visit Official Site</span>
                <span className='btn-icon'>
                  <FiExternalLink />
                </span>
              </BaseLinkPrimary>

              <div className='flex items-center flex-wrap banner-info-item'>
                <Paragraph>
                  <span className='font-bold text-white'>Genre:&nbsp;</span>&nbsp;
                  <span className='font-semibold'>{showsData?.genres?.join(', ')}</span>
                </Paragraph>

                <ul className='info-list flex items-center justify-center flex-wrap'>
                  <li className='inline-flex items-center info-item'>
                    <span className='info-item-icon inline-flex items-center justify-center'>
                      <MdLanguage size={20} />
                    </span>
                    <span className='info-item-value'>{showsData?.language}</span>
                  </li>
                  <li className='inline-flex items-center info-item'>
                    <span className='info-item-icon inline-flex items-center justify-center'>
                      <img src={Icons.Star} alt='rating' />
                    </span>
                    <span className='info-item-value'>{showsData?.rating?.average}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ShowsBannerWrapper>
  );
};
export default ShowsBanner;

ShowsBanner.propTypes = {
  showsData: PropTypes.object.isRequired,
};
