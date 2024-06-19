import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './advantges.module.scss';

const Advantages = ({ isMobile }) => {
  const data = [
    {
      id: 0,
      title: 'Лучшие цены на рынке',
      text: 'Мы стараемся делать цены максимальное вкусными только для вас',
    },
    {
      id: 1,
      title: 'Быстрая доставка',
      text: 'Мы стараемся делать цены максимальное вкусными только для вас',
    },
    {
      id: 2,
      title: 'Гарантия качества',
      text: 'Мы стараемся делать цены максимальное вкусными только для вас',
    },
    {
      id: 3,
      title: 'Ежедневные поставки',
      text: 'Мы стараемся делать цены максимальное вкусными только для вас',
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.advantages',
          start: 'top 80%',
          end: 'top 30%',
        },
      });
      tl.from('.advantages__title', {
        opacity: 0,
        x: 200,
      });
      tl.from('.advantages__item-01', {
        opacity: 0,
        x: -200,
        y: 200,
        duration: 0.4,
      });
      tl.from('.advantages__item-02', {
        opacity: 0,
        x: -100,
        y: 400,
        duration: 0.4,
      });
      tl.from('.advantages__item-03', {
        opacity: 0,
        x: 100,
        y: 400,
        duration: 0.4,
      });
      tl.from('.advantages__item-04', {
        opacity: 0,
        x: 200,
        y: 400,
        duration: 0.4,
      });
    }
  }, [isMobile]);
  return (
    <section className={`${styles.advantages} advantages rel z-5`}>
      <div className="container">
        <h2 className={`${styles.title} advantages__title t-al-right f-700 title`}>
          Наши преимущества
        </h2>
        <ul className={`${styles.list} gap-20 t-al-center `}>
          {data.map((obj) => (
            <li key={obj.id} className={`${styles.item} advantages__item-0${obj.id + 1}`}>
              <img src={`img/icons/ad-0${obj.id + 1}.svg`} alt=" " />
              <h3 className={`${styles.subtitle} f-700`}>{obj.title}</h3>
              <p className={`${styles.text}`}>{obj.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Advantages;
