import PropTypes from 'prop-types';
import React from 'react';
import SliderProducts from './SliderProducts';
import Heading from './styles/Heading';
import Text from './styles/Text';

function ProductSlide({ type }) {
  return (
    <div className="w-11/12 m-auto">
      <div>
        <Heading asChild>
          <h3>
            {type === 'most-sold' ? 'MVPs do Mês' : 'Acabaram de Chegar'}
          </h3>
        </Heading>
        <Text textColor="700" decoration="bold">
          { type === 'most-sold' ? 'Os produtos mais vendidos' : 'Novos lançamentos'}
        </Text>
      </div>
      <div>
        <SliderProducts />
      </div>
    </div>
  );
}

ProductSlide.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProductSlide;
