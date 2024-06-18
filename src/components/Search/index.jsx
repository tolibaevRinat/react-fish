import React from 'react';

import styles from './search.module.scss';

const Search = ({ show, setShow }) => {
  return (
    <div className={`${styles.search} ${show ? styles.show : ''}`}>
      <div className="flex al-c gap-5 rel">
        <svg
          className={styles.svg}
          onClick={() => setShow(true)}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M14.33 27.66C6.96 27.66 1 21.69 1 14.33C1 6.96 6.96 1 14.33 1C21.69 1 27.66 6.96 27.66 14.33C27.66 21.69 21.69 27.66 14.33 27.66ZM31 31L23.75 23.75"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        <input className={`${styles.input}`} type="text" placeholder="Найди рыбку по себе" />
        <div className={styles.search__line}></div>
      </div>
    </div>
  );
};
export default Search;
