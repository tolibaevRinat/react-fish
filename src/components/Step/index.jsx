import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './step.module.scss';
const Step = ({ isSmallMobile, isFinishSize, isMobile }) => {
  const steps = [
    {
      id: 0,
      number: 'img/icons/one.svg',
      text: 'Проверяется нашими специалистами по качеству и сортируется',
    },
    {
      id: 1,
      number: 'img/icons/two.svg',
      text: 'Проходит термическую обработку, для того чтобы Вы получили максимально чистый продукт',
    },
    {
      id: 2,
      number: 'img/icons/three.svg',
      text: 'Проходит ещё одну проверку, и только после этого отдается в продажу',
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.step',
          start: 'top 50%',
          end: 'bottom 40%',
        },
      });
      tl.from('.step__img', {
        opacity: 0,
        scale: 0,
      });
      tl.from(
        '.step__title',
        {
          opacity: 0,
        },
        '-=0.2',
      );
      tl.from(
        '.step__item-01',
        {
          opacity: 0,
          x: 400,
        },
        '-=0.2',
      );
      tl.from(
        '.step__arrow-1',
        {
          opacity: 0,
          x: 400,
        },
        '-=0.2',
      );
      tl.from(
        '.step__item-02',
        {
          opacity: 0,
          x: 400,
        },
        '+=0.2',
      );
      tl.from(
        '.step__arrow-2',
        {
          opacity: 0,
          x: 400,
        },
        '-=0.2',
      );
      tl.from(
        '.step__item-03',
        {
          opacity: 0,
          x: 400,
        },
        '+=0.2',
      );
      tl.from(
        '.step__catalog',
        {
          scale: 0,
        },
        '-=0.1',
      );
      tl.from(
        '.step__marima',
        {
          opacity: 0,
          x: 200,
        },
        '-=0.1',
      );
    }
  }, [isMobile]);

  return (
    <section className={`${styles.step} step rel z-50`}>
      <picture className={`${styles.marima} step__marima`}>
        <source srcSet="img/marima.webp" type="image/webp" />
        <img src="img/marima.jpg" alt=" " />
      </picture>
      <div className={`${styles.body} container flex gap-20 jus-n`}>
        <picture className={`${styles.img} step__img rel z-5`}>
          <source srcSet="img/step.webp" type="image/webp" />
          <img src="img/step.png" alt="Рыба" />
        </picture>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title} title step__title`}>
            Прежде чем попасть
            {isFinishSize && <br />}к вам на стол рыбка
          </h2>
          <ul className={`${styles.list} flex f-d-col rel`}>
            {isSmallMobile && (
              <>
                <img
                  className={`${styles.arrow_1} step__arrow-1`}
                  src="img/icons/arrow-down.svg"
                  alt=" "
                />
                <img
                  className={`${styles.arrow_2} step__arrow-2`}
                  src="img/icons/arrow-down.svg"
                  alt=" "
                />
              </>
            )}
            {steps.map((step) => (
              <li
                key={step.id}
                className={`${styles.item} step__item-0${step.id + 1} flex al-c gap-10`}
              >
                <img src={step.number} alt=" " />
                <p className={`${styles.text} f-300`}>{step.text}</p>
              </li>
            ))}
          </ul>
          <a
            className={`${styles.to_catalog} step__catalog rel flex f-cen t-a-cen z-5`}
            href="#catalog"
          >
            <img src="img/sun-white.svg" alt=" " />
            <span className="rel z-5 f-700">
              Заказать
              <br /> рыбку
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Step;
