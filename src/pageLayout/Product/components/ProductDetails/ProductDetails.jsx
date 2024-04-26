import React from 'react';
import { ProductPrice } from '../ProductPrice';
import { store } from '@/store';
import styles from './ProductDetails.module.scss';
export const ProductDetails = () => {
  const { devicesStore } = store;
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <h2 className={styles.productName}>Одноразовая посуда контейнер</h2>
        <div className={styles.characterics}>
          <div className={styles.item}>
            <span className={styles.charName}>Вес за единицу(брутто):</span>
            <span className={styles.charValue}>0,900 кг</span>
          </div>

          <div className={styles.item}>
            <span className={styles.charName}>Код товара:</span>
            <span className={styles.charValue}>Ц-0000001741</span>
          </div>
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>Описание</h2>
          <p className={styles.text}>
            Контейнер - универсальная посуда, удобная не только для сферы услуг,
            но и для частного использования дома. Пластиковые прямоугольные
            контейнеры с крышкой отлично подходят для хранения круп, специй,
            готовых блюд или отдельных ингредиентов.
          </p>
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>Материалы</h2>
          <p className={styles.text}>Пластик, полиэтилен.</p>
        </div>
      </div>
      {!devicesStore.isMobile &&   <ProductPrice />}
    </div>
  );
};
