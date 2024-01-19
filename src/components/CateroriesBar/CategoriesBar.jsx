import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Close from '@/assets/icons/close.svg';
import ForCafe from '@/assets/icons/category1.svg';

import styles from './CategoriesBar.module.scss';
const CategoriesBar = ({ onClose }) => {
  const [current, setCurrent] = React.useState(null);
  console.log(current);
  const SelectItem = (event, id) => {
    setCurrent(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.categoriesWrapper}>
          {new Array(4).fill(0).map((item, index) => (
            <div
              className={clsx(
                styles.itemWrapper,
                current == index && styles.itemWrapperActive,
              )}
              key={index}
              onMouseEnter={e => SelectItem(e, index)}
            >
              <ForCafe />
              <span className={styles.categoryName}>Для кафе и ресторанов</span>
            </div>
          ))}
        </div>
        {current && (
          <div className={styles.subCategories}>
            <h3 className={styles.title}>Для кафе и ресторанов</h3>
            <Link href="#">
              <div className={styles.subCategoryName}>Канцелярские товары</div>
            </Link>
            <Link href="#">
              <div className={styles.subCategoryName}>Бумажная продукция</div>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.overlay} onClick={onClose}>
        <button onClick={onClose} className={styles.close}>
          <Close />
        </button>
      </div>
    </div>
  );
};

export default CategoriesBar;
