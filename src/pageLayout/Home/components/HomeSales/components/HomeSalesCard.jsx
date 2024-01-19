import React from 'react';
import Image from 'next/image';
import Sale from '@/assets/images/sales.jpg';
import NextIcon from '@/assets/icons/nextIcon.svg';
import styles from './HomeSalesCard.module.scss';
const HomeSalesCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.salesText}>Скидки на косметику до 75%</div>
        <button className={styles.salesButton}>
          Купить
          <NextIcon />
        </button>
      </div>
      <div className={styles.imageWrapper}>
        <Image alt="sales" src={Sale}></Image>
      </div>
    </div>
  );
};

export default HomeSalesCard;
