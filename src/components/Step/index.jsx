import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './step.module.scss';
const Step = ({ isSmallMobile, isFinsihSize }) => {
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

  return (
    <section className={`${styles.step} rel z-50`}>
      <picture className={`${styles.marima}`}>
        <source srcSet="img/marima.webp" type="image/webp" />
        <img src="img/marima.jpg" alt=" " />
      </picture>
      <div className={`${styles.body} container flex gap-20 jus-n`}>
        <picture className={`${styles.img} rel z-5`}>
          <source srcSet="img/step.webp" type="image/webp" />
          <img src="img/step.png" alt="Рыба" />
        </picture>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title} title`}>
            Прежде чем попасть
            {isFinsihSize && <br />}к вам на стол рыбка
          </h2>
          <ul className={`${styles.list} flex f-d-col rel`}>
            {isSmallMobile && (
              <>
                <img className={`${styles.arrow_1}`} src="img/icons/arrow-down.svg" alt=" " />
                <img className={`${styles.arrow_2}`} src="img/icons/arrow-down.svg" alt=" " />
              </>
            )}
            {steps.map((step) => (
              <li key={step.id} className={`${styles.item} flex al-c gap-10`}>
                <img src={step.number} alt=" " />
                <p className={`${styles.text} f-300`}>{step.text}</p>
              </li>
            ))}
          </ul>
          <a className={`${styles.to_catalog} rel flex f-cen t-a-cen z-5`} href="#!">
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
