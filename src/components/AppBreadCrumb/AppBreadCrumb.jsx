import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import NextIcon from '@/assets/icons/nextIcon.svg';
import styles from './AppBreadCrumb.module.scss';

export const AppBreadCrumb = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <div className={styles.item} key={i}>
              <Link href={crumb.path} className={styles.link}>
                {crumb.label}
              </Link>
              <span className={styles.seporator}>
                <NextIcon />
              </span>
            </div>
          );
        } else {
          return (
            <span key={i} className={styles.lastBreadCrumb}>
              {crumb.label}
            </span>
          );
        }
      })}
    </div>
  );
};
