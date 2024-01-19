import React from 'react';
import styles from './HomeContacts.module.scss';
const HomeContacts = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Есть вопросы? Вы можете обратиться в нашу тех. поддержку
      </h3>
      <span className={styles.time}>с 9:00 до 18:00</span>
      <button className={styles.button}>Связаться с нами</button>
    </div>
  );
};

export default HomeContacts;
