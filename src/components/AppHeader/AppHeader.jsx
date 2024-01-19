import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { AppHeaderCard } from './components/AppHeaderCard';
import AppSearch from './components/AppSearch/AppSearch';
import AppHeaderMobile from './components/AppHeaderMobile';
import Logo from '@/assets/images/Logo.svg';
import Burger from '@/assets/icons/burger.svg';
import Seach from '@/assets/icons/search.svg';
import Contact from '@/assets/icons/contacts.svg';
import User from '@/assets/icons/account.svg';
import { observer } from 'mobx-react-lite';
import { store } from '@/store';
import styles from './AppHeader.module.scss';
import { CategoriesBar } from '../CateroriesBar';

export const AppHeader = observer(() => {
  const [open, setOpen] = React.useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { devicesStore } = store;
  return (
    <>
      {!devicesStore.isMobile ? (
        <>
          {open && <CategoriesBar onClose={onClose} />}
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
                <Link href="#" className={styles.iconsItem}>
                  <User />
                  <p className={styles.title}>Войти</p>
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
