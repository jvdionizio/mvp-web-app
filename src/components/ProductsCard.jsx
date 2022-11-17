import React from 'react';
import PropTypes from 'prop-types';
import Text from './styles/Text';

function ProductsCard({ url, name, price }) {
  const DEZ = 10;
  const discount = price - (price / DEZ);
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
        w-5/12
      "
    >
      <div className="flex flex-col gap-3">
        <img alt={ `Foto do ${name}` } src={ url } className="px-3 center" />
        <Text asChild decoration="medium">
          <p>{ name }</p>
        </Text>
        <span className="flex flex-nowrap">
          <Text>
            <p>R$</p>
          </Text>
          <Text>
            <p>
              {Number(price).toFixed(2).replace('.', ',')}
            </p>
          </Text>
        </span>
        <span className="flex flex-nowrap">
          <Text>
            <p>R$</p>
          </Text>
          <Text>
            <p>
              {Number(discount).toFixed(2).replace('.', ',')}
            </p>
          </Text>
        </span>
      </div>
    </div>
  );
}

ProductsCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductsCard;
