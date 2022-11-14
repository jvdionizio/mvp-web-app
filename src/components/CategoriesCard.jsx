import PropTypes from 'prop-types';
import React from 'react';
import Text from './styles/Text';

function CategoriesCard({ url, name }) {
  return (
    <div className='border-2 rounded-3xl px-3 py-4'>
      <img src={ url } alt={ `foto de ${name}` } className='pb-8'/>
      <hr />
      <Text asChild uppercase decoration="medium"><p className='text-center'>{ name }</p></Text>
    </div>
  );
}

CategoriesCard.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CategoriesCard;
