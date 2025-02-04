// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './BackBtn.module.css';
import { BsChevronDoubleLeft } from 'react-icons/bs';

// import { animateScroll as scroll } from 'react-scroll';

const BackBtn = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShow(window.scrollY > 600);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    // show && (
    <button
      className={css.backBtn}
      type="button"
      text="⬅ back"
      onClick={handleClick}
    >
      {/* ⬅ back */}
      <BsChevronDoubleLeft /> back
    </button>
    // )
  );
};

export default BackBtn;
