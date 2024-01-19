import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import { HomeSalesCard } from './components';
import styles from './HomeSales.module.scss';

const HomeSales = () => {
  const [swiper, setSwiper] = React.useState();
  const [currentNumber, setCurrentNumber] = React.useState(1);
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        className={styles.swiper}
        onSwiper={setSwiper}
        slidesPerView="auto"
        spaceBetween={10}
      >
        {new Array(6).fill(0).map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <HomeSalesCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSales;
