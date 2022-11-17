/* eslint-disable max-len */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable react-func/max-lines-per-function */
import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import data from '../services/data';

function Provider({ children }) {
  const [products, setProducts] = useState(data);
  const [headsets, setHeadsets] = useState(data.headsets);
  const [teclados, setTeclados] = useState(data.keyboard);
  const [mouses, setMouses] = useState(data.mice);
  const [gabinetes, setGabinetes] = useState(data.case);
  const [allProducts, setAllProducts] = useState([]);
  const [logitech, setLogitech] = useState([]);
  const [redDragon, setRedDragon] = useState([]);
  const [corsair, setCorsair] = useState([]);
  const [hyperX, setHyperX] = useState([]);
  const [productsOnScreen, setProductsOnScreen] = useState([]);
  const [productsOnScreenFilter, setProductsOnScreenFilter] = useState({
    brand: [],
    conector: [],
    casesize: [],
    material: [],
    sidepanel: [],
  });

  const filterProductsOnScreen = (pageName) => {
    const { brand, conector, casesize, material, sidepanel } = productsOnScreenFilter;
    const filteredProducts = products[pageName].filter((product) => {
      const { brands, conectors, casesizes, materials, sidepanels } = product;
      const brandFilter = brand.length === 0 || brand.includes(brands);
      const conectorFilter = conector.length === 0 || conector.includes(conectors);
      const casesizeFilter = casesize.length === 0 || casesize.includes(casesizes);
      const materialFilter = material.length === 0 || material.includes(materials);
      const sidepanelFilter = sidepanel.length === 0 || sidepanel.includes(sidepanels);
      return brandFilter && conectorFilter && casesizeFilter && materialFilter && sidepanelFilter;
    });
    setProductsOnScreen(filteredProducts);
  };

  useEffect(() => {
    setAllProducts([...headsets, ...teclados, ...mouses, ...gabinetes]);
    allProducts.forEach((product) => {
      if (product.brand.toLowerCase() === 'logitech') {
        setLogitech((prevState) => [...prevState, product]);
      }
      if (product.brand.toLowerCase() === 'red dragon') {
        setRedDragon((prevState) => [...prevState, product]);
      } if (product.brand.toLowerCase() === 'corsair') {
        setCorsair((prevState) => [...prevState, product]);
      } if (product.brand.toLowerCase() === 'hyperx') {
        setHyperX((prevState) => [...prevState, product]);
      }
    });
  }, []);

  useEffect(() => {

  }, []);

  const value = useMemo(
    () => ({
      allProducts,
      logitech,
      redDragon,
      corsair,
      hyperX,
      headsets,
      teclados,
      mouses,
      gabinetes,
      products,
      productsOnScreen,
      productsOnScreenFilter,
      filterProductsOnScreen,
      setProductsOnScreenFilter,
      setProductsOnScreen,
      setProducts,
      setHeadsets,
      setTeclados,
      setMouses,
      setGabinetes,
    }),
    [
      allProducts,
      logitech,
      redDragon,
      corsair,
      hyperX,
      headsets,
      teclados,
      mouses,
      gabinetes,
      products,
      productsOnScreen,
      productsOnScreenFilter,
    ],
  );

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
