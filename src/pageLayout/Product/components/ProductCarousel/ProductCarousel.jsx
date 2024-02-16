import { AppImage } from '@/components/AppImage';
import React from 'react';
import styles from './ProductCarousel.module.scss';
const ProductCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.mainImage}>
        <AppImage />    
      </div>
    </div>
  );
};

export default ProductCarousel;
