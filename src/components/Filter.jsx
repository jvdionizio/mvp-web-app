import React from 'react';
import Text from './styles/Text';
import LogoCorsair from '../images/logocorsair.svg.png';
import LogoLogitech from '../images/logologitech.svg.png';
import LogoHyperX from '../images/logohyperx.png';
import LogoRedragon from '../images/logoredragon.png';

function Filter() {
  return (
    <div>
      <div
        className="
        border-2
        rounded-3xl
        px-3
        py-4
        flex
        flex-col
        justify-between
        w-3/12
        items-center
      "
      >
        <div className="flex flex-col gap-3 w-full p-3">
          <Text asChild uppercase decoration="bold">
            <p className="text-left">Filtros</p>
          </Text>
          <hr />
          <Text asChild decoration="bold">
            <p className="text-left">Marcas</p>
          </Text>
          <img alt="Logo Corsair" src={ LogoCorsair } className="w-1/2 lg:w-1/3" />
          <img alt="Logo Logitech" src={ LogoLogitech } className="w-1/2 lg:w-1/3" />
          <img alt="Logo HyperX" src={ LogoHyperX } className="w-1/2 lg:w-1/3" />
          <img alt="Logo Redragon" src={ LogoRedragon } className="w-1/2 lg:w-1/3" />
          <hr />
          <Text asChild decoration="bold">
            <p className="text-left">Conectores</p>
          </Text>
          <hr />
          <Text asChild decoration="bold">
            <p className="text-left">Audio</p>
          </Text>
        </div>
      </div>
    </div>
  );
}
export default Filter;
