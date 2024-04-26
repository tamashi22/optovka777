import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react-lite'; // Import observer

import styles from './ShopCount.module.scss';
import { store } from '@/store';
import { toJS } from 'mobx';

const ShopCount = observer(({ className }) => {
  const { cardStore } = store;
  const items = toJS(cardStore.cards);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {items.length != 0 && isClient && (
        <div className={clsx(styles.count, className)}>{items.length}</div>
      )}
    </>
  );
});

export default ShopCount;
