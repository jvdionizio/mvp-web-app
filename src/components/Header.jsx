/* eslint-disable max-len */
import React, { useState } from 'react';
import { MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react';
import logo from '../static/logo.svg';
import HeaderIcon from './styles/HeaderIcon';
import HeaderBtn from './styles/HeaderBtn';

function Header() {
  const [navBar, setNavBar] = useState(false);

  const OITENTA = 80;

  const changeBackground = () => (window.scrollY >= OITENTA ? setNavBar(true) : setNavBar(false));

  const navBarStyle = `
    z-50
    px-10
    py-5
    flex
    justify-between
    items-center
    fixed
    w-screen
    transition-colors
    ${
  navBar ? 'bg-purple-700' : 'bg-transparent'
}
  `;

  window.addEventListener('scroll', changeBackground);
  return (
    <div
      className={ navBarStyle }
    >
      <img alt="logo mpv" src={ logo } className="w-36" />
      <div
        className="
          2xl:w-1/2
          xl:w-1/2
          lg:w-1/2
          md:w-1/2
          flex
          w-3/6
          justify-between
        "
      >
        <HeaderBtn>
          <button
            type="button"
            selected
          >
            PRODUTOS
          </button>
        </HeaderBtn>
        <HeaderBtn>
          <button
            type="button"
          >
            MARCAS
          </button>
        </HeaderBtn>
        <HeaderBtn>
          <button
            type="button"
          >
            SUPORTE
          </button>
        </HeaderBtn>
      </div>
      <div
        className="
          flex
          gap-3
        "
      >
        <HeaderIcon>
          <MagnifyingGlass />
        </HeaderIcon>
        <HeaderIcon>
          <ShoppingCart />
        </HeaderIcon>
        <HeaderIcon>
          <UserCircle />
        </HeaderIcon>
      </div>
    </div>
  );
}

export default Header;
