import PropTypes from 'prop-types';
import React from 'react';
import Text from './styles/Text';

function CategoriesCard({ url, name }) {
  return (
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
      <img
        src={ url }
        alt={ `foto de ${name}` }
        className="h-48 w-48 object-contain mb-2"
      />
      <div className="flex flex-col gap-3 w-full">
        <hr />
        <Text asChild uppercase decoration="medium">
          <p className="text-center">{ name }</p>
        </Text>
      </div>
    </div>
  );
}

CategoriesCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoriesCard;
