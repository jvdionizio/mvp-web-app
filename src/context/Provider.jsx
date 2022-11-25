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
    const { brand: brandFilter, conector: conectorFilter, casesize: casesizeFilter, material: materialFilter, sidepanel: sidepanelFilter } = productsOnScreenFilter;
    console.log(brandFilter.length, conectorFilter);
    if (pageName === 'headsets') {
      let filteredProducts = headsets;
      if (brandFilter.length > 0) {
        filteredProducts = headsets.filter((product) => brandFilter.includes(product.brand));
      }
      if (conectorFilter.length > 0) {
        filteredProducts = filteredProducts.filter((product) => conectorFilter.includes(product.conector));
      }
      if (brandFilter.length === 0 && conectorFilter.length === 0) {
        setProductsOnScreen(headsets);
      } else {
        setProductsOnScreen(filteredProducts);
      }
    }
    if (pageName === 'keyboard') {
      let filteredProducts = [];
      if (brandFilter.length > 0) {
        filteredProducts = teclados.filter((product) => brandFilter.includes(product.brand.toLowerCase()));
      }
      if (brandFilter.length === 0) {
        setProductsOnScreen(teclados);
      } else {
        setProductsOnScreen(filteredProducts);
      }
    }
    if (pageName === 'mice') {
      let filteredProducts = [];
      if (brandFilter.length > 0) {
        filteredProducts = mouses.filter((product) => brandFilter.includes(product.brand.toLowerCase()));
      }
      if (brandFilter.length === 0) {
        setProductsOnScreen(mouses);
      } else {
        setProductsOnScreen(filteredProducts);
      }
    }
    if (pageName === 'case') {
      let filteredProducts = [];
      if (brandFilter.length > 0) {
        filteredProducts = gabinetes.filter((product) => brandFilter.includes(product.brand.toLowerCase()));
      }
      if (casesizeFilter.length > 0) {
        filteredProducts = filteredProducts.filter((product) => casesizeFilter.includes(product.casesize));
      }
      if (materialFilter.length > 0) {
        filteredProducts = filteredProducts.filter((product) => materialFilter.includes(product.material));
      }
      if (sidepanelFilter.length > 0) {
        filteredProducts = filteredProducts.filter((product) => sidepanelFilter.includes(product.sidepanel));
      }
      if (brandFilter.length === 0 && casesizeFilter.length === 0 && materialFilter.length === 0 && sidepanelFilter.length === 0) {
        setProductsOnScreen(gabinetes);
      } else {
        setProductsOnScreen(filteredProducts);
      }
    }
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
