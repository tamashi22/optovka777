import React from 'react';
import clsx from 'clsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './HomeBanner.module.scss';
import Banner from '@/assets/images/banner.jpg';
import Arrow from '@/assets/icons/arrow32.svg';
import Link from 'next/link';
const HomeBanner = ({ banners }) => {
  const [swiper, setSwiper] = React.useState();
  const [currentNumber, setCurrentNumber] = React.useState(1);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.banners}>
          <Swiper
            modules={[Controller, Autoplay, Pagination]}
            className={styles.swiper}
            onSwiper={setSwiper}
            onSlideChange={e => {
              setCurrentNumber(e.realIndex + 1);
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            speed={300}
            loop
          >
            {banners.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.banner}>
                  <Link href="#">
                    <Image
                      quality={100}
                      layout="responsive"
                      width={1200}
                      height={500}
                      priority={true}
                      src={item.image_path}
                      alt="banner"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={clsx(styles.arrowButton, styles.prev)}
            onClick={() => swiper?.slidePrev()}
          >
            <Arrow />
          </button>
          <button
            className={clsx(styles.arrowButton, styles.next)}
            onClick={() => swiper?.slideNext()}
          >
            <Arrow />
          </button>
        </div>
      </div>
      <div className={styles.swiperPagination}>
        <div className={styles.paginationContainer}>
          {Array.from({ length: swiper?.slides?.length ?? 1 }, (_, index) => (
            <div
              key={index}
              className={clsx(
                styles.swiperPaginationBullet,
                currentNumber === index + 1 &&
                  styles.swiperPaginaxtionBulletActive,
              )}
              onClick={() => {
                swiper.slideTo(index);
                setCurrentNumber(index + 1);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
