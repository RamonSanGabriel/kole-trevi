import { footerDetails } from '../../data/footer';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer className="footerWrapper">
        <div className="footerContainer">
          <p className="footerText">
            &copy; {new Date().getFullYear()} {footerDetails.name}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
