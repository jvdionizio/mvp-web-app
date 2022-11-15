import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export default function Checkbox() {
  return (
    <CheckboxPrimitive.Root className=" w-5 h-5 p-[2px] bg-white-smoked rounded">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="h-4 w-4 text-purple-900" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
