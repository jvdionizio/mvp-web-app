/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/Context';
import Checkbox from './styles/Checkbox';
import LogoCorsair from '../images/logocorsair.svg.png';
import LogoLogitech from '../images/logologitech.svg.png';
import LogoHyperX from '../images/logohyperx.png';
import LogoRedragon from '../images/logoredragon.png';

function BrandFilters() {
  const {
    productsOnScreenFilter,
    setProductsOnScreenFilter,
    filterProductsOnScreen,
  } = useContext(Context);

  const { pathname } = useLocation();
  const pageName = pathname.split('/')[2];

  useEffect(() => {
    filterProductsOnScreen(pageName);
  }, [productsOnScreenFilter]);

  return (
    <div>
      {
        productsOnScreenFilter && (
          <div>
            <label
              className="flex py-3 items-center"
              htmlFor="corsair"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.brand.includes('corsair')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [productsOnScreenFilter.brand
                        .filter((brand) => brand !== 'corsair')],
                    }, console.log(productsOnScreenFilter))
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand, 'corsair'],
                    }))
                }
                id="corsair"
                name="corsair"
              />
              <img alt="Logo Corsair" src={ LogoCorsair } className="w-1/3 px-3" />
            </label>
            <label
              className="flex py-3 items-center"
              htmlFor="logitech"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.brand.includes('logitech')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand
                        .filter((brand) => brand !== 'logitech')],
                    }, console.log(productsOnScreenFilter))
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand, 'logitech'],
                    }, console.log(productsOnScreenFilter)))
                }
                id="logitech"
                name="logitech"
              />
              <img alt="Logo Logitech" src={ LogoLogitech } className="w-1/3 px-3" />
            </label>
            <label
              className="flex py-3 items-center"
              htmlFor="hyperx"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.brand.includes('hyperx')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand
                        .filter((brand) => brand !== 'hyperx')],
                    }, console.log(productsOnScreenFilter))
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand, 'hyperx'],
                    }, console.log(productsOnScreenFilter)))
                }
                id="hyperx"
                name="hyperx"
              />
              <img alt="Logo HyperX" src={ LogoHyperX } className="w-1/3 px-3" />
            </label>
            <label
              className="flex py-3 items-center"
              htmlFor="redragon"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.brand.includes('redragon')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand
                        .filter((brand) => brand !== 'redragon')],
                    }, console.log(productsOnScreenFilter))
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      brand: [...productsOnScreenFilter.brand, 'redragon'],
                    }, console.log(productsOnScreenFilter)))
                }
                id="redragon"
                name="redragon"
              />
              <img alt="Logo Redragon" src={ LogoRedragon } className="w-1/3 px-3" />
            </label>
          </div>
        )
      }
    </div>
  );
}

export default BrandFilters;
