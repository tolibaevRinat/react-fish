import React from 'react';

import styles from '../Fishes/fishes.module.scss';

const Favorite = () => {
  return (
    <li>
      <article className={`${styles.item} flex f-d-col rel`}>
        <div className={`${styles.top} flex al-f-s jus-n`}>
          <button className={`${styles.like} ${styles.like_2} rel z-5 flex f-cen`} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="28px" height="28px">
              <path d="M 42 5 L 32 5 L 32 3 C 32 1.347656 30.652344 0 29 0 L 21 0 C 19.347656 0 18 1.347656 18 3 L 18 5 L 8 5 C 7.449219 5 7 5.449219 7 6 C 7 6.550781 7.449219 7 8 7 L 9.085938 7 L 12.695313 47.515625 C 12.820313 48.90625 14.003906 50 15.390625 50 L 34.605469 50 C 35.992188 50 37.175781 48.90625 37.300781 47.515625 L 40.914063 7 L 42 7 C 42.554688 7 43 6.550781 43 6 C 43 5.449219 42.554688 5 42 5 Z M 20 44 C 20 44.554688 19.550781 45 19 45 C 18.449219 45 18 44.554688 18 44 L 18 11 C 18 10.449219 18.449219 10 19 10 C 19.550781 10 20 10.449219 20 11 Z M 20 3 C 20 2.449219 20.449219 2 21 2 L 29 2 C 29.550781 2 30 2.449219 30 3 L 30 5 L 20 5 Z M 26 44 C 26 44.554688 25.550781 45 25 45 C 24.449219 45 24 44.554688 24 44 L 24 11 C 24 10.449219 24.449219 10 25 10 C 25.550781 10 26 10.449219 26 11 Z M 32 44 C 32 44.554688 31.554688 45 31 45 C 30.445313 45 30 44.554688 30 44 L 30 11 C 30 10.449219 30.445313 10 31 10 C 31.554688 10 32 10.449219 32 11 Z" />
            </svg>
          </button>
          <div className={`${styles.img} _ibg`}>
            <picture>
              <source srcSet="img/items/01.webp" type="image/webp" />
              <img src="img/items/01.jpg" alt="Рыба" />
            </picture>
          </div>
        </div>
        <div className={`${styles.center}`}>
          <h3 className={`${styles.subtitle} f-700`}>Форель</h3>
          <p className={`${styles.text}`}>
            У форели очень нежное и сочное филе, что в свою очередь позволяет надолго запомнить этот
            вкус...
          </p>
        </div>
        <div className={`${styles.bottom} flex al-c jus-b gap-5`}>
          <button
            onClick={() => onAddNewItem()}
            className={`${styles.buy} flex f-cen f-700`}
            type="button"
          >
            Купить
          </button>
          <div className={`${styles.prices} flex f-d-col al-c`}>
            <div className={`${styles.price} f-700`}>1800 ₽ / кг.</div>
            <div className={`${styles.have} f-300`}>В наличии 22.5 кг</div>
          </div>
        </div>
      </article>
    </li>
  );
};
export default Favorite;
