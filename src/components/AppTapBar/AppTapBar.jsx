import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { CategoriesBarMobile } from '../CategoriesBarMobile';
import { CategoriesApi } from '@/services/api/CategoriesApi';
import HomeIcon from '@/assets/icons/home.svg';
import SeachIcon from '@/assets/icons/categories.svg';
import CardIcon from '@/assets/icons/card_icon.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import ProfileIcon from '@/assets/icons/profile.svg';

import { ShopCount } from '../ui/ShopCount';
import { ROUTER_NAMES } from '@/router/RouterNames';
import { store } from '@/store';
import styles from './AppTapBar.module.scss';
const AppTapBar = observer(() => {
  const { authStore } = store;
  const isLogin = toJS(authStore.isLoggedin);
  const user = toJS(authStore.user);
  const router = useRouter();
  const [categories, setCategories] = useState();
  const [open, setOpen] = React.useState(false);
  const isActive = routeName => router.pathname === routeName && !open;
  const onOpen = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    CategoriesApi.getAllCategories().then(res => setCategories(res.data.data));
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    handleRouteChange();
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {open && <CategoriesBarMobile onClose={onClose} items={categories} />}
      <div className={styles.container}>
        <Link
          href="/"
          className={clsx(styles.linkTap, isActive('/') && styles.activeLink)}
        >
          <HomeIcon />
        </Link>
        <button
          onClick={onOpen}
          className={clsx(
            styles.linkTap,
            styles.tapButton,
            open && styles.activeLink,
          )}
        >
          <SeachIcon />
        </button>
        <Link
          href={ROUTER_NAMES.BASKET}
          className={clsx(
            styles.linkTap,
            isActive(ROUTER_NAMES.BASKET) && styles.activeLink,
          )}
        >
          <CardIcon />
          <ShopCount className={styles.count} />
        </Link>
        <Link href="/" className={styles.linkTap}>
          <HeartIcon />
        </Link>
        <Link
          href={
            isLogin ? ROUTER_NAMES.PROFILE + '/' + user.id : ROUTER_NAMES.AUTH
          }
          className={styles.linkTap}
        >
          <ProfileIcon />
        </Link>
      </div>
    </>
  );
});

export default AppTapBar;
