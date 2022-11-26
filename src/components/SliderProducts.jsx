/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/Slider.css';
import { Navigation, A11y } from 'swiper';
import Text from './styles/Text';
import Button from './styles/Button';
import headsetImg from '../images/cate.headset2.png';
import mouseImg from '../images/cate.mouse2.png';
import gabineteImg from '../images/cate.gabinete2.webp';
import tecladoImg from '../images/cate.teclado2.webp';

function SliderProducts() {
  return (
    <div>
      <Swiper
        modules={ [Navigation, A11y] }
        spaceBetween={ 0 }
        slidesPerView={ 1.75 }
        navigation
        loop
        draggable
      >
        <SwiperSlide>
          <div className="p-5 flex items-center gap-8">
            <img src={ headsetImg } alt="headset" className="w-5/12 p-7 border rounded-2xl" />
            <div className="flex flex-col justify-around w-4/12 gap-5">
              <Text asChild size="xl">
                <p>Headset Gamer Sem Fio Logitech G735 LIGHTSPEED</p>
              </Text>
              <Text asChild size="xl" textColor="300">
                <p>R$1399,99</p>
              </Text>
              <Button>
                <button type="button">
                  Comprar
                </button>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 flex items-center gap-8">
            <img src={ mouseImg } alt="mouse" className="w-5/12 p-7 border rounded-2xl" />
            <div className="flex flex-col justify-around w-4/12 gap-5">
              <Text asChild size="xl">
                <p>Mouse Gamer Logitech G203 Lightsync Rgb</p>
              </Text>
              <Text asChild size="xl" textColor="300">
                <p>R$99.99</p>
              </Text>
              <Button>
                <button type="button">
                  Comprar
                </button>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 flex items-center gap-8 ">
            <img src={ gabineteImg } alt="gabinete" className="w-5/12 p-7 border rounded-2xl" />
            <div className="flex flex-col justify-around w-4/12 gap-5">
              <Text asChild size="xl">
                <p>Carbide Series SPEC-OMEGA RGB – Branco </p>
              </Text>
              <Text asChild size="xl" textColor="300">
                <p>R$1371,99</p>
              </Text>
              <Button>
                <button type="button">
                  Comprar
                </button>
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-5 flex items-center gap-8">
            <img src={ tecladoImg } alt="teclado" className="w-5/12 p-7 border rounded-2xl" />
            <div className="flex flex-col justify-around w-4/12 gap-5">
              <Text asChild size="xl">
                <p>K70 PRO MINI WIRELESS 60%</p>
              </Text>
              <Text asChild size="xl" textColor="300">
                <p>R$1887.99</p>
              </Text>
              <Button>
                <button type="button">
                  Comprar
                </button>
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderProducts;
