import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './scss/style.scss';

import { fetchProduct } from './redux/slices/productSlice';

const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const Advantages = React.lazy(() => import('./components/Advantages'));
const From = React.lazy(() => import('./components/From'));
const Fishes = React.lazy(() => import('./components/Fishes'));
const Pagination = React.lazy(() => import('./components/Pagination'));
const Skeleton = React.lazy(() => import('./components/Fishes/Skeleton'));
const Step = React.lazy(() => import('./components/Step'));
const Question = React.lazy(() => import('./components/Question'));
const Footer = React.lazy(() => import('./components/Footer'));

import Preloader from './components/Preloader';

const URL = `https://82375eda35683977.mokky.dev/items`;

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const isPc = useMediaQuery({ minWidth: 1600.98 });
  const isSmallLaptop = useMediaQuery({ minWidth: 1250.98 });
  const isLaptop = useMediaQuery({ minWidth: 1440.98 });
  const isTablet = useMediaQuery({ minWidth: 991.98 });
  const isMobile = useMediaQuery({ minWidth: 767.98 });
  const isSmallMobile = useMediaQuery({ minWidth: 479.98 });
  const isFinishSize = useMediaQuery({ minWidth: 359.98 });

  const dispatch = useDispatch();
  const fishes = useSelector((state) => state.product.fishes);
  const status = useSelector((state) => state.product.status);

  // Рендер количество пицц на "1 страницу"
  const pageLimit = !isSmallLaptop ? (!isTablet ? (!isMobile ? 1 : 2) : 3) : 4;
  React.useEffect(() => {
    dispatch(fetchProduct({ URL, currentPage, pageLimit }));
  }, [currentPage, pageLimit]);

  const totalPages = fishes.meta ? fishes.meta.total_pages : 4;

  const skeleton = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.items',
          start: 'top 60%',
          end: 'top 30%',
        },
      });
      tl.from('.items__title', {
        opacity: 0,
        x: -200,
      });
    }
  }, [isMobile]);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        <Header isLaptop={isLaptop} isMobile={isMobile} />
        <main className="page">
          <Hero isSmallMobile={isSmallMobile} isMobile={isMobile} />
          <Advantages isMobile={isMobile} />
          <From isPc={isPc} isMobile={isMobile} />
          <section className={`items rel`} id="catalog">
            <img className={`items__bg`} src="img/items-bg.svg" alt=" " />
            <div className={`container`}>
              <h2 className={`items__title title rel z-5`}>Наша продукция</h2>
              <ul className={`items__list grid gap-20 rel z-5`}>
                {status === 'loading'
                  ? skeleton
                  : fishes.items.map((fish) => <Fishes key={fish.id} {...fish} />)}
              </ul>
              {status === 'error' && (
                <section className={`empty rel z-5`}>
                  <h2>Ошибка при получении товаров &#128532;</h2>
                  <p>
                    К сожалению, произошла ошибка при получении товаров. Пожалуйста, попробуйте
                    снова позже.
                  </p>
                </section>
              )}

              <Pagination totalPages={totalPages} onChange={(number) => setCurrentPage(number)} />
            </div>
          </section>
          <Step isSmallMobile={isSmallMobile} isFinishSize={isFinishSize} isMobile={isMobile} />
          <Question isMobile={isMobile} />
        </main>
        <Footer isTablet={isTablet} />
      </Suspense>
    </>
  );
};

export default App;
