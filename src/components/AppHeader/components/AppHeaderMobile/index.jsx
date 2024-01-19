import React from 'react';
import Logo from '@/assets/images/Logo.svg';
import Link from 'next/link';
import Contact from '@/assets/icons/contacts.svg';
import styles from '../../AppHeader.module.scss';
const AppHeaderMobile = () => {
  return (
    <div className="container">
      <div className={styles.wpapper}>
        <Link href="/" className={styles.link}>
          <Logo />
        </Link>
        <Link href="#" className={styles.iconsItemMobile}>
          <Contact />
          <p className={styles.title}>Контакты</p>
        </Link>
      </div>
    </div>
  );
};

export default AppHeaderMobile;
