import React from 'react';
import Search from '@/assets/icons/search.svg';

import styles from './AppSearchProduct.module.scss';

const AppSearchProduct = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Search />
        </div>
        <div className={styles.text}>text</div>
      </div>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Search />
        </div>
        <div className={styles.text}>text</div>
      </div>
    </div>
  );
};

export default AppSearchProduct;
