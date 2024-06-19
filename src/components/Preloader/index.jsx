import React from 'react';

import styles from './preloader.module.scss';
const Preloader = () => {
  return (
    <div className={`${styles.root} flex f-cen`}>
      <img src="img/1488.gif" alt="Загрузка" />
    </div>
  );
};
export default Preloader;
