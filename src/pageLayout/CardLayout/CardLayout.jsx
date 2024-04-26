import { AppButton } from '@/components/ui/AppButton';
import React, { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { CardOrders } from './components/CardOrders';
import { ShopCount } from '@/components/ui/ShopCount';
import { store } from '@/store';
import styles from './CardLayout.module.scss';

const CardLayout = observer(() => {
  const { cardStore } = store; // Adjust based on your context setup
  const items = toJS(cardStore.cards);

  const onMinus = item => {
    if (item.quantity > 1) {
      cardStore.decrement(item);
    }
  };

  const onPlus = item => {
    cardStore.increment(item);
  };

  const onRemove = item => {
    cardStore.removeCardBySlug(item.slug);
  };

  const onChangeQuantity = (item, newQuantity) => {
    console.log('gdf', newQuantity);
    const parsedQuantity = parseInt(newQuantity, 10);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
      cardStore.updateQuantity(item, parsedQuantity);
    }
  };

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [items]);
  const totalWeight = useMemo(() => {
    const weight = items.reduce(
      (acc, item) => acc + item.weight * item.quantity,
      0,
    );
    return weight.toFixed(1);
  }, [items]);

  return (
    <div className={styles.wrapper}>
      {isClient && items && (
        <>
          <div className={styles.title}>
            <h2>Корзина</h2>
            <ShopCount count={items.length} />
          </div>

          <div className={styles.shopBasket}>
            {items.map(item => (
              <CardOrders
                product={item}
                onMinus={() => onMinus(item)}
                onPlus={() => onPlus(item)}
                onRemove={() => onRemove(item)}
                onChangeQuantity={newQuantity =>
                  onChangeQuantity(item, newQuantity)
                }
                key={item.slug}
              />
            ))}
          </div>

          <div className={styles.total}>
            <div className={styles.container}>
              <div className={styles.wrap}>
                <p className={styles.weight}>Примерный общий вес за заказ:</p>
                <p className={styles.weightValue}>{totalWeight} кг</p>
              </div>
              <div className={styles.wrap}>
                <p className={styles.boldText}>Итого:</p>
                <p className={styles.boldText}>{totalPrice} сом</p>
              </div>
              <AppButton>Оформить заказ</AppButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

export default CardLayout;
