import Link from 'next/link';
import React from 'react';
import HomeIcon from '@/assets/icons/home.svg';
import SeachIcon from '@/assets/icons/categories.svg';
import CardIcon from '@/assets/icons/card_icon.svg';
import HeartIcon from '@/assets/icons/heart.svg';
import ProfileIcon from '@/assets/icons/profile.svg';
import styles from './AppTapBar.module.scss';
const AppTapBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.linkTap}>
        <HomeIcon />
      </Link>
      <Link href="/" className={styles.linkTap}>
        <SeachIcon />
      </Link>
      <Link href="/" className={styles.linkTap}>
        <CardIcon />
        <div className={styles.count}>1</div>
      </Link>
      <Link href="/" className={styles.linkTap}>
        <HeartIcon />
      </Link>
      <Link href="/" className={styles.linkTap}>
        <ProfileIcon />
      </Link>
    </div>
  );
};

export default AppTapBar;
