import css from './BackBtn.module.css';

const BackBtn = ({ text }) => {
  return (
    <div className={css.backBtnWrapper}>
      <button className={css.backBtn} type="button">
        {text}
      </button>
    </div>
  );
};

export default BackBtn;
