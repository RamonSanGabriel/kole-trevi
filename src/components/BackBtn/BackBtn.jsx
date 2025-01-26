import { useEffect } from 'react';
import css from './BackBtn.module.css';
import { Link, useLocation } from 'react-router-dom';

const BackBtn = ({ show, setShow }) => {
  const location = useLocation();
  const backBtn = location.state?.from ?? '/';
  console.log(backBtn);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    show && (
      <Link to={backBtn}>
        <button className={css.backBtn} type="button">
          ⬅ Go back
        </button>
      </Link>
    )
  );
};

export default BackBtn;
