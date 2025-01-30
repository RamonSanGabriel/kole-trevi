import css from './Books.module.css';
import { bookDetails, bookList } from '../../../data/book.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from 'react';

const Books = () => {
  const [open, setOpen] = useState(false);

  const { title, description } = bookDetails;
  return (
    <>
      {/* <CategoryHome /> */}
      <div className={css.bookWrapper}>
        <div className={css.bookDetails}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={css.bookContainer}>
          <ul className={css.bookList} onClick={() => setOpen(true)}>
            {bookList.map(({ id, name, description, image, placeholder }) => (
              <li key={id} onClick={() => setOpen(true)}>
                <h4>
                  {name}&nbsp;{id}
                </h4>
                <div className={css.bookImage}>
                  <div className={css.lazyLoadContainer}>
                    <LazyLoadImage
                      className={css.lazyLoad}
                      key={id}
                      effect="blur"
                      src={image}
                      alt={`toy image ${id}`}
                      placeholderSrc={placeholder}
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
