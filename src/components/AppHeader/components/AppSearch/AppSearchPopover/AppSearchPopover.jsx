import React from 'react';
import clsx from 'clsx';
import { AppSearchProduct } from '../AppSearchProduct';

import styles from './AppSearchPopover.module.scss';

const AppSearchPopover = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <AppSearchProduct  />
      </div>
    </div>
  );
};

export default AppSearchPopover;
