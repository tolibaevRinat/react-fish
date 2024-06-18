import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './cart.module.scss';
import CartItem from './CartItem';
import Pay from './Pay';

const Cart = () => {
  const isLaptop = useMediaQuery({ minWidth: 1440.98 });
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isSmallMobile = useMediaQuery({ maxWidth: 479.98 });

  return (
    <section className={`${styles.cart} flex`}>
      <div className={`${styles.main} flex f-d-col gap-20 grow`}>
        <h2 className={`${styles.title} `}>Ваша корзина</h2>
        <ul className={`${styles.list} flex f-d-col gap-20`}>
          <CartItem isMobile={isMobile} isSmallMobile={isSmallMobile} />
        </ul>
        <div className={`${styles.bottom} flex al-c gap-20 jus-b`}>
          <button className={`${styles.close} flex al-c gap-10`}>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7H19M2 7L7.66667 1M2 7L7.66667 13"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {!isSmallMobile && 'Назад'}
          </button>
          <div className={`${styles.total_price} flex f-d-col al-n gap-10`}>
            <p className={`${styles.total} flex gap-10`}>
              <b>Итого:</b> 25 384 ₽
            </p>
            <p className={`${styles.share} flex gap-10`}>
              <b>Со скидкой:</b> 22 000 ₽
            </p>
          </div>
        </div>
      </div>
      <Pay isLaptop={isLaptop} isMobile={isMobile} />
    </section>
  );
};
export default Cart;
