import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './cart.module.scss';

const Cart = () => {
  const isLaptop = useMediaQuery({
    query: '(min-width: 1440.98px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767.98px)',
  });
  const isSmallMobile = useMediaQuery({
    query: '(max-width: 479.98px)',
  });

  return (
    <section className={`${styles.cart} flex`}>
      <div className={`${styles.main} flex f-d-col gap-20 grow`}>
        <h2 className={`${styles.title} `}>Ваша корзина</h2>
        <ul className={`${styles.list} flex f-d-col gap-20`}>
          <li>
            {!isSmallMobile && (
              <article className={`${styles.item} flex al-c gap-20 jus-b`}>
                <div className={`${styles.fish} flex al-c gap-20`}>
                  <picture className={`${styles.img} rel z-5`}>
                    <source srcSet="img/items/01.webp" type="image/webp" />
                    <img src="img/items/01.png" alt="Рыба" />
                  </picture>
                  <div className="flex f-d-col gap-10">
                    <h3 className={`${styles.name}`}>
                      Форель слабосоленая с добавлением пряностей
                    </h3>
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
                    <h3 className={`${styles.name}`}>
                      Форель слабосоленая с добавлением пряностей
                    </h3>
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
      <form className={`${styles.pay}`}>
        <div className={`${styles.inner} flex f-d-col gap-20 rel`}>
          <h2 className={`${styles.title_2}`}>Оплата и доставка</h2>
          <div className={`${styles.check} flex f-d-col gap-10`}>
            <h3 className={`${styles.subtitle}`}>Выберите способ доставки</h3>
            <label className="flex al-c gap-10">
              <input type="radio" name="delivery" />
              <span className="flex f-cen">
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Самовывоз
            </label>
            <label className="flex al-c gap-10">
              <input type="radio" defaultChecked name="delivery" />
              <span className="flex f-cen">
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Курьером
            </label>
          </div>
          <div className={`${styles.check} flex f-d-col gap-10`}>
            <h3 className={`${styles.subtitle}`}>Выберите способ доставки</h3>
            <label className="flex al-c gap-10">
              <input type="radio" name="toPay" />
              <span className="flex f-cen">
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Наличными (При получении)
            </label>
            <label className="flex al-c gap-10">
              <input type="radio" defaultChecked name="toPay" />
              <span className="flex f-cen">
                <svg
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              Банковской картой
            </label>
          </div>
          <div className={`${styles.check} flex f-d-col gap-10`}>
            <h3 className={`${styles.subtitle}`}>Мобильный телефон</h3>
            <input className={`${styles.input}`} type="tel" placeholder="Телефон" />
          </div>
          {(isLaptop || isMobile) && (
            <>
              <div className={`${styles.check} flex f-d-col gap-10`}>
                <h3 className={`${styles.subtitle}`}>Эл. почта</h3>
                <input
                  className={`${styles.input}`}
                  type="email"
                  placeholder="naumov.d@gmail.com"
                />
              </div>
              <div className={`${styles.check} flex f-d-col gap-10`}>
                <h3 className={`${styles.subtitle}`}>Куда доставлять</h3>
                <input className={`${styles.input}`} type="text" placeholder="Введите адрес" />
              </div>
              <button className={`${styles.submit}`} type="submit">
                <a className={`${styles.to_catalog} rel flex f-cen t-a-cen`} href="#!">
                  <img src="img/sun.svg" alt=" " />
                  <span className="rel z-5 f-700">
                    Задать <br /> вопрос
                  </span>
                </a>
              </button>
            </>
          )}
        </div>

        {!isMobile && !isLaptop && (
          <div className={`${styles.right} flex f-d-col gap-20`}>
            <div className={`${styles.check} flex f-d-col gap-10`}>
              <h3 className={`${styles.subtitle}`}>Эл. почта</h3>
              <input className={`${styles.input}`} type="email" placeholder="naumov.d@gmail.com" />
            </div>
            <div className={`${styles.check} flex f-d-col gap-10`}>
              <h3 className={`${styles.subtitle}`}>Куда доставлять</h3>
              <input className={`${styles.input}`} type="text" placeholder="Введите адрес" />
            </div>
            <button className={`${styles.submit}`} type="submit">
              <a className={`${styles.to_catalog} rel flex f-cen t-a-cen`} href="#!">
                <img src="img/sun.svg" alt=" " />
                <span className="rel z-5 f-700">
                  Задать <br /> вопрос
                </span>
              </a>
            </button>
          </div>
        )}
      </form>
    </section>
  );
};
export default Cart;
