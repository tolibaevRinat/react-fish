import React from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from './from.module.scss';

const From = ({ isPc }) => {
  return (
    <section className={`${styles.from} rel`}>
      <img className={`${styles.bg}`} src="img/advantage-bg.svg" alt=" " />
      <div className={`${styles.body} container flex`}>
        <picture className={`${styles.img}`}>
          <source srcSet="img/bear.webp" type="image/webp" />
          <img src="img/bear.png" alt="Медведь" />
        </picture>
        <div className={`${styles.content} rel z-5`}>
          <h2 className={`${styles.title} title`}>
            Наша рыбка
            <br /> прямиком из Якутии
          </h2>
          <p className={`${styles.text} rel`}>
            Рыбу диетологи советуют есть хотя бы дважды в неделю. Потому что в ней полно важных
            веществ. Здесь вам и витамины (A, E, D), и омега-3 жирные кислоты, йод, кальций, цинк,
            селен, железо, фосфор, магний, белок. Благодаря всему этому рыба считается полезной
            для тела, суставов и мозга. Она приостанавливает старение клеток, стимулирует
            репродуктивную функцию, снижает уровень холестерина — полезных свойств не перечесть.
            {isPc && <img className={`${styles.arrow}`} src="img/arrow.svg" alt=" " />}
          </p>
          <div className={`${styles.bottom}`}>
            <a className={`${styles.to_catalog} rel`} href="#!">
              <img src="img/sun-white.svg" alt=" " />
              <span className="rel z-5 f-700">
                Смотреть
                <br /> каталог
              </span>
            </a>
            <p className={`${styles.text_2}`}>
              Если употреблять в пищу рыбу семейства карповых (лещ, подлещик и всё остальное), легко
              можно получить описторхоз, который не выварить, — говорит врач-гастроэнтеролог Галина
              Барташевич. — Элементарно при приготовлении ухи из такой рыбы придется три-четыре раза
              менять воду, чтобы рыба прошла термическую обработку. А жарить ее нужно не меньше 20
              минут, но тогда у вас останутся одни угли.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default From;
