import { useEffect, useState } from 'react';
import css from './BackBtn.module.css';
import { animateScroll as scroll } from 'react-scroll';

const BackBtn = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    show && (
      <button className={css.backBtn} type="button" text="  ⬅ Go back">
        ⬅ Go back
      </button>
    )
  );
};

export default BackBtn;
