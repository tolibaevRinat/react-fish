import React from 'react';

import styles from './cart.module.scss';
const Pap = ({ isLaptop, isMobile }) => {
  return (
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
  );
};
export default Pap;
