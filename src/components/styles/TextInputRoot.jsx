/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { clsx } from 'clsx';

function TextInputRoot({ children, error }, props) {
  return (
    <label
      className={ clsx(
        'flex',
        'items-center',
        'gap-3',
        'h-12',
        'rounded',
        'bg-white-1000',
        'w-full',
        'ring-2',
        'ring-gray-100',
        {
          'ring-red': error,
        },
        'focus-within:ring-2',
        'focus-within:ring-yellow-500',
      ) }
      { ...props }
    >
      {children}
    </label>
  );
}

TextInputRoot.displayName = 'TextInput.Root';

TextInputRoot.defaultProps = {
  error: false,
};

TextInputRoot.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

export default TextInputRoot;
