import React from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

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

const URL = `https://82375eda35683977.mokky.dev/items`;

const App = () => {
  const [fishes, setFishes] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const isPc = useMediaQuery({
    query: '(min-width: 1600.98px)',
  });
  const isSmallLaptop = useMediaQuery({
    query: '(min-width: 1250.98px)',
  });
  const isLaptop = useMediaQuery({
    query: '(min-width: 1440.98px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 991.98px)',
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 767.98px)',
  });
  const isSmallMobile = useMediaQuery({
    query: '(min-width: 479.98px)',
  });
  const isFinsihSize = useMediaQuery({
    query: '(min-width: 359.98px)',
  });

  // Рендор количество пицц на "1 страницу"
  const pageLimit = !isSmallLaptop ? (!isTablet ? (!isMobile ? 1 : 2) : 3) : 4;
  React.useEffect(() => {
    const fetchFishes = () => {
      setIsLoading(true);
      axios
        .get(`${URL}?page=${currentPage}&limit=${pageLimit}`)
        .then((res) => {
          setFishes(res.data);
          setIsLoading(false);
        })
        .catch((error) => alert('Произошло ошибка'));
    };
    fetchFishes();
  }, [currentPage, pageLimit]);

  const totalPages = fishes.meta ? fishes.meta.total_pages : 4;

  return (
    <>
      <Header isLaptop={isLaptop} isMobile={isMobile} />
      <main className="page">
        <Hero isSmallMobile={isSmallMobile} />
        <Advantages />
        <From isPc={isPc} />
        <section className={`items rel`}>
          <img className={`items__bg`} src="img/items-bg.svg" alt=" " />
          <div className={`container`}>
            <h2 className={`items__title title rel z-5`}>Наша продукция</h2>
            <ul className={`items__list grid gap-20 rel z-5`}>
              {isLoading
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
