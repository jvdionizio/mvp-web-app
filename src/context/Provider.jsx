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
    const productsOnScreenFilterArray = [];
    if (pageName === 'headsets') {
      if (brandFilter.length > 0) {
        brandFilter.forEach((brand) => {
          const filteredProducts = headsets.filter((product) => product.brand === brand);
          console.log(filteredProducts);
          productsOnScreenFilterArray.push(...filteredProducts);
        });
      }
      if (conectorFilter.length > 0) {
        conectorFilter.forEach((conector) => {
          const filteredProducts = headsets.filter((product) => product.conector === conector);
          productsOnScreenFilterArray.push(...filteredProducts);
        });
      }

      if (productsOnScreenFilterArray.length > 0) {
        setProductsOnScreen(productsOnScreenFilterArray);
      } else {
        setProductsOnScreen(headsets);
      }
    }
    if (pageName === 'keyboard' && brandFilter.length > 0) {
      brandFilter.forEach((brand) => {
        const filteredProducts = teclados.filter((product) => product.brand === brand);
        productsOnScreenFilterArray.push(...filteredProducts);
      });

      if (productsOnScreenFilterArray.length > 0) {
        setProductsOnScreen(productsOnScreenFilterArray);
      } else {
        setProductsOnScreen(teclados);
      }
    }
    if (pageName === 'mice' && brandFilter.length > 0) {
      brandFilter.forEach((brand) => {
        const filteredProducts = mouses.filter((product) => product.brand === brand);
        productsOnScreenFilterArray.push(...filteredProducts);
      });

      if (productsOnScreenFilterArray.length > 0) {
        setProductsOnScreen(productsOnScreenFilterArray);
      } else {
        setProductsOnScreen(mouses);
      }
    }
    if (pageName === 'case') {
      if (brandFilter.length > 0) {
        brandFilter.forEach((brand) => {
          const filteredProducts = gabinetes.filter((product) => product.brand === brand);
          productsOnScreenFilterArray.push(...filteredProducts);
        });
      }
      if (casesizeFilter.length > 0) {
        casesizeFilter.forEach((casesize) => {
          const filteredProducts = gabinetes.filter((product) => product.casesize === casesize);
          productsOnScreenFilterArray.push(...filteredProducts);
        });
      }
      if (materialFilter.length > 0) {
        materialFilter.forEach((material) => {
          const filteredProducts = gabinetes.filter((product) => product.material === material);
          productsOnScreenFilterArray.push(...filteredProducts);
        });
      }
      if (sidepanelFilter.length > 0) {
        sidepanelFilter.forEach((sidepanel) => {
          const filteredProducts = gabinetes.filter((product) => product.sidepanel === sidepanel);
          productsOnScreenFilterArray.push(...filteredProducts);
        });
      }

      if (productsOnScreenFilterArray.length > 0) {
        setProductsOnScreen(productsOnScreenFilterArray);
      } else {
        setProductsOnScreen(gabinetes);
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
