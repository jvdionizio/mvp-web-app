import PropTypes from 'prop-types';
import React from 'react';
import Heading from './styles/Heading';
import Text from './styles/Text';

function ProductSlide({ type }) {
  return (
    <div>
      <Heading asChild>
        <h3>
          {type === 'most-sold' ? 'MVPs do Mês' : 'Acabaram de Chegar'}
        </h3>
      </Heading>
      <Text textColor="700" decoration="bold">
        { type === 'most-sold' ? 'Os produtos mais vendidos' : 'Novos lançamentos'}
      </Text>
      <div />
    </div>
  );
}

ProductSlide.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ProductSlide;
