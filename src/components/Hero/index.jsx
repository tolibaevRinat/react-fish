import React from 'react';
import gsap from 'gsap';

import styles from './hero.module.scss';

const Hero = ({ isSmallMobile, isMobile }) => {
  React.useLayoutEffect(() => {
    if (isMobile) {
      gsap.from('.hero__title-1', { x: -200, opacity: 0, delay: 0.5, duration: 1 });
      gsap.from('.hero__title-2', { x: -150, opacity: 0, delay: 0.8, duration: 1 });
      gsap.from('.hero__title-3', { x: -100, opacity: 0, delay: 1.1, duration: 1 });
      gsap.from('.hero__img', { x: 200, opacity: 0, delay: 1.1, duration: 1 });
      gsap.from('.hero__text', { x: -100, y: 100, opacity: 0, delay: 1.1, duration: 1 });
      gsap.from('.hero__catalog', { y: 100, opacity: 0, delay: 1.1, duration: 1 });
    }
  }, [isMobile]);

  return (
    <section className={`${styles.hero} rel`} id="main">
      <picture className={`${styles.surge_01}`}>
        <source srcSet="img/hero-bg.webp" type="image/webp" />
        <img src="img/hero-bg.png" alt=" " />
      </picture>
      <div className={`${styles.body} container rel z-5 flex al-s`}>
        <div className={`${styles.content} flex f-d-col `}>
          <h1 className={`${styles.title} uppercase f-700`}>
            <span className="block hero__title-1">САМАЯ</span>
            <div className=" hero__title-2">ВКУСНАЯ</div>
            <div className=" hero__title-3">РЫБА</div>
          </h1>
          <p className={`${styles.text} hero__text`}>
            Мы сотрудничаем с лучшими поставщиками рыбной продукции среди стран СНГ
          </p>
          {!isSmallMobile && (
            <picture className={`${styles.img} hero__img`}>
              <source srcSet="img/hero.webp" type="image/webp" />
              <img src="img/hero.png" alt="Рыба" />
            </picture>
          )}
          <a className={`${styles.to_catalog} hero__catalog rel`} href="#catalog">
            <img src="img/sun.svg" alt=" " />
            <span className="rel z-5 f-700">
              Перейти
              <br /> в каталог
            </span>
          </a>
        </div>
        {isSmallMobile && (
          <picture className={`${styles.img} hero__img`}>
            <source srcSet="img/hero.webp" type="image/webp" />
            <img src="img/hero.png" alt="Рыба" />
          </picture>
        )}
      </div>
    </section>
  );
};
export default Hero;
