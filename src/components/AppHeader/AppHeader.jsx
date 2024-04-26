import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { AppHeaderCard } from './components/AppHeaderCard';
import AppSearch from './components/AppSearch/AppSearch';
import AppHeaderMobile from './components/AppHeaderMobile';
import Logo from '@/assets/images/Logo.svg';
import Burger from '@/assets/icons/burger.svg';
import Seach from '@/assets/icons/search.svg';
import Contact from '@/assets/icons/contacts.svg';
import User from '@/assets/icons/account.svg';

import { ROUTER_NAMES } from '@/router/RouterNames';
import { store } from '@/store';
import { CategoriesBar } from '../CateroriesBar';

import { CategoriesApi } from '@/services/api/CategoriesApi';
import styles from './AppHeader.module.scss';

export const AppHeader = observer(() => {
  const { authStore, devicesStore } = store;
  const [isLogin, setIsLogin] = useState();
  const user = toJS(authStore.user);
  const [categoties, setCategories] = useState();
  const [open, setOpen] = React.useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    CategoriesApi.getAllCategories().then(res => setCategories(res.data.data));
    authStore.checkToken();
    toJS(authStore.isLoggedin) && setIsLogin(true);
  }, []);

  console.log(isLogin);
  return (
    <>
      {!devicesStore.isMobile ? (
        <>
          {open && <CategoriesBar onClose={onClose} items={categoties} />}
          <div className="container">
            <div className={styles.wpapper}>
              <div className={styles.logo}>
                <button className={styles.button} onClick={onOpen}>
                  <Burger />
                </button>
                <Link href="/" className={styles.link}>
                  <Logo />
                </Link>
              </div>
              <div className={styles.search}>
                <AppSearch iconLeft={<Seach />} placeholder="Поиск" />
              </div>
              <div className={styles.icons}>
                <Link href="#" className={styles.iconsItem}>
                  <Contact />
                  <p className={styles.title}>Контакты</p>
                </Link>
                <Link
                  href={
                    isLogin
                      ? ROUTER_NAMES.PROFILE + '/' + user.id
                      : ROUTER_NAMES.AUTH
                  }
                  className={styles.iconsItem}
                >
                  <User />
                  <p className={styles.title}>
                    {isLogin ? 'Профиль' : 'Войти'}
                  </p>
                </Link>
                <AppHeaderCard />
              </div>
            </div>
          </div>
        </>
      ) : (
        <AppHeaderMobile />
      )}
    </>
  );
});
