import { NavLink } from 'react-router-dom';
import logo from '../../../images/trevi.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <NavLink to="/" end>
        <img src={logo} alt="Logo" className="navLogo" />
      </NavLink>
    </div>
  );
};

export default Logo;
