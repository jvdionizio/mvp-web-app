import React from 'react';
import PropTypes from 'prop-types';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export default function Text({
  size,
  uppercase,
  textColor,
  children,
  asChild,
  decoration,
  font,
}) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      className={ clsx(
        'font-sans',
        {
          'text-purple-300': textColor === '300',
          'text-purple-500': textColor === '500',
          'text-purple-700': textColor === '700',
          'text-purple-900': textColor === '900',
          'text-white-smoked': textColor === 'white',
        },
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
          'text-2md': size === 'xl',
        },
        {
          'text-decoration-line: underline': decoration === 'underline',
          'font-bold': decoration === 'bold',
          'font-medium': decoration === 'medium',
          'font-semibold': decoration === 'semibold',
        },
        {
          'font-sans': font === 'sans',
          'font-ubuntu': font === 'ubuntu',
        },
        {
          uppercase,
        },
      ) }
    >
      {children}
    </Comp>
  );
}

Text.defaultProps = {
  size: 'md',
  asChild: false,
  textColor: '900',
  decoration: 'none',
  uppercase: false,
  font: 'sans',
};

Text.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  asChild: PropTypes.bool,
  textColor: PropTypes.string,
  decoration: PropTypes.string,
  uppercase: PropTypes.bool,
  font: PropTypes.string,
};
