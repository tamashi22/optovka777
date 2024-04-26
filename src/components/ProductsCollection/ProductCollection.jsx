import React from 'react';
import { ProductCard } from '../ProductCard';
import styles from './ProductCollection.module.scss';
const ProductCollection = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.productsContainer}>
        {products.map(item => (
          <ProductCard product={item} key={item.slug} />
        ))}
      </div>
    </div>
  );
};
export default ProductCollection;
