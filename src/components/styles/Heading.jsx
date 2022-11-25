import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Heading({ size, children, asChild, textColor }) {
  const Comp = asChild ? Slot : 'h2';

  return (
    <Comp
      className={ clsx(
        'font-bold',
        'font-bowlby',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'lg',
        },
        {
          'text-purple-300': textColor === '300',
          'text-purple-500': textColor === '500',
          'text-purple-700': textColor === '700',
          'text-purple-900': textColor === '900',
          'text-white-smoked': textColor === '000',
        },
      ) }
    >
      {children}
    </Comp>
  );
}

Heading.defaultProps = {
  size: 'lg',
  asChild: false,
  textColor: '900',
};

Heading.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  textColor: PropTypes.string,
};
