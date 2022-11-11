/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

function HeaderBtn({ children, selected }, props) {
  return (
    <Slot
      type="button"
      className={ clsx(
        'py-4',
        'px-3',
        'bg-transparent',
        'font-bowlby',
        'font-semibold',
        'text-md',
        'tracking-tighter',
        'text-white-smoked',
        'text-sm',
        'transition-colors',
        {
          'border-b-2': selected,
        },
        {
          'border-purple-300': selected,
        },
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

HeaderBtn.defaultProps = {
  selected: false,
};

HeaderBtn.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool,
};

export default HeaderBtn;
