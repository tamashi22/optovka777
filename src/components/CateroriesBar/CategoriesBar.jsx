import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Close from '@/assets/icons/close.svg';
import { ROUTER_NAMES } from '@/router/RouterNames';
import styles from './CategoriesBar.module.scss';

const CategoriesBar = ({ onClose, items }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(null);

  const SelectItem = (event, item) => {
    setCurrent(item);
  };
  useEffect(() => {
    const closeBar = () => {
      onClose();
      setCurrent(null);
    };
    router.events.on('routeChangeStart', closeBar);
    return () => {
      router.events.off('routeChangeStart', closeBar);
    };
  }, [router.events, onClose]);
  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.categoriesWrapper}>
          {items?.map((item, index) => (
            <div
              className={clsx(
                styles.itemWrapper,
                current?.id == item.id && styles.itemWrapperActive,
              )}
              key={index}
              onMouseEnter={e => SelectItem(e, item)}
            >
              <span
                className={styles.categoryIcon}
                dangerouslySetInnerHTML={{ __html: item.icon_svg }}
              />
              <span className={styles.categoryName}>{item.name}</span>
            </div>
          ))}
        </div>
        {current?.subcategories && current.subcategories.length > 0 && (
          <div className={styles.subCategories}>
            <h3 className={styles.title}>{current.name}</h3>
            {current.subcategories.map(sub => (
              <Link href={ROUTER_NAMES.CATALOG + '/' + sub.slug} key={sub.slug}>
                <div className={styles.subCategoryName}>{sub.name}</div>
              </Link>
            ))}
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
