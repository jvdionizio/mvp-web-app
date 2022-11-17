import React from 'react';
import Text from './styles/Text';
import BrandFilters from './BrandFilters';

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
        w-4/12
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
        <hr />
        <BrandFilters />
        <hr />
        <Text asChild decoration="bold">
          <p className="text-left">Conectores</p>
        </Text>
        <div className="flex items-center">

          <Text>
            <p className="px-3">USB</p>
          </Text>
        </div>
        <div className="flex items-center">

          <Text>
            <p className="px-3">Wireless</p>
          </Text>
        </div>
        <div className="flex items-center">

          <Text>
            <p className="px-3">P2</p>
          </Text>
        </div>
        <hr />
        <Text asChild decoration="bold">
          <p className="text-left">Audio</p>
        </Text>
        <div className="flex items-center">

          <Text>
            <p className="px-3">Stereo</p>
          </Text>
        </div>
        <div className="flex items-center">

          <Text>
            <p className="px-3">Suround</p>
          </Text>
        </div>

      </div>
    </div>
  );
}

export default Filter;
