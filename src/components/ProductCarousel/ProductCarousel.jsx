import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import clsx from 'clsx';
import { ProductCard } from '@/components/ProductCard';
import Arrow from '@/assets/icons/nextIcon.svg';
import { store } from '@/store';
import styles from './ProductCarousel.module.scss';
const ProductCarousel = ({ title, products }) => {
  const { devicesStore } = store;
  const [swiper, setSwiper] = React.useState();
  const [isAtStart, setIsAtStart] = React.useState(true);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  React.useEffect(() => {
    if (swiper) {
      swiper.on('reachBeginning', () => setIsAtStart(true));
      swiper.on('reachEnd', () => setIsAtEnd(true));
      swiper.on('fromEdge', () => {
        setIsAtStart(false);
        setIsAtEnd(false);
      });
    }
  }, [swiper]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <Link href="#" className={styles.link}>
          <span>Перейти</span>
          <Arrow />
        </Link>
      </div>
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        className={styles.swiper}
        onSwiper={setSwiper}
        slidesPerView="auto"
        spaceBetween={devicesStore.isMobile ? 10 : 18}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            
              <ProductCard product={item} />
          
          </SwiperSlide>
        ))}
      </Swiper>
      {!devicesStore.isMobile && (
        <>
          {!isAtEnd && (
            <button
              className={clsx(styles.arrowButton, styles.next)}
              onClick={() => swiper?.slideNext()}
            >
              <Arrow />
            </button>
          )}
          {!isAtStart && (
            <button
              className={clsx(styles.arrowButton, styles.prev)}
              onClick={() => swiper?.slidePrev()}
            >
              <Arrow />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCarousel;
