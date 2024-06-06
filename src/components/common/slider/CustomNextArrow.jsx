import PropTypes from 'prop-types';
import { Icons } from '../../../assets/icons';

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      className='custom-next-arrow bg-black06 flex items-center justify-center'
      onClick={onClick}
    >
      <img src={Icons.ArrowRight} alt='next arrow icon' />
    </button>
  );
};
export default CustomNextArrow;

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};
