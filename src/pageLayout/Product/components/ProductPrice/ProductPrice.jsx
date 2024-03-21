import React from 'react';
import { AppButton } from '@/components/ui/AppButton';
import Market from '@/assets/icons/cardWhite.svg';
import styles from './ProductPrice.module.scss';

function ProductPrice() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>279 сом</div>
      <AppButton className={styles.button}>
        В корзину <Market />
      </AppButton>
    </div>
  );
}

export default ProductPrice;
