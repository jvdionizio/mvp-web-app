import React from 'react';
import Text from './styles/Text';
import LogoCorsair from '../images/logocorsair.svg.png';
import LogoLogitech from '../images/logologitech.svg.png';
import LogoHyperX from '../images/logohyperx.png';
import LogoRedragon from '../images/logoredragon.png';
import Checkbox from './styles/Checkbox';



function Filter() {
  return (
      <div
        className="
        border-2
        rounded-3xl
        px-3
        py-4
        flex
        flex-col
        w-1/4
        items-center
      "
      >
        <div className="flex flex-col gap-3 p-3">
          <Text asChild uppercase decoration="bold">
            <p className="text-left">Filtros</p>
          </Text>
          <hr />
          <Text asChild decoration="bold">
            <p className="text-left">Marcas</p>
          </Text>
              <div className='flex py-3 items-center'>
                <Checkbox />
                <img alt="Logo Corsair" src={ LogoCorsair } className="w-1/3 px-3" />
              </div>
              <div className='flex py-3 items-center'>
                <Checkbox />
              <img alt="Logo Logitech" src={ LogoLogitech } className="w-1/3 px-3" />
              </div>
              <div className='flex py-3 items-center'>
                <Checkbox />
              <img alt="Logo HyperX" src={ LogoHyperX } className="w-1/3 px-3" />
              </div>
              <div className='flex py-3 items-center'>
                <Checkbox />
              <img alt="Logo Redragon" src={ LogoRedragon } className="w-1/3 px-3" />
              </div>
          <hr />
          <Text asChild decoration="bold">
            <p className="text-left">Conectores</p>
          </Text>
            <div className='flex items-center'>
              <Checkbox />
              <Text>
                <p className='px-3'>USB</p>
              </Text>
            </div>
            <div className='flex items-center'>
              <Checkbox />
              <Text>
                <p className='px-3'>Wireless</p>
              </Text>
            </div>
            <div className='flex items-center'>
              <Checkbox />
              <Text>
                <p className='px-3'>P2</p>
              </Text>
            </div>
          <hr />
          <Text asChild decoration="bold">
            <p className="text-left">Audio</p>
          </Text>
          <div className='flex items-center'>
              <Checkbox />
              <Text>
                <p className='px-3'>Stereo</p>
              </Text>
            </div>
            <div className='flex items-center'>
              <Checkbox />
              <Text>
                <p className='px-3'>Suround</p>
              </Text>
            </div>
            
        </div>
      </div>
  );
}
export default Filter;
