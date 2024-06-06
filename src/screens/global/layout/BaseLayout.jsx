import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { PageWrapper } from '../../../styles/global/default';

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />
      {/* MAIN CONTENT */}
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      {/* END OF MAIN CONTENT */}
      <Footer />
    </PageWrapper>
  );
};
export default BaseLayout;
