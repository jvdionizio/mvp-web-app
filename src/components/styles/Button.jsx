import React from 'react'
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

function Button({ children }) {
  return (
    <Slot
      className={clsx( 
        'px-12',
        'py-2',
        'text-white-smoked',
        'rounded-2xl',
        'bg-purple-500',
        'tracking-tighter',
        'transition-colors',        
        'hover:bg-purple-300',
       )}
    >
      {children}
    </Slot>
  )
}

export default Button
