import React from 'react';
import PropTypes from 'prop-types';
import Text from './styles/Text';
import BrandFilters from './BrandFilters';
import FiltersAreas from './FiltersAreas';

function Filter({ pageName }) {
  return (
    <div
      className="
        border-2
        rounded-3xl
        px-3
        py-4
        flex
        flex-col
        w-1/5
        h-full
        items-center
      "
    >
      <div className="flex flex-col gap-3 p-3">
        <Text asChild uppercase decoration="bold">
          <p className="text-left">Filtros</p>
        </Text>
        {
          pageName !== 'case' && (
            <>
              <hr />
              <Text asChild decoration="bold">
                <p className="text-left">Marcas</p>
              </Text>
              <BrandFilters />
            </>
          )
        }
        {
          pageName === 'headsets' && (
            <>
              <hr />
              <Text asChild decoration="bold">
                <p className="text-left">Conectores</p>
              </Text>
              <FiltersAreas filter="conector" />
            </>
          )
        }
        {
          pageName === 'case' && (
            <>
              <hr />
              <Text asChild decoration="bold">
                <p className="text-left">Tamanho</p>
              </Text>
              <FiltersAreas filter="casesize" />
              <hr />
              <Text asChild decoration="bold">
                <p className="text-left">Material</p>
              </Text>
              <FiltersAreas filter="material" />
              <hr />
              <Text asChild decoration="bold">
                <p className="text-left">Painel Lateral</p>
              </Text>
              <FiltersAreas filter="sidepanel" />
            </>
          )
        }
      </div>
    </div>
  );
}

Filter.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Filter;
