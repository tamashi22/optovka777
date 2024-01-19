import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import clsx from 'clsx';
import Image from 'next/legacy/image';
import Arrow from '@/assets/icons/nextIcon.svg';
import Partner1 from '@/assets/images/partner1.png';
import styles from './HomePartners.module.scss';

const HomePartners = () => {
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
    <>
    <h3 className={styles.title}>Наши надежные партнеры</h3>
    <div className={styles.wrapper}>
    
      <Swiper
        modules={[Controller, Autoplay, Pagination]}
        className={styles.swiper}
        onSwiper={setSwiper}
        slidesPerView="auto"
        spaceBetween={15}
      >
        {new Array(6).fill(0).map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.item}>
              <div className={styles.image}>
                <Image src={Partner1} alt="parner" objectFit="contain" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
    </div>
    </>
  );
};

export default HomePartners;
