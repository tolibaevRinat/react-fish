import React from 'react';
import { useInView } from 'react-intersection-observer';
import Popup from 'reactjs-popup';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

import styles from './header.module.scss';
import Cart from '../Cart';
import Favorite from '../Favorite';

const Header = ({ isMobile }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { items } = useSelector((state) => state.cart);
  const { favorites } = useSelector((state) => state.favorite);

  const menuLinks = [
    { title: 'Главная', to: '#main' },
    { title: 'Каталог', to: '#catalog' },
    { title: 'Контакты', to: '#contact' },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const handleOpen = () => (document.body.style.overflow = 'hidden');
  const handleClose = () => (document.body.style.overflow = 'auto');

  return (
    <header ref={ref} className={`${styles.header} header`}>
      {showInput && (
        <div onClick={() => setShowInput(false)} className={`${styles.header__overlay}`}></div>
      )}
      <div className={`${styles.header__wrapper} ${!inView ? styles.scroll : ''}`}>
        <div className="container">
          <div className={`rel flex al-c jus-b`}>
            {isMobile && (
              <a className="logo" href="!#">
                <img src="img/logo.svg" alt="Логотип" />
              </a>
            )}
            <nav className="menu">
              <div className={`${styles.menu__list} ${open ? styles.open : ''}`}>
                {!isMobile && (
                  <a className={`${styles.logo} logo`} href="!#">
                    <img src="img/logo.svg" alt="Логотип" />
                  </a>
                )}
                <ul className={`flex al-c`}>
                  {menuLinks.map((menuLink, index) => (
                    <li key={index} className={styles.menu__link}>
                      <a onClick={() => setOpen(false)} className="menu__link" href={menuLink.to}>
                        {menuLink.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className={`${styles.menu__burger} ${open ? styles.open : ''}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            <div className="header__actions flex al-c gap-14">
              <Popup
                onOpen={handleOpen}
                onClose={handleClose}
                modal
                trigger={
                  <button className={`${styles.header__like} rel`} type="button">
                    <span className="flex f-cen">{favorites.length}</span>
                    <svg
                      width="32"
                      height="30"
                      viewBox="0 0 32 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M15.98 6C15.98 6 13.48 1 8.42 1C4.3 1 1.04 4.44 1 8.56C0.91 17.1 7.76 23.17 15.28 28.28C15.49 28.42 15.73 28.5 15.98 28.5C16.23 28.5 16.48 28.42 16.68 28.28C24.2 23.17 31.05 17.1 30.96 8.56C30.92 4.44 27.66 1 23.54 1C18.48 1 15.98 6 15.98 6Z"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                }
              >
                {(close) => (
                  <section className={`${styles.favorite}`}>
                    <div className={`${styles.top} flex al-c jus-b gap-20`}>
                      <h2 className={`${styles.favorite_title}`}>Понравившиеся товары</h2>
                      <button onClick={close} className={`${styles.close}`}>
                        <svg
                          width="24.003906"
                          height="24.003906"
                          viewBox="0 0 24.0039 24.0039"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <path
                            d="M0.5 0.5L23.5 23.5M0.5 23.5L23.5 0.5"
                            strokeOpacity="1.000000"
                            strokeWidth="1.000000"
                          />
                        </svg>
                      </button>
                    </div>
                    {favorites.length > 0 ? (
                      <ul className={`${styles.favorite_list}`}>
                        {favorites.map((favorite) => (
                          <Favorite key={favorite.id} {...favorite} />
                        ))}
                      </ul>
                    ) : (
                      <h2 className={`${styles.empty} ${styles.list} flex f-cen`}>
                        Закладки пустые
                      </h2>
                    )}
                  </section>
                )}
              </Popup>

              <Popup
                onOpen={handleOpen}
                onClose={handleClose}
                trigger={
                  <button className={`${styles.basket} rel`}>
                    <span className="flex f-cen">{items.length}</span>
                    <svg
                      width="34.367188"
                      height="28.670334"
                      viewBox="0 0 34.3672 28.6703"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M1.03 12.32C1.08 12.07 1.19 11.84 1.35 11.64C1.5 11.44 1.7 11.28 1.93 11.17C2.16 11.06 2.41 11 2.66 11L31.7 11C31.95 11 32.2 11.06 32.43 11.17C32.65 11.28 32.85 11.44 33.01 11.64C33.16 11.84 33.27 12.07 33.33 12.32C33.38 12.57 33.37 12.82 33.31 13.07L30.3 25.14C30.12 25.86 29.7 26.5 29.12 26.96C28.53 27.42 27.81 27.67 27.07 27.67L7.29 27.67C6.55 27.67 5.83 27.42 5.24 26.96C4.66 26.5 4.24 25.86 4.06 25.14L1.05 13.07L1.05 13.07C0.98 12.82 0.98 12.57 1.03 12.32Z"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector"
                        d="M12.18 17.67L12.18 21M22.17 17.67L22.17 21M7.19 11L13.85 1M27.17 11L20.51 1"
                        strokeOpacity="1.000000"
                        strokeWidth="2.000000"
                      />
                    </svg>
                  </button>
                }
                modal
              >
                {(close) => <Cart close={close} />}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
