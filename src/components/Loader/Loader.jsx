import { PropagateLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <PropagateLoader color="#e85d04" />
    </div>
  );
};

export default Loader;
