import React, { useEffect, useState } from 'react';
import { AppImage } from '@/components/AppImage';
import { productArr } from '@/mock/picturesArr';
import PlusIcon from '@/assets/icons/plus.svg';
import MinusIcon from '@/assets/icons/minus.svg';
import DeleteIcon from '@/assets/icons/deleteIcon.svg';
import styles from './CardOrders.module.scss';

const CardOrders = ({
  product,
  onMinus,
  onPlus,
  onRemove,
  onChangeQuantity,
}) => {
  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    setQuantity(product.quantity);
  }, [product.quantity]);

  const handleQuantityChange = e => {
    const newQuantity = e.target.value;
    console.log(newQuantity);
    setQuantity(newQuantity);
    onChangeQuantity(newQuantity);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <div className={styles.image}>
            <AppImage src={product.image_path} alt={product.name} />
          </div>
        </div>
        <div className={styles.productInfo}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.price}>{product.price} сом </p>
        </div>
      </div>

      <div className={styles.productDetails}>
        <div className={styles.characteristics}>
          <p className={styles.characteristic}>Доступно к заказу:</p>
          <p className={styles.value}>{product.amount}</p>
        </div>
        <div className={styles.characteristics}>
          <p className={styles.characteristic}>Вес:</p>
          <p className={styles.value}>{product.weight} кг</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.count}>
          <button
            className={styles.actionButton}
            onClick={() => onMinus(product)}
          >
            {/*on minus*/}
            <MinusIcon />
          </button>
          <input
            value={quantity} // Use local state for the input value
            onChange={handleQuantityChange}
            className={styles.countInput}
          />
          {/*on change quantity*/}
          <button
            className={styles.actionButton}
            onClick={() => onPlus(product)}
          >
            {/*on plus*/}
            <PlusIcon />
          </button>
        </div>
        <button
          className={styles.actionButton}
          onClick={() => onRemove(product)}
        >
          {/*on Delete*/}
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CardOrders;
