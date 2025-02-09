import style from '../../Categories/CategoryCommon.module.css';
import { bookDetails, bookList } from '../../../data/book.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState, useEffect } from 'react';

const Books = () => {
  const [open, setOpen] = useState(false);

  const { title, description } = bookDetails;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={style.bookWrapper}>
        <div className={style.bookDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style.bookContainer}>
          <ul className={style.bookList} onClick={() => setOpen(true)}>
            {bookList.map(({ id, name, description, image, placeholder }) => (
              <li key={id} onClick={() => setOpen(true)}>
                <h4>
                  {name}&nbsp;{id}
                </h4>
                <div className={style.bookImage}>
                  <div className={style.lazyLoadContainer}>
                    <LazyLoadImage
                      className={style.lazyLoad}
                      key={id}
                      effect="blur"
                      src={image}
                      alt={`book image ${id}`}
                      placeholderSrc={placeholder}
                      // width={300}
                      // height={300}
                    />
                  </div>
                </div>
                <p>
                  {description}&nbsp;{id}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Books;
