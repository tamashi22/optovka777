import React from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { AppBreadCrumb } from '@/components/AppBreadCrumb';
import { ProductCarousel } from './components/DesctopProductCarousel';
import { ProductDetails } from './components/ProductDetails';
import { store } from '@/store';
import styles from './ProductLayout.module.scss';
import { ProductPriceMobile } from './components/ProductPriceMobile';
import { ProductCarouselMobile } from './components/ProductCarouselMobile';

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
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {!devicesStore.isMobile ? (
            <ProductCarousel />
          ) : (
            <ProductCarouselMobile />
          )}
          <ProductDetails />
        </div>
      </div>
      {devicesStore.isMobile && <ProductPriceMobile />}
    </div>
  );
});

export default ProductLayout;
