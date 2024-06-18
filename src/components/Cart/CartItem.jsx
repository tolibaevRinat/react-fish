import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './cart.module.scss';
import { upWeight, downWeight, removeItem } from '../../redux/slices/cartSlice';

const CartItem = ({
  id,
  title,
  share,
  sharePrice,
  price,
  image,
  maxWeight,
  isMobile,
  isSmallMobile,
}) => {
  const { weight } = useSelector((state) => state.cart.items.find((obj) => obj.id === id));

  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(upWeight({ id }));
  };
  const onClickMinus = () => {
    dispatch(downWeight({ id }));
  };
  const onClickRemove = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <li>
      {!isSmallMobile && (
        <article className={`${styles.item} flex al-c gap-20 jus-b`}>
          <div className={`${styles.fish} flex al-c gap-20`}>
            <picture className={`${styles.img} rel z-5`}>
              <source srcSet={image.webp} type="image/webp" />
              <img src={image.jpg} alt="Рыба" />
            </picture>
            <div className="flex f-d-col gap-10">
              <h3 className={`${styles.name}`}>{title}</h3>
              {isMobile && (
                <div className="flex al-c jus-b">
                  <div className={`${styles.count} flex al-c gap-20`}>
                    <button
                      onClick={onClickMinus}
                      disabled={weight < 1}
                      className={`${styles.btn}`}
                    >
                      <b>-</b>
                    </button>
                    <div className={`${styles.weight}`}>
                      <b>{weight} кг</b>
                    </div>
                    <button
                      onClick={onClickPlus}
                      disabled={weight > maxWeight - 0.5}
                      className={`${styles.btn}`}
                    >
                      <b>+</b>
                    </button>
                  </div>
                  <div className={`${styles.price} flex f-d-col al-n`}>
                    {share && <del className={`${styles.old_price}`}>{sharePrice} ₽ </del>}
                    <span>{price} ₽</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {!isMobile && (
            <>
              <div className={`${styles.count} flex al-c gap-20`}>
                <button onClick={onClickMinus} disabled={weight < 1} className={`${styles.btn}`}>
                  <b>-</b>
                </button>
                <div className={`${styles.weight}`}>
                  <b>{weight} кг</b>
                </div>
                <button
                  onClick={onClickPlus}
                  disabled={weight > maxWeight - 0.5}
                  className={`${styles.btn}`}
                >
                  <b>+</b>
                </button>
              </div>
              <div className={`${styles.price} flex f-d-col al-n`}>
                {share && <del className={`${styles.old_price}`}>{sharePrice} ₽ </del>}
                <span>{price} ₽</span>
              </div>
            </>
          )}

          <button onClick={onClickRemove} className={`${styles.delete}`}>
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
              <button onClick={onClickRemove} className={`${styles.delete}`}>
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
                <button onClick={onClickMinus} disabled={weight < 1} className={`${styles.btn}`}>
                  <b>-</b>
                </button>
                <div className={`${styles.weight}`}>
                  <b>{weight} кг</b>
                </div>
                <button
                  onClick={onClickMinus}
                  disabled={weight > maxWeight - 0.5}
                  className={`${styles.btn}`}
                >
                  <b>+</b>
                </button>
              </div>
              <div className={`${styles.price} flex f-d-col al-n`}>
                {share && <del className={`${styles.old_price}`}>{sharePrice} ₽ </del>}
                <span>{price} ₽</span>
              </div>
            </div>
          </div>
        </article>
      )}
    </li>
  );
};
export default CartItem;
