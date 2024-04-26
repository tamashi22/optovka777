'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { store } from '@/store';
import { AppImage } from '../AppImage';
import Product from '@/assets/images/product.jpg';
import Favourite from '@/assets/icons/favorite.svg';
import FavouriteActive from '@/assets/icons/favouriteActive.svg';
import styles from './ProductCard.module.scss';
import Check from '@/assets/icons/check.svg';
import Market from '@/assets/icons/cardWhite.svg';
import ActiveCard from '@/assets/icons/ActiveCard.svg';

const ProductCard = ({ product }) => {
  const { cardStore, favouriteStore } = store;
  const { addFavourite, removeBySlug } = favouriteStore;
  const { addCard, removeCardBySlug } = cardStore;
  const [active, setActive] = React.useState(false);
  const [favorite, setFavourite] = React.useState(false);
  const onFavorite = () => {
    if (favorite) {
      removeBySlug(product.slug);
    } else {
      addFavourite(product);
    }
    setFavourite(!favorite);
  };

  function onAddCard() {
    if (active) {
      removeCardBySlug(product.slug); // Remove the product if it's already added
    } else {
      addCard(product);
    }
    setActive(!active); // Toggle the active state
  }

  useEffect(() => {
    const productExists = cardStore.cards.some(
      card => card.slug === product.slug,
    );
    setActive(productExists);
  }, [product.slug, cardStore.cards]);

  useEffect(() => {
    const productExists = favouriteStore.items.some(
      card => card.slug === product.slug,
    );
    setFavourite(productExists);
  }, [product.slug, favouriteStore.items]);

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
        <AppImage src={product.image_path} alt="product" />
      </div>
      <div className={styles.content}>
        <Link href={`/product/${product.slug}`}>
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>{product.name}</h2>
            <div className={styles.tag}>{product.subcategory_name}</div>
            <div className={styles.status}>
              {product.amount > 0 ? (
                <>
                  <Check />
                  <p className={styles.statusYes}>В наличии</p>
                </>
              ) : (
                <p className={styles.statusNo}>Нет наличии</p>
              )}
            </div>
          </div>
        </Link>
        <div className={styles.buttonWrapper}>
          <h3 className={styles.price}>{`${product.price}` + ' '} сом</h3>
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
