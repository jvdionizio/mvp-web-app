/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

function Button({ children, remove, color, bgColor, rounded }, props) {
  return (
    <Slot
      className={ clsx(
        'py-4',
        'px-3',
        {
          rounded: rounded === false,
          'rounded-3xl': rounded === true,
        },
        'font-bowlby',
        'font-semibold',
        'tracking-tighter',
        {
          'text-purple-900': color === 'black',
          'text-white-smoked': color === 'white',
        },
        {
          'bg-orange-500': bgColor === 'orange',
          'bg-blue-500': bgColor === 'blue',
          'bg-purple-500': bgColor === 'purple',
        },
        'text-sm w-full',
        'transition-colors',
        {
          'hover:bg-purple-300': bgColor === 'purple',
          'hover:bg-orange-300': bgColor === 'orange',
          'hover:bg-blue-300': bgColor === 'blue',
        },
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
  bgColor: 'purple',
  rounded: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  remove: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Button;
