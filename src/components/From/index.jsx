import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './from.module.scss';

const From = ({ isPc, isMobile }) => {
  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.from',
          start: 'bottom 150%',
          end: 'top 30%',
        },
      });
      tl.from('.from__img', {
        scale: 0,
      });
      tl.from('.from__title', {
        opacity: 0,
        x: 300,
        // delay: 0.3,
      });
      tl.from('.from__text-01', {
        opacity: 0,
        x: 300,
        // delay: 0.6,
      });
      tl.from('.from__catalog', {
        scale: 0,
        // delay: 0.9,
      });
      tl.from('.from__text-02', {
        opacity: 0,
        x: 300,
        // delay: 1.2,
      });
      tl.from('.from__arrow', {
        opacity: 0,
        x: 300,
        // delay: 1.5,
      });
    }
  }, [isMobile]);

  return (
    <section className={`${styles.from} from rel`}>
      <img className={`${styles.bg}`} src="img/advantage-bg.svg" alt=" " />
      <div className={`${styles.body} container flex`}>
        <picture className={`${styles.img} from__img`}>
          <source srcSet="img/bear.webp" type="image/webp" />
          <img src="img/bear.png" alt="Медведь" />
        </picture>
        <div className={`${styles.content} rel z-5`}>
          <h2 className={`${styles.title} title from__title`}>
            Наша рыбка
            <br /> прямиком из Якутии
          </h2>
          <p className={`${styles.text} from__text-01 rel`}>
            Рыбу диетологи советуют есть хотя бы дважды в неделю. Потому что в ней полно важных
            веществ. Здесь вам и витамины (A, E, D), и омега-3 жирные кислоты, йод, кальций, цинк,
            селен, железо, фосфор, магний, белок. Благодаря всему этому рыба считается полезной
            для тела, суставов и мозга. Она приостанавливает старение клеток, стимулирует
            репродуктивную функцию, снижает уровень холестерина — полезных свойств не перечесть.
            {isPc && <img className={`${styles.arrow} from__arrow`} src="img/arrow.svg" alt=" " />}
          </p>
          <div className={`${styles.bottom}`}>
            <a className={`${styles.to_catalog} from__catalog rel`} href="#catalog">
              <img src="img/sun-white.svg" alt=" " />
              <span className="rel z-5 f-700">
                Смотреть
                <br /> каталог
              </span>
            </a>
            <p className={`${styles.text_2} from__text-02`}>
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
