import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import styles from './cart.module.scss';
import CartItem from './CartItem';
import Pay from './Pay';

const Cart = ({ close }) => {
  const items = useSelector((state) => state.cart.items);

  const totalPrice = useSelector((state) =>
    state.cart.items.reduce((sum, obj) => {
      let all = 0;
      obj.share
        ? (all += sum + obj.sharePrice * obj.weight)
        : (all += sum + obj.price * obj.weight);

      return all;
    }, 0),
  );

  const priceWithShare = useSelector((state) =>
    state.cart.items.reduce((sum, obj) => sum + obj.price * obj.weight, 0),
  );

  const isLaptop = useMediaQuery({ minWidth: 1440.98 });
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isSmallMobile = useMediaQuery({ maxWidth: 479.98 });

  return (
    <section className={`${styles.cart} flex`}>
      <div className={`${styles.main} flex f-d-col gap-20 grow`}>
        <h2 className={`${styles.title} `}>Ваша корзина</h2>
        {items.length > 0 ? (
          <ul className={`${styles.list} flex f-d-col gap-20`}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} isMobile={isMobile} isSmallMobile={isSmallMobile} />
            ))}
          </ul>
        ) : (
          <h2 className={`${styles.empty} ${styles.list} flex f-cen`}>Корзина пустая </h2>
        )}

        <div className={`${styles.bottom} flex al-c gap-20 jus-b`}>
          <button onClick={close} className={`${styles.close} flex al-c gap-10`}>
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
              <b>Итого:</b> {totalPrice} ₽
            </p>
            <p className={`${styles.share} flex gap-10`}>
              <b>Со скидкой:</b> {priceWithShare} ₽
            </p>
          </div>
        </div>
      </div>
      <Pay isLaptop={isLaptop} isMobile={isMobile} />
    </section>
  );
};
export default Cart;
