import React from 'react'
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';

function Text({ children, size, font, color, link, weight }) {
  return (
    <Slot
      className={clsx( 
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        },
        {
          'text-white-smoked': color === 'white',
          'text-purple-900': color === 'black',
        },
        {
          'font-sans': font === 'sans',
          'font-ubuntu': font === 'ubuntu', 
        },
        {
          'font-bold': weight === 'bold',
          'font-medium': weight === 'medium',
          'font-semibold': weight === 'semibold',
          'font-normal': weight === 'regular',
        },
        {
          'hover:text-purple-300 tracking-tighter': link,
        }
       )}
    >
      {children}
    </Slot>
  )
}

Text.defaultProps = {
  size: 'md',
  color: 'black',
  font: 'sans',
  link: false,
  weight: 'regular',
};

export default Text
