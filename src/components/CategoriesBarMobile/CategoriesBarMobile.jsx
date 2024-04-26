import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppSearch } from '../AppHeader/components/AppSearch';
import Chevron from '@/assets/icons/chevron.svg';
import Seach from '@/assets/icons/search.svg';
import GoBack from '@/assets/icons/goBack.svg';
import { ROUTER_NAMES } from '@/router/RouterNames';
import styles from './CategoriesBarMobile.module.scss';
const CategoriesBarMobile = ({ items, onClose }) => {
  const [current, setCurrent] = React.useState(null);
  const [tab, setTab] = useState('categories');

  const SelectItem = item => {
    if (item.subcategories && item.subcategories.length > 0) {
      setCurrent(item);
      setTab('subcategories');
    }
  };
  const SwithTab = () => {
    setTab('categories');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.searchWrapper}>
          <AppSearch placeholder="Пoиск" iconLeft={<Seach />} />
        </div>
        {tab == 'categories' ? (
          <>
            {items?.map(item => (
              <div
                className={styles.itemWrapper}
                key={item.id}
                onClick={() => SelectItem(item)}
              >
                <div className={styles.title}>
                  <span
                    className={styles.categoryIcon}
                    dangerouslySetInnerHTML={{ __html: item.icon_svg }}
                  />
                  {item.name}
                </div>
                <Chevron />
              </div>
            ))}
          </>
        ) : (
          <>
            <div className={styles.categoryName}>
              <button className={styles.goBackButton} onClick={SwithTab}>
                <GoBack />
              </button>

              {current.name}
            </div>
            {current.subcategories.map(sub => (
              <Link href={ROUTER_NAMES.CATALOG + '/' + sub.slug} key={sub.slug}>
                <div className={styles.itemWrapper}>{sub.name}</div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoriesBarMobile;
