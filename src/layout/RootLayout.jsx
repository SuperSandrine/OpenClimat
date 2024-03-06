import Footer from './Footer/Footer';
import Menu from './Menu/Menu';

const RootLayout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
