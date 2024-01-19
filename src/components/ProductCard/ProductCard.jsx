import React from 'react';
import { AppImage } from '../AppImage';
import Product from '@/assets/images/product.jpg';
import Favourite from '@/assets/icons/favorite.svg';
import FavouriteActive from '@/assets/icons/favouriteActive.svg';
import styles from './ProductCard.module.scss';
import Check from '@/assets/icons/check.svg';
import Market from '@/assets/icons/cardWhite.svg';
import ActiveCard from '@/assets/icons/ActiveCard.svg';
import clsx from 'clsx';
const ProductCard = () => {
  const [active, setActive] = React.useState(false);
  const [favorite, setFavourite] = React.useState(false);
  const onFavorite = () => {
    setFavourite(true);
  };
  const onAddCard = () => {
    setActive(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <button
          onClick={onFavorite}
          className={clsx(
            styles.favouriteButton,
            favorite && styles.activeFavourite,
          )}
        >
          {favorite ? <FavouriteActive /> : <Favourite />}
        </button>
        <AppImage src={Product} alt="product" />
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Шампунь “Man”</h2>
          <div className={styles.tag}>Для мужчин</div>
          <div className={styles.status}>
            <Check />
            <p className={styles.statusYes}>В наличии</p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <h3 className={styles.price}>279 сом</h3>
          <button
            className={clsx(
              active ? styles.cardButtonActve : styles.cardButton,
            )}
            onClick={onAddCard}
          >
            {active ? <ActiveCard /> : <Market />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
