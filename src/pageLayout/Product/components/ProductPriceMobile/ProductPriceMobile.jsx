import { AppButton } from '@/components/ui/AppButton';
import React from 'react';
import Market from '@/assets/icons/cardWhite.svg';
import styles from './ProductPriceMobile.module.scss';
const ProductPriceMobile = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.price}>279 сом</p>
      <AppButton className={styles.buyButton}> В корзину <Market /></AppButton>
    </div>
  );
};

export default ProductPriceMobile;
