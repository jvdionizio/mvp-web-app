/* eslint-disable max-len */
import React, { useState } from 'react';
import { MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react';
import logo from '../static/logo.svg';
import Icon from './styles/Icon';
import HeaderBtn from './styles/HeaderBtn';

function Header() {
  const [navBarTransparent, setNavBarTransparent] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [position, setPosition] = useState(0);

  const OITENTA = 80;

  const changeBackground = () => (window.scrollY >= OITENTA ? setNavBarTransparent(true) : setNavBarTransparent(false));

  const hideAndShow = () => {
    const positionNow = window.scrollY;
    if (positionNow === 0) {
      setShowNavBar(true);
    }
    if (positionNow > position) {
      setShowNavBar(false);
    }
    if (positionNow < position) {
      setShowNavBar(true);
    }
    setPosition(positionNow);
  };

  const handleScroll = () => {
    changeBackground();
    hideAndShow();
  };

  const navBarStyle = `
    z-50
    px-10
    py-5
    flex
    justify-between
    items-center
    fixed
    w-screen
    transition-all
    ${showNavBar ? 'top-0 ' : '-top-28 '}
    ${
  navBarTransparent ? 'bg-purple-700' : 'bg-transparent'
}
  `;

  window.addEventListener('scroll', handleScroll);
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
  );
}

export default Header;
