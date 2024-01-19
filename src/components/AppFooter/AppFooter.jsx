import React from 'react';
import Link from 'next/link';
import Gis2Button from '../ui/Gis2Button';
import Logo from '@/assets/images/Logo.svg';
import Instagram from '@/assets/icons/instagram.svg';
import TikTok from '@/assets/icons/tiktok.svg';
import Twitter from '@/assets/icons/twitter.svg';
import styles from './AppFooter.module.scss';
const AppFooter = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.leftContainer}>
          <Logo />
          <p className={styles.text18}>
            Решения для бизнеса и дома в одном месте
          </p>
          <span>График работы: 9:00-18:00 без выходных</span>
          <span>Адрес: Ул. Садырбаева 23</span>
          <Gis2Button />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.item}>
            <h4 className={styles.title}>Меню</h4>
            <ul className={styles.linksWrapper}>
              <li className={styles.link}>
                <Link href="#">О нас</Link>
              </li>
              <li className={styles.link}>
                <Link href="#">FAQ</Link>
              </li>
              <li className={styles.link}>
                <Link href="#">Контакты</Link>
              </li>
              <li className={styles.link}>
                <Link href="#">Политика возврата и гарантия</Link>
              </li>
              <li className={styles.link}>
                <Link href="#">Партнерская программа</Link>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h4 className={styles.title}>Соц. сети </h4>
            <ul className={styles.linksWrapper}>
              <Link
                href="https://www.instagram.com/optovka.777/"
                className={styles.link}
                target="_blank"
              >
                <div className={styles.icon}>
                  <Instagram />
                </div>
                <li>optovka.777</li>
              </Link>
              <Link href="#" className={styles.link}>
                <div className={styles.icon}>
                  <TikTok />
                </div>
                <li>optovka.777</li>
              </Link>
              <Link href="#" className={styles.link}>
                <div className={styles.icon}>
                  <Twitter />
                </div>
                <li>optovka.777</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <Link href="#" className={styles.link}>
          Политика конфиденциальности/Условия использования
        </Link>
      </div>
    </div>
  );
};

export default AppFooter;
