import React from 'react';
import PropTypes from 'prop-types';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import clsx from 'clsx';

export default function Checkbox({ border, setCheck, id, name }) {
  return (
    <CheckboxPrimitive.Root
      className={ clsx(
        'w-5',
        'h-5',
        'p-[2px]',
        'bg-white-smoked',
        'rounded',
        {
          'border border-black': border,
        },
      ) }
      onCheckedChange={ () => setCheck() }
      id={ id }
      name={ name }
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-4 w-4 text-purple-900" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

Checkbox.defaultProps = {
  border: false,
};

Checkbox.propTypes = {
  border: PropTypes.bool,
  setCheck: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
