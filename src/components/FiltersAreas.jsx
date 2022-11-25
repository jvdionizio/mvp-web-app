/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Context from '../context/Context';
import Checkbox from './styles/Checkbox';
import Text from './styles/Text';

function FiltersAreas({ filter }) {
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

  const filters = {
    conector: [
      'usb',
      'p2',
      'wireless',
    ],
    casesize: [
      'mid-tower',
      'full-tower',
    ],
    material: [
      'aço',
      'vidro temperado',
    ],
    sidepanel: [
      'acrilico',
      'vidro temperado',
    ],
  };

  return (
    <div>
      {
        productsOnScreenFilter && (
          <div>
            {

              filters[filter].map((item) => (
                <label
                  className="flex py-3 items-center"
                  htmlFor={ item }
                  key={ item }
                >
                  <Checkbox
                    border
                    setCheck={
                      () => (productsOnScreenFilter[filter].includes(item)
                        ? setProductsOnScreenFilter({
                          ...productsOnScreenFilter,
                          [filter]: productsOnScreenFilter[filter]
                            .filter((connector) => connector !== item),
                        })
                        : setProductsOnScreenFilter({
                          ...productsOnScreenFilter,
                          [filter]: [...productsOnScreenFilter[filter], item],
                        }))
                    }
                    id={ item }
                    name={ item }
                  />
                  <Text asChild uppercase>
                    <p className="px-3">{item}</p>
                  </Text>
                </label>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

FiltersAreas.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default FiltersAreas;
