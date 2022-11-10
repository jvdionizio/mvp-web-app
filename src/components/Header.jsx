import React from 'react'
import logo from '../static/logo.svg';
import { MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react'
import Icon from './styles/Icon';
import Text from './styles/Text';

function Header() {
  return (
    <div
      className='
        bg-purple-700
        px-10
        py-5
        flex
        justify-between
        items-center
      '
    >
      <img alt='logo mpv' src={logo} className='w-36' />
      <div
        className='
          2xl:w-1/3
          xl:w-1/3
          lg:w-1/2
          md:w-1/2
          flex
          w-3/6
          justify-between
        '
      >
        <Text link color="white">
          <p> PRODUTOS </p>
        </Text>
        <Text link color="white">
          <p> MARCAS </p>
        </Text>
        <Text link color="white">
          <p> SUPORTE </p>
        </Text>
      </div>
      <div
        className='
          flex
          gap-3
        '
      >
        <Icon>
          <MagnifyingGlass />
        </Icon>
        <Icon>
          <ShoppingCart />
        </Icon>
        <Icon>
          <UserCircle />
        </Icon>
      </div>
    </div>
  )
}

export default Header
