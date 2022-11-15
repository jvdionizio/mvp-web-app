/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MagnifyingGlass, ShoppingCart, UserCircle } from 'phosphor-react';
import logo from '../static/logo.svg';
import Icon from './styles/Icon';
import HeaderBtn from './styles/HeaderBtn';
import SubHeader from './SubHeader';

function Header() {
  const { pathname } = useLocation();
  const pageName = pathname.split('/')[1];
  console.log(pageName);
  const [navBarTransparent, setNavBarTransparent] = useState(pageName !== '');
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
    pageName === '' && changeBackground();
    hideAndShow();
  };

  const navBarStyle = `
    z-50
    fixed
    w-screen
    transition-all
    duration-500
    ease-in-out
    delay-100
    ${showNavBar ? 'top-0 ' : '-top-20 '}
    ${
  navBarTransparent ? 'bg-purple-700' : 'bg-transparent'
}
  `;

  window.addEventListener('scroll', handleScroll);
  return (
    <div
      className={ navBarStyle }
    >
      <div
        className="flex justify-between items-center px-10 pt-2"
      >
        <Link to="/">
          <img alt="logo mpv" src={ logo } className="w-36" />
        </Link>
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
          {
            pageName !== '' && (
              <Link to="/">
                <HeaderBtn selected={ pageName === '' }>
                  <button type="button">
                    HOME
                  </button>
                </HeaderBtn>
              </Link>
            )
          }
          <Link to="/products/headsets">
            <HeaderBtn
              selected
            >
              <button
                type="button"
              >
                PRODUTOS
              </button>
            </HeaderBtn>
          </Link>
          <Link to="/brands">
            <HeaderBtn>
              <button
                type="button"
              >
                MARCAS
              </button>
            </HeaderBtn>
          </Link>
          <Link to="/support">
            <HeaderBtn>
              <button
                type="button"
              >
                SUPORTE
              </button>
            </HeaderBtn>
          </Link>
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
      {pageName !== '' && <SubHeader />}
    </div>
  );
}

export default Header;
