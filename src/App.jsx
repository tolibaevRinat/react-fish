import React from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';

import './scss/style.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import From from './components/From';
import Fishes from './components/Fishes';
import Pagination from './components/Pagination';
import Skeleton from './components/Fishes/Skeleton';
import Step from './components/Step';
import Question from './components/Question';
import Footer from './components/Footer';
import { fetchProduct } from './redux/slices/productSlice';

const URL = `https://82375eda35683977.mokky.dev/items`;

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const isPc = useMediaQuery({ minWidth: 1600.98 });
  const isSmallLaptop = useMediaQuery({ minWidth: 1250.98 });
  const isLaptop = useMediaQuery({ minWidth: 1440.98 });
  const isTablet = useMediaQuery({ minWidth: 991.98 });
  const isMobile = useMediaQuery({ minWidth: 767.98 });
  const isSmallMobile = useMediaQuery({ minWidth: 479.98 });
  const isFinsihSize = useMediaQuery({ minWidth: 359.98 });

  const dispatch = useDispatch();
  const fishes = useSelector((state) => state.product.fishes);
  const status = useSelector((state) => state.product.status);

  // Рендор количество пицц на "1 страницу"
  const pageLimit = !isSmallLaptop ? (!isTablet ? (!isMobile ? 1 : 2) : 3) : 4;
  React.useEffect(() => {
    dispatch(fetchProduct({ URL, currentPage, pageLimit }));
  }, [currentPage, pageLimit]);

  const totalPages = fishes.meta ? fishes.meta.total_pages : 4;

  return (
    <>
      <Header isLaptop={isLaptop} isMobile={isMobile} />
      <main className="page">
        <Hero isSmallMobile={isSmallMobile} />
        <Advantages />
        <From isPc={isPc} />
        <section className={`items rel`} id="catalog">
          <img className={`items__bg`} src="img/items-bg.svg" alt=" " />
          <div className={`container`}>
            <h2 className={`items__title title rel z-5`}>Наша продукция</h2>
            <ul className={`items__list grid gap-20 rel z-5`}>
              {status === 'loading'
                ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
                : fishes.items.map((fish) => <Fishes key={fish.id} {...fish} />)}
            </ul>
            <Pagination totalPages={totalPages} onChange={(number) => setCurrentPage(number)} />
          </div>
        </section>
        <Step isSmallMobile={isSmallMobile} isFinsihSize={isFinsihSize} />
        <Question />
      </main>
      <Footer isTablet={isTablet} />
    </>
  );
};

export default App;
