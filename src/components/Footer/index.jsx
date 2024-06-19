import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './footer.module.scss';
const Footer = ({ isTablet, isMobile }) => {
  const socialImages = ['img/icons/soc-01.svg', 'img/icons/soc-02.svg', 'img/icons/soc-03.svg'];

  const links = ['Главная', 'Каталог', 'Контакты'];

  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.footer',
          start: 'bottom 100%',
          end: 'bottom 0%',
        },
      });
      tl.from('.footer__left', {
        opacity: 0,
        y: 100,
      });
      tl.from('.footer__center', {
        opacity: 0,
        y: 100,
      });
      tl.from('.footer__right', {
        opacity: 0,
        y: 100,
      });
    }
  }, [isMobile]);

  return (
    <footer className={`${styles.footer} footer`} id="contact">
      <div className={`${styles.body} container flex al-c jus-b gap-20`}>
        <div className={`${styles.left} footer__left`}>
          <div className={`${styles.top} flex f-d-col gap-10`}>
            <a className={`${styles.logo} inline-block`} href="#!">
              <img src="img/logo.svg" alt="Логотип" />
            </a>
            <span className={`${styles.call_we}`}>Позвони нам</span>
            <a className={`${styles.tel}`} href="tel:89293563244">
              8 (929) 356-32-44
            </a>
            <a className={`${styles.tel}`} href="tel:89655932895">
              8 (965) 593-28-95
            </a>
          </div>
          {!isTablet && (
            <ul className={`${styles.menu_list} flex jus-b gap-20`}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#!">{link}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {isTablet && (
          <div className={`${styles.center} footer__center`}>
            <span className={`${styles.text} inline-block`}>Мы в социальных сетях!</span>
            <ul className={`${styles.list} flex al-c gap-10`}>
              {socialImages.map((img, index) => (
                <li key={index}>
                  <a className="inline-block" href="#!">
                    <img src={img} alt="Соц. сеть" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={`${styles.right} footer__right`}>
          {isTablet && (
            <ul className={`${styles.menu_list} flex al-c jus-b gap-20`}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#!">{link}</a>
                </li>
              ))}
            </ul>
          )}
          {!isTablet && (
            <div className={`${styles.center} footer__center`}>
              <span className={`${styles.text} inline-block`}>Мы в социальных сетях!</span>
              <ul className={`${styles.list} flex al-c gap-10`}>
                {socialImages.map((img, index) => (
                  <li key={index}>
                    <a className="inline-block" href="#!">
                      <img src={img} alt="Соц. сеть" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={`${styles.poly} flex f-d-col gap-5`}>
            <p className="flex al-c gap-5">
              Рыба 14 / 2023
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 16.4009C5.86313 16.4009 3.85416 15.5687 2.34313 14.0578C0.832156 12.5467 0 10.5378 0 8.40088C0 6.264 0.832156 4.25504 2.34313 2.744C3.85416 1.23304 5.86313 0.400879 8 0.400879C10.1369 0.400879 12.1458 1.23304 13.6569 2.744C15.1678 4.25504 16 6.264 16 8.40088C16 10.5378 15.1678 12.5467 13.6569 14.0578C12.1458 15.5687 10.1369 16.4009 8 16.4009ZM8 1.65088C4.27803 1.65088 1.25 4.67891 1.25 8.40088C1.25 12.1228 4.27803 15.1509 8 15.1509C11.722 15.1509 14.75 12.1228 14.75 8.40088C14.75 4.67891 11.722 1.65088 8 1.65088ZM10.8223 11.2735C11.0663 11.0294 11.0664 10.6337 10.8223 10.3896C10.5782 10.1455 10.1824 10.1456 9.93841 10.3896C8.84178 11.4862 7.05753 11.4863 5.96091 10.3896C5.42972 9.85841 5.13716 9.15213 5.13716 8.40088C5.13716 7.64963 5.42972 6.94335 5.96091 6.41213C7.05753 5.3155 8.84178 5.31557 9.93841 6.41213C10.1825 6.65622 10.5782 6.65622 10.8223 6.41213C11.0663 6.16804 11.0663 5.77232 10.8223 5.52825C9.23828 3.94429 6.66097 3.94432 5.07703 5.52825C4.30969 6.29557 3.88713 7.31575 3.88713 8.40088C3.88713 9.486 4.30969 10.5062 5.07703 11.2735C5.869 12.0655 6.90931 12.4615 7.94966 12.4615C8.99 12.4615 10.0303 12.0655 10.8223 11.2735Z"
                  fill="#CAD9E7"
                />
              </svg>
              Все права защищены
            </p>
            <p className="flex al-c gap-10 f-wrap">
              <a href="#!">Политика конфиденциальности</a>
              <a href="#!">Публичная оферта</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
