import React from 'react';
import CategoriesCard from './CategoriesCard';
import Heading from './styles/Heading';
import headsetImg from '../images/cate.headset.png';
import mouseImg from '../images/cate.mouse.png';
import tecladoImg from '../images/cate.teclado.png';
import gabineteImg from '../images/cate.gabinete.png';
import Text from './styles/Text';
import LogoRedragon from '../images/logoredragon.png';

function ProductsCard() {
  return (
    <div
      className="
        border-2
        rounded-3xl
        px-3
        py-4
        flex
        flex-row
        justify-between
        items-center
        my-16
      "
    >
      <div className="flex flex-col gap-3">
        <img alt="Logo Redragon" src={ headsetImg } className="2/3 px-3 center" />
        <Text asChild decoration="medium">
          <p className="text-center">HyperX Cloud Orbit S - Headset gamer</p> 
        </Text>
        <Text>
          <p className='px-3'>R$ 3176,46</p>
        </Text>
        <Text textColor={300}>
          <p className='px-3'>R$ 1399,99</p>
        </Text>
      </div>
    </div>
  );
}

export default ProductsCard;
