import { BrandWrapper, HeaderIconWrapper, HeaderWrapper, NavWrapper } from './Header.styles';
import { Container } from '../../../styles/global/default';
import routeConstants from '../../../constant/routeConstants';
import { Images } from '../../../assets/images';
import { Icons } from '../../../assets/icons';
import { Link, useLocation } from 'react-router-dom';
import useHeaderBackground from '../../../hooks/hasHeaderBackground';
import {
  selectIsSidebarOpen,
  setCloseSidebar,
  setOpenSidebar,
} from '../../../redux/slices/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const scrollThreshold = 0;
  const hasBackground = useHeaderBackground(scrollThreshold);
  const headerStyle = hasBackground ? 'bg-black06 sm-header' : 'bg-transparent';
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const navRef = useRef(null);
  const handleCloseNav = event => {
    if (
      navRef?.current &&
      !navRef.current.contains(event.target) &&
      !isDescendantOf(event.target, 'sidebar-open-btn')
    ) {
      dispatch(setCloseSidebar());
    }
  };
  const isDescendantOf = (element, className) => {
    let currentElement = element;

    while (currentElement !== null && !currentElement?.classList?.contains(className)) {
      currentElement = currentElement.parentNode;
    }
    return currentElement?.classList?.contains(className) ?? false;
  };

  const handleNavLinkClick = () => {
    dispatch(setCloseSidebar());
  };
  useEffect(() => {
    document.body.addEventListener('click', handleCloseNav);

    return () => {
      document.body.removeEventListener('click', handleCloseNav);
    };
  });

  return (
    <HeaderWrapper className={`flex items-center ${headerStyle}`}>
      <Container className={'w-full'}>
        <div className='header-content flex items-center justify-between'>
          <BrandWrapper to={routeConstants.HOME}>
            <img src={Images.Logo} alt={'site logo'} />
          </BrandWrapper>

          <NavWrapper
            className={`flex items-center justify-center ${isSidebarOpen ? 'show' : ''}`}
            ref={navRef}
          >
            <button
              type='button'
              className='sidebar-close-btn'
              onClick={() => dispatch(setCloseSidebar())}
            >
              <img src={Icons.Close} alt='close sidebar button' />
            </button>

            <ul className='nav-list flex items-center justify-center bg-black06'>
              <li className='nav-item'>
                <Link
                  to={routeConstants.HOME}
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    location.pathname === routeConstants.HOME ? 'active' : ''
                  }`}
                  onClick={handleNavLinkClick}
                >
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to={routeConstants.SHOWS}
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    location.pathname === routeConstants.SHOWS ||
                    location.pathname.startsWith(routeConstants.SHOWS)
                      ? 'active'
                      : ''
                  }`}
                  onClick={handleNavLinkClick}
                >
                  Shows
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/support'
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    location.pathname === '/support' ? 'active' : ''
                  }`}
                  onClick={handleNavLinkClick}
                >
                  Support
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  to='/subscription'
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    location.pathname === '/subscription' ? 'active' : ''
                  }`}
                  onClick={handleNavLinkClick}
                >
                  Subscription
                </Link>
              </li>
            </ul>
          </NavWrapper>

          <HeaderIconWrapper className='flex items-center '>
            <Link to='/search' className='icon-link flex items-center justify-center'>
              <img src={Icons.Search} alt='search' />
            </Link>

            <Link to='/' className='icon-link flex items-center justify-center'>
              <img src={Icons.Bell} alt='notifications' />
            </Link>

            <button
              type='button'
              className='icon-link flex items-center justify-center sidebar-open-btn'
              onClick={() => dispatch(setOpenSidebar())}
            >
              <img src={Icons.Menu} alt='open sidebar button' />
            </button>
          </HeaderIconWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
};
export default Header;
