/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './styles/Slider.css';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import Heading from './styles/Heading';
import Text from './styles/Text';
import Button from './styles/Button';
import tecladoB1 from '../images/tecladoB1.png';
import mouseB2 from '../images/mouseB2.png';
import gabineteB3 from '../images/gabineteB3.png';

function Banner() {
  return (
    <div>
      <Swiper
        modules={ [Navigation, Pagination, A11y, Autoplay] }
        spaceBetween={ 50 }
        slidesPerView={ 1 }
        navigation
        pagination={ { clickable: true } }
        autoplay={ { delay: 5000 } }
        loop
        draggable
      >
        <SwiperSlide>
          <div
            className="
            w-full
            h-[46rem]
            banner1
            flex
            flex-col
            lg:flex-row
            items-center
            justify-center
          "
          >
            <div className="flex flex-col w-1/2 lg:w-1/3 gap-6">
              <div>
                <Heading asChild>
                  <h1>PLAY YOUR WAY</h1>
                </Heading>
                <span>
                  <Text font="ubuntu">
                    <p>Explore novos mundos e divirta -se com a </p>
                  </Text>
                  <Text font="ubuntu" decoration="bold">
                    <p>Aurora Collection,</p>
                  </Text>
                  <Text font="ubuntu">
                    <p> o novo lançamento da Logitech. </p>
                  </Text>
                </span>
              </div>
              <Button>
                <button
                  type="button"
                  className='w-1/2'
                >
                  DESCUBRA
                </button>
              </Button>
            </div>
            <img alt="teclado aurora" src={ tecladoB1 } className="w-1/2 lg:w-1/3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
              w-full
              h-[46rem]
              banner2
              flex
              flex-col
              lg:flex-row
              items-center
              justify-center
            "
          >
            <div className="flex flex-col w-1/2 lg:w-1/3 gap-6">
              <div>
                <Heading asChild>
                  <h1>PLAY YOUR WAY</h1>
                </Heading>
                <span>
                  <Text font="ubuntu">
                    <p>Sinta a energia com a </p>
                  </Text>
                  <Text font="ubuntu" decoration="bold">
                    <p>Fusion Collection,</p>
                  </Text>
                  <Text font="ubuntu">
                    <p> uma colaboração entre Logitech e Redragon. </p>
                  </Text>
                </span>
              </div>
              <Button asChild bgColor="orange">
                <button
                  type="button"
                  className='w-1/2'
                >
                  EXPLORE
                </button>
              </Button>
            </div>
            <img alt="mouse Logitech" src={ mouseB2 } className="w-1/2 lg:w-1/4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="
              w-full
              h-[46rem]
              banner3
              flex
              flex-col
              lg:flex-row
              items-center
              justify-center
            "
          >
            <div className="flex flex-col w-1/2 lg:w-1/3 gap-6">
              <div>
                <Heading asChild>
                  <h1>PLAY YOUR WAY</h1>
                </Heading>
                <span>
                  <Text font="ubuntu">
                    <p>Embarque nessa aventura com a </p>
                  </Text>
                  <Text font="ubuntu" decoration="bold">
                    <p>Aqua Collection,</p>
                  </Text>
                  <Text font="ubuntu">
                    <p> o novo lançamento da Corsair. </p>
                  </Text>
                </span>
              </div>
              <Button asChild bgColor="blue">
                <button
                  type="button"
                  className='w-1/2'
                >
                  CONHEÇA
                </button>
              </Button>
            </div>
            <img
              alt="Gabinete Corsair 4000D"
              src={ gabineteB3 }
              className="w-1/2 lg:w-1/3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
