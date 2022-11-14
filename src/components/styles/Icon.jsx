import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

function Icon({ children, weight }) {
  return (
    <Slot
      className={ clsx(
        'w-6',
        'h-6',
        'text-white-smoked',
        {
          'w-9 h-9': weight === 'fill',
        },
        'hover:text-purple-300',
      ) }
      weight={ weight }
    >
      {children}
    </Slot>
  );
}

Icon.displayName = 'Header.Icon';

Icon.defaultProps = {
  weight: 'bold',
};

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  weight: PropTypes.string,
};

export default Icon;
