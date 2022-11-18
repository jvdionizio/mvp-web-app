/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/Context';
import Checkbox from './styles/Checkbox';
import Text from './styles/Text';

function ConectorFilters() {
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
              htmlFor="USB"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.conector.includes('usb')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      conector: [productsOnScreenFilter.conector
                        .filter((connector) => connector !== 'usb')],
                    })
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      conector: [...productsOnScreenFilter.conector, 'usb'],
                    }))
                }
                id="USB"
                name="USB"
              />
              <Text>
                <p className="px-3">USB</p>
              </Text>
            </label>
            <label
              className="flex py-3 items-center"
              htmlFor="wireless"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.conector.includes('wireless')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      conector: [productsOnScreenFilter.conector
                        .filter((connector) => connector !== 'wireless')],
                    })
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      conector: [...productsOnScreenFilter.conector, 'wireless'],
                    }))
                }
                id="wireless"
                name="wireless"
              />
              <Text>
                <p className="px-3">Wireless</p>
              </Text>
            </label>
            <label
              className="flex py-3 items-center"
              htmlFor="P2"
            >
              <Checkbox
                border
                setCheck={
                  () => (productsOnScreenFilter.conector.includes('p2')
                    ? setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      conector: [productsOnScreenFilter.conector
                        .filter((connector) => connector !== 'p2')],
                    })
                    : setProductsOnScreenFilter({
                      ...productsOnScreenFilter,
                      conector: [...productsOnScreenFilter.conector, 'p2'],
                    }))
                }
                id="P2"
                name="P2"
              />
              <Text>
                <p className="px-3">P2</p>
              </Text>
            </label>
          </div>
        )
      }
    </div>
  );
}

export default ConectorFilters;
