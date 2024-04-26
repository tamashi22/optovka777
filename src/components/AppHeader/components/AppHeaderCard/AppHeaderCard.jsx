import React from 'react';
import Link from 'next/link';
import { toJS } from 'mobx';
import { ROUTER_NAMES } from '@/router/RouterNames';
import Card from '@/assets/icons/market.svg';
import { store } from '@/store';

import styles from './AppHeaderCard.module.scss';
import { ShopCount } from '@/components/ui/ShopCount';

const AppHeaderCard = () => {
  const { cardStore } = store;
  const items = toJS(cardStore.cards);
  return (
    <div className={styles.icons}>
      <Link href={ROUTER_NAMES.BASKET} className={styles.iconsItem}>
        <Card />
        <p className={styles.title}>Корзина</p>
      </Link>
      {items && <ShopCount count={items.length} className={styles.count} />}
    </div>
  );
};

export default AppHeaderCard;
