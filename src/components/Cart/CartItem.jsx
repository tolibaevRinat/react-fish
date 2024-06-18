import React from 'react';

import styles from './cart.module.scss';

const CartItem = ({ isMobile, isSmallMobile }) => {
  return (
    <li>
      {!isSmallMobile && (
        <article className={`${styles.item} flex al-c gap-20 jus-b`}>
          <div className={`${styles.fish} flex al-c gap-20`}>
            <picture className={`${styles.img} rel z-5`}>
              <source srcSet="img/items/01.webp" type="image/webp" />
              <img src="img/items/01.png" alt="Рыба" />
            </picture>
            <div className="flex f-d-col gap-10">
              <h3 className={`${styles.name}`}>Форель</h3>
              {isMobile && (
                <div className="flex al-c jus-b">
                  <div className={`${styles.count} flex al-c gap-20`}>
                    <button className={`${styles.btn}`}>
                      <b>-</b>
                    </button>
                    <div className={`${styles.weight}`}>
                      <b>1,5 кг</b>
                    </div>
                    <button className={`${styles.btn}`}>
                      <b>+</b>
                    </button>
                  </div>
                  <div className={`${styles.price} flex f-d-col al-n`}>
                    <del className={`${styles.old_price}`}>2500 ₽ </del>
                    <span>1800 ₽</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isMobile && (
            <>
              <div className={`${styles.count} flex al-c gap-20`}>
                <button className={`${styles.btn}`}>
                  <b>-</b>
                </button>
                <div className={`${styles.weight}`}>
                  <b>1,5 кг</b>
                </div>
                <button className={`${styles.btn}`}>
                  <b>+</b>
                </button>
              </div>
              <div className={`${styles.price} flex f-d-col al-n`}>
                <del className={`${styles.old_price}`}>2500 ₽ </del>
                <span>1800 ₽</span>
              </div>
            </>
          )}

          <button className={`${styles.delete}`}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 17L17 1M17 17L1 1" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </article>
      )}
      {isSmallMobile && (
        <article className={`${styles.item} flex al-c gap-20 jus-b`}>
          <div className={`${styles.fish} flex f-d-col gap-20`}>
            <div className={`${styles.top_container} flex al-c jus-b`}>
              <picture className={`${styles.img} rel z-5`}>
                <source srcSet="img/items/01.webp" type="image/webp" />
                <img src="img/items/01.png" alt="Рыба" />
              </picture>
              <h3 className={`${styles.name}`}>{title}</h3>
              <button className={`${styles.delete}`}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 17L17 1M17 17L1 1" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex jus-b gap-10">
              <div className={`${styles.count} flex al-c gap-20`}>
                <button className={`${styles.btn}`}>
                  <b>-</b>
                </button>
                <div className={`${styles.weight}`}>
                  <b>1,5 кг</b>
                </div>
                <button className={`${styles.btn}`}>
                  <b>+</b>
                </button>
              </div>
              <div className={`${styles.price} flex f-d-col al-n`}>
                <del className={`${styles.old_price}`}>2500 ₽ </del>
                <span>1800 ₽</span>
              </div>
            </div>
          </div>
        </article>
      )}
    </li>
  );
};
export default CartItem;
