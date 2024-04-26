import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import clsx from 'clsx';
import { AppImage } from '@/components/AppImage';

import Arrow from '@/assets/icons/arrow32.svg';
import { productArr } from '@/mock/picturesArr';
import styles from './ProductCarouselMobile.module.scss';
const ProductCarouselMobile = () => {
  const [swiper, setSwiper] = React.useState();
  const [currentNumber, setCurrentNumber] = React.useState(1);
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        className={styles.swiper}
        onSwiper={setSwiper}
        onSlideChange={e => {
          setCurrentNumber(e.realIndex + 1);
        }}
      >
        {productArr &&
          productArr.map(item => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <div className={styles.image}>
                <AppImage
                  src={item.picture}
                  alt={item.id}
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={styles.counter}>
        {currentNumber}/{productArr.length}
      </div>
    </div>
  );
};

export default ProductCarouselMobile;
