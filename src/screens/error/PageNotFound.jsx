import { PageNotFoundWrapper } from './PageNotFound.styles';
import { Images } from '../../assets/images';
import { HeadingTitleMd } from '../../styles/global/default';
import { BaseButtonPrimary, BaseLinkPrimary } from '../../styles/theme/components/Button';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';

const PageNotFound = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <PageNotFoundWrapper className='flex items-center justify-center flex-col'>
      <div className='page-not-found-img'>
        <img src={Images.Error404} alt='error 404 image' />
      </div>

      <HeadingTitleMd>Page Not Found !</HeadingTitleMd>
      <BaseLinkPrimary className='back-btn' to='/'>
        Back to Home Page
      </BaseLinkPrimary>
    </PageNotFoundWrapper>
  );
};
export default PageNotFound;
