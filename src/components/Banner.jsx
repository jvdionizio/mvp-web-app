/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Heading from './styles/Heading';
import Text from './styles/Text';
import Button from './styles/Button';
import tecladoB1 from '../images/tecladoB1.png';

function Banner() {
  return (
    <div>
      <Swiper
        spaceBetween={ 50 }
        slidesPerView={ 1 }
        onSlideChange={ () => console.log('slide change') }
        onSwiper={ (swiper) => console.log(swiper) }
      >
        <SwiperSlide>
          <div className="w-full h-[46rem] banner1 flex items-center justify-center">
            <div className="flex flex-col w-1/3 gap-6">
              <div>
                <Heading>
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
                >
                  DESCUBRA
                </button>
              </Button>
            </div>
            <img alt="teclado aurora" src={ tecladoB1 } className="w-1/2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
