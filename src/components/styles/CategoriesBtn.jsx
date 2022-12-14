/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

function CategoriesBtn({ children, selected }, props) {
  return (
    <Slot
      type="button"
      className={ clsx(
        'py-4',
        'px-3',
        'bg-transparent',
        'font-bowlby',
        'font-semibold',
        'text-sm',
        'tracking-tighter',
        'text-white-smoked',
        'text-sm',
        'uppercase',
        'transition-colors',
        'hover:text-purple-500',
        {
          'text-purple-300': selected,
        },
      ) }
      { ...props }
    >
      {children}
    </Slot>
  );
}

CategoriesBtn.defaultProps = {
  selected: false,
};

CategoriesBtn.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default CategoriesBtn;
