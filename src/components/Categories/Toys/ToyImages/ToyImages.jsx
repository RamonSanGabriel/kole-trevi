import css from './ToyImages.module.css';
import { toyList } from '../../../../data/toys';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ToyImages = () => {
  return <div className={css.toyImage}></div>;
};

export default ToyImages;
