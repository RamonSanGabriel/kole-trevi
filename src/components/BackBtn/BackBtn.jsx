import { useNavigate } from 'react-router-dom';
import css from './BackBtn.module.css';
import { BsChevronDoubleLeft } from 'react-icons/bs';

const BackBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <button
      className={css.backBtn}
      type="button"
      text="⬅ back"
      onClick={handleClick}
    >
      <BsChevronDoubleLeft /> back
    </button>
  );
};

export default BackBtn;
