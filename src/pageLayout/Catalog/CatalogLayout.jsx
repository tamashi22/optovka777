import React from 'react';
import { observer } from 'mobx-react-lite';
import { AppBreadCrumb } from '@/components/AppBreadCrumb';
import { store } from '@/store';
import { ProductCollection } from '@/components/ProductsCollection';
import { productsArr } from '@/mock/productsArr';

import MenuIcon from '@/assets/icons/menu.svg';
import FilterIcon from '@/assets/icons/filterIcon.svg';
import { AppPagination } from '@/components/ui/AppPagination';
import { AppSelect } from '@/components/ui/AppSelect';

import styles from './CatalogLayout.module.scss';
const CatalogLayout = observer(() => {
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
    <div className={styles.wrapper}>
      {!devicesStore.isMobile && <AppBreadCrumb items={crumbItems} />}
      <div className={styles.content}>
        <h2 className={styles.title}>Одноразовая посуда</h2>
        <p className={styles.count}>{productsArr.length} товаров</p>
      </div>
      <div className={styles.filters}>
        <AppSelect
          icon={<MenuIcon />}
          label="Категория"
          className={styles.categoryFilter}
        />
        <AppSelect
          icon={<FilterIcon />}
          label="По популярности"
          className={styles.orderFiler}
        />
        <AppSelect label="Цена" className={styles.priceFilter} />
      </div>
      <ProductCollection products={productsArr} />

      <AppPagination pageCount={10} />
    </div>
  );
});

export default CatalogLayout;
