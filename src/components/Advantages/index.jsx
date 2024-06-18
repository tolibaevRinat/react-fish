import React from 'react';

import styles from './advantges.module.scss';

const Advantages = () => {
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
  return (
    <section className={`${styles.advantages} rel z-5`}>
      <div className="container">
        <h2 className={`${styles.title} t-al-right f-700 title`}>Наши преимущества</h2>
        <ul className={`${styles.list} gap-20 t-al-center `}>
          {data.map((obj) => (
            <li key={obj.id} className={`${styles.item}`}>
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
