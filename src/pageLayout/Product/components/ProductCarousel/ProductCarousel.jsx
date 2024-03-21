import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import clsx from 'clsx';
import Image from 'next/legacy/image';
import { AppImage } from '@/components/AppImage';
import Arrow from '@/assets/icons/arrow32.svg';
import { productArr } from '@/mock/picturesArr';
import styles from './ProductCarousel.module.scss';
const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(productArr[0]);
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
      <div className={styles.mainImage}>
        <div className={styles.favourite}></div>
        <div className={styles.imageContainer}>
          <AppImage src={currentSlide.picture} alt="image" />
        </div>
      </div>
      <div className={styles.carousel}>
        <button
          className={clsx(
            isAtStart ? styles.disableButton : styles.arrowButton,
          )}
          onClick={() => swiper?.slidePrev()}
        >
          <Arrow />
        </button>
        <div className={styles.pictures}>
          <Swiper
            modules={[Controller, Autoplay, Pagination]}
            className={styles.swiper}
            onSwiper={setSwiper}
            slidesPerView="auto"
            spaceBetween={5}
            cssMode
            mousewheel
          >
            {productArr.map(item => (
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <div
                  className={clsx(
                    styles.item,
                    currentSlide.id == item.id && styles.activeItem,
                  )}
                  onClick={() => setCurrentSlide(item)}
                >
                  <div className={styles.image}>
                    <Image
                      src={item.picture}
                      alt={item.id}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          className={clsx(
            isAtEnd ? styles.disableButton : styles.arrowButton,
            styles.next,
          )}
          onClick={() => swiper?.slideNext()}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
