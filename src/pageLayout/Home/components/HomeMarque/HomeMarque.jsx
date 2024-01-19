import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from './HomeMarque.module.scss';
import Truck from '@/assets/icons/truck.svg';
import Card from '@/assets/icons/credit-card.svg';
const HomeMarque = () => {
  return (
    <div className={styles.container}>
      <Marquee>
        <div className={styles.item}>
          <Truck />
          <span> Бесплатная доставка</span>
        </div>
        <div className={styles.item}>
          <Card/>
          <span> Бесплатная оплата</span>
        </div>
      </Marquee>
    </div>
  );
};

export default HomeMarque;
