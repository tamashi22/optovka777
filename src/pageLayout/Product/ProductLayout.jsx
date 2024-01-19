import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { AppBreadCrumb } from '@/components/AppBreadCrumb';

import { store } from '@/store';
import styles from './ProductLayout.module.scss';

const ProductLayout = observer(() => {
  const { devicesStore } = store;
  const crumbItems = [
    {
      label: 'Главная',
      path: '/',
    },
    {
      label: 'Для кафе и ресторанов',
      path: '/',
    },
    {
      label: 'Одноразовая посуда',
      path: '/',
    },
  ];
  return (
    <div className="container">
      {!devicesStore.isMobile && <AppBreadCrumb items={crumbItems} />}
      <div className={styles.wrapper}>gr</div>
    </div>
  );
});

export default ProductLayout;
