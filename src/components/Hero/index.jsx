import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './hero.module.scss';

const Hero = ({ isSmallMobile }) => {
  return (
    <section className={`${styles.hero} rel`}>
      <picture className={`${styles.surge_01}`}>
        <source srcSet="img/hero-bg.webp" type="image/webp" />
        <img src="img/hero-bg.png" alt=" " />
      </picture>
      <div className={`${styles.body} container rel z-5 flex al-s`}>
        <div className={`${styles.content} flex f-d-col `}>
          <h1 className={`${styles.title} uppercase f-700`}>
            <span>САМАЯ</span> ВКУСНАЯ РЫБА
          </h1>
          <p className={`${styles.text}`}>
            Мы сотрудничаем с лучшими поставщиками рыбной продукции среди стран СНГ
          </p>
          {!isSmallMobile && (
            <picture className={`${styles.img}`}>
              <source srcSet="img/hero.webp" type="image/webp" />
              <img src="img/hero.png" alt="Рыба" />
            </picture>
          )}
          <a className={`${styles.to_catalog} rel`} href="#!">
            <img src="img/sun.svg" alt=" " />
            <span className="rel z-5 f-700">
              Перейти
              <br /> в каталог
            </span>
          </a>
        </div>
        {isSmallMobile && (
          <picture className={`${styles.img}`}>
            <source srcSet="img/hero.webp" type="image/webp" />
            <img src="img/hero.png" alt="Рыба" />
          </picture>
        )}
      </div>
    </section>
  );
};
export default Hero;
