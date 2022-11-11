import React from 'react';
import Text from './styles/Text';

function CategoriesCard(url, name) {
  return (
    <div>
      <img src={ url } alt={ `foto de ${name}` } />
      <hr />
      <Text asChild><p>{ name }</p></Text>
    </div>
  );
}

export default CategoriesCard;
