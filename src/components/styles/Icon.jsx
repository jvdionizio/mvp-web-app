import React from 'react'
import { Slot } from '@radix-ui/react-slot';

function Icon({ children }) {
  return (
    <Slot className='w-8 h-8 text-white-smoked hover:text-purple-300'>
      {children}
    </Slot>
  )
}

export default Icon
