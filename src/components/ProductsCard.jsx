/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Text from './styles/Text';
import Button from './styles/Button';

function ProductsCard({ url, name, price, id }) {
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
        w-3/12
        "
    >
      <Link to={ `/product/${id}` }>
        <div className="flex flex-col gap-3">
          <img alt={ `Foto do ${name}` } src={ url } className="px-3 center" />
          <Text asChild decoration="medium">
            <p>{ name }</p>
          </Text>
          <span className="flex flex-nowrap">
            <Text asChild decoration="risco">
              <p>R$</p>
            </Text>
            <Text asChild decoration="risco">
              <p>
                {Number(price).toFixed(2).replace('.', ',')}
              </p>
            </Text>
          </span>
          <span className="flex flex-nowrap">
            <Text asChild textColor="300">
              <p>R$</p>
            </Text>
            <Text asChild textColor="300">
              <p>
                {Number(discount).toFixed(2).replace('.', ',')}
              </p>
            </Text>
          </span>
          <Button asChild rounded>
            <button
              type="button"
            >
              COMPRAR
            </button>
          </Button>
        </div>
      </Link>
    </div>
  );
}

ProductsCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ProductsCard;
