import React from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { jwtDecode } from 'jwt-decode';
import { HomeBanner } from './components/HomeBanner';
import { ProductCarousel } from '../../components/ProductCarousel';
import { HomeSales } from './components/HomeSales';
import { HomeMarque } from './components/HomeMarque';
import { HomePartners } from './components/HomePartners';
import { HomeContacts } from './components/HomeContacts';

import { store } from '@/store';

import styles from './HomeLayout.module.scss';

const HomeLayout = observer(({ home }) => {
  // const cookies = parseCookies();
  // let t;
  // try {
  //   t = JSON.parse(cookies.token);
  // } catch (e) {
  //   console.error('Error parsing token:', e);
  // }
  // if (t) {
  //   console.log(jwtDecode(t.access_token));
  // }

  const { authStore } = store;

  console.log(toJS(authStore.isLoggedin));
  return (
    <>
      <div className="container">
        <HomeBanner banners={home.banners} />
        <HomeSales />
        <ProductCarousel
          title="Лидеры Продаж"
          products={home.leader_products}
        />
        <ProductCarousel title="Новинки" products={home.new_products} />
        <ProductCarousel title="Акции" products={home.promotion_products} />
      </div>
      <HomeMarque />
      <div className="container">
        <HomePartners partners={home.partners} />
        <HomeContacts />
      </div>
    </>
  );
});

export default HomeLayout;
