import React from 'react';
import Link from 'next/link';
import Card from '@/assets/icons/market.svg';
import styles from './AppHeaderCard.module.scss';

const AppHeaderCard = () => {
  return (
    <div className={styles.icons}>
      <Link href="#" className={styles.iconsItem}>
        <Card />
        <p className={styles.title}>Корзина</p>
      </Link>
    </div>
  );
};

export default AppHeaderCard;
