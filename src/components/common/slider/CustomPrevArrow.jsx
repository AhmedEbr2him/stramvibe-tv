import PropTypes from 'prop-types';
import { Icons } from '../../../assets/icons';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      className='custom-prev-arrow bg-black06 flex items-center justify-center'
      onClick={onClick}
    >
      <img src={Icons.ArrowLeft} alt='previous arrow icon' />
    </button>
  );
};
export default CustomPrevArrow;

CustomPrevArrow.propTypes = {
  onClick: PropTypes.func,
};
