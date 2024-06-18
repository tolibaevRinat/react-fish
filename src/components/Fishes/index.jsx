import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './fishes.module.scss';
import { addItem } from '../../redux/slices/cartSlice';

const Fishes = ({ id, title, description, share, sharePrice, price, image, maxWeight }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const isHave = cartItem ? cartItem.isHave : false;

  const addToCart = () => {
    const item = {
      id,
      title,
      share,
      sharePrice,
      price,
      image,
      maxWeight,
    };
    dispatch(addItem(item));
  };
  return (
    <li>
      <article className={`${styles.item} flex f-d-col rel`}>
        <div className={`${styles.top} flex al-f-s ${share ? 'jus-b' : 'jus-n'}`}>
          {share && <div className={`${styles.share} rel z-5 flex f-cen f-700`}>Суперцена</div>}
          <button className={`${styles.like} rel z-5 flex f-cen`} type="button">
            <svg
              className="pointer"
              width="29.001465"
              height="26.750000"
              viewBox="0 0 29.0015 26.75"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M14.5 5.5C14.5 5.5 12.25 1 7.68 1C3.97 1 1.03 4.1 1 7.8C0.92 15.49 7.09 20.96 13.86 25.55C14.05 25.68 14.27 25.75 14.5 25.75C14.72 25.75 14.94 25.68 15.13 25.55C21.9 20.96 28.07 15.49 28 7.8C27.96 4.1 25.02 1 21.31 1C16.75 1 14.5 5.5 14.5 5.5Z"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={`${styles.img} _ibg`}>
            <picture>
              <source srcSet={image.webp} type="image/webp" />
              <img src={image.jpg} alt="Рыба" />
            </picture>
          </div>
        </div>
        <div className={`${styles.center}`}>
          <h3 className={`${styles.subtitle} f-700`}>{title}</h3>
          <p className={`${styles.text}`}>{description}</p>
        </div>
        <div className={`${styles.bottom} flex al-c jus-b gap-5`}>
          <button
            onClick={addToCart}
            className={`${styles.buy} ${isHave ? 'added' : ''} flex f-cen f-700`}
            type="button"
            disabled={isHave}
          >
            {isHave ? 'В корзине' : 'Купить'}
          </button>
          <div className={`${styles.prices} flex f-d-col al-c`}>
            {share && <del className={`${styles.del} al-s-n f-300`}>{sharePrice} ₽ / кг.</del>}

            <div className={`${styles.price} f-700`}>{price} ₽ / кг.</div>
            <div className={`${styles.have} f-300`}>В наличии {maxWeight} кг</div>
          </div>
        </div>
      </article>
    </li>
  );
};
export default Fishes;
