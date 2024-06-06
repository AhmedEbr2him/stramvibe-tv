import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
import Banner from '../../components/home/Banner/Banner';
import { Genre } from '../../components';
import StreamDevices from '../../components/home/StreamDevices/StreamDevices';
import CommonQuestions from '../../components/home/CommonQuestions/CommonQuestions';
import Subscription from '../../components/home/Subscription/Subscription';
import FreeTrail from '../../components/common/FreeTrail/FreeTrail';

const HomeScreen = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className='pg-home'>
      <Banner />
      <Genre />
      <StreamDevices />
      <CommonQuestions />
      <Subscription />
      <FreeTrail />
    </div>
  );
};
export default HomeScreen;
