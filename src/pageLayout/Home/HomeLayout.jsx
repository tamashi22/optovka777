import React from 'react';
import { HomeBanner } from './components/HomeBanner';
import { HomeCards } from './components/HomeCards';
import { HomeSales } from './components/HomeSales';
import { HomeMarque } from './components/HomeMarque';
import { HomePartners } from './components/HomePartners';
import { HomeContacts } from './components/HomeContacts';
import styles from './HomeLayout.module.scss';

const HomeLayout = () => {
  return (
    <>
      <div className="container">
        <HomeBanner />
        <HomeSales />
        <HomeCards title="Лидеры Продаж" />
        <HomeCards title="Новинки" />
        <HomeCards title="Акции" />
      </div>
      <HomeMarque />
      <div className="container">
        <HomePartners />
        <HomeContacts />
      </div>
    </>
  );
};

export default HomeLayout;
