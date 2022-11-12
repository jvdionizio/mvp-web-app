/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children, remove, color }, props) {
  return (
    <Slot
      className={ clsx(
        'py-4',
        'px-3',
        'bg-purple-500 rounded',
        'font-bowlby',
        'font-semibold',
        'tracking-tighter',
        {
          'text-purple-900': color === 'black',
          'text-white-smoked': color === 'white',
        },
        'text-sm w-full',
        'transition-colors',
        'hover:bg-purple-300',
        'hover:outline-none',
        {
          'font-sans font-bold px-2 py-3 tracking-wide': remove,
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

Button.defaultProps = {
  asChild: false,
  remove: false,
  color: 'white',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  remove: PropTypes.bool,
  color: PropTypes.string,
};

export default Button;
