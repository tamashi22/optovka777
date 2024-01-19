import React from 'react';
import styles from './Gis2Button.module.scss';
import GisMap from '@/assets/icons/2gis.svg';
const Gis2Button = () => {
  return (
    <button className={styles.button}>
      Перейти в 2ГИС <GisMap />
    </button>
  );
};

export default Gis2Button;
