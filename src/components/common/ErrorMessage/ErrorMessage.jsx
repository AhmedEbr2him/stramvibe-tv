import PropTypes from 'prop-types';
import { Images } from '../../../assets/images';
import errorConstants from '../../../constant/errorConstants';
import { ErrorMessageWrapper } from './ErrorMessage.styles';
import { Container, HeadingTitle } from '../../../styles/global/default';

const ErrorMessage = ({ error }) => {
  const displayErrorMsg = () => {
    if (error?.code === errorConstants.ERR_404) {
      return <img src={Images.Error404} alt='error 404' className='error-img' />;
    } else if (error?.code === errorConstants.ERR_429) {
      return <img src={Images.Error429} alt='error 429' className='error-img' />;
    } else {
      return <img src={Images.Error429} alt='error 429' className='error-img' />;
    }
  };

  return (
    <ErrorMessageWrapper className='text-center top-spacing-fix'>
      <Container>
        <div className='error-content flex flex-col justify-between items-center'>
          {displayErrorMsg()}
          <HeadingTitle className='error-title'>{error?.message}</HeadingTitle>
        </div>
      </Container>
    </ErrorMessageWrapper>
  );
};
export default ErrorMessage;

ErrorMessage.propTypes = {
  error: PropTypes.object,
};
