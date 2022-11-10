import React from 'react'
import { Slot } from '@radix-ui/react-slot';

function Heading({ children }) {
  return (
    <Slot className='text-xl font-bold text-purple-900 font-sans '>
      {children}
    </Slot>
  )
}

export default Heading
