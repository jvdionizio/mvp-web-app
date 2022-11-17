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
  const [headsetFilters, setHeadsetFilters] = useState({
    brand: '',
    conector: '',
  });
  const [keyboardFilters, setKeyboardFilters] = useState({
    brand: '',
  });
  const [miceFilters, setMiceFilters] = useState({
    brand: '',
  });
  const [caseFilters, setCaseFilters] = useState({
    brand: '',
    casesize: '',
    material: '',
    sidepanel: '',
  });

  const filterHeadsets = () => {
    const { brand, conector } = headsetFilters;
    const filteredHeadsets = data.headsets.filter((headset) => {
      if (brand && conector) {
        return headset.brand.toLowerCase() === brand && headset.conector.toLowerCase() === conector;
      }
      if (brand) {
        return headset.brand.toLowerCase() === brand;
      }
      if (conector) {
        return headset.conector.toLowerCase() === conector;
      }
      return true;
    });
    setProductsOnScreen(filteredHeadsets);
  };

  const filterKeyboard = () => {
    const { brand } = keyboardFilters;
    const filteredKeyboard = data.keyboard.filter((keyboard) => {
      if (brand) {
        return keyboard.brand.toLowerCase() === brand;
      }
      return true;
    });
    setProductsOnScreen(filteredKeyboard);
  };

  const filterMice = () => {
    const { brand } = miceFilters;
    const filteredMice = data.mice.filter((mice) => {
      if (brand) {
        return mice.brand.toLowerCase() === brand;
      }
      return true;
    });
    setProductsOnScreen(filteredMice);
  };

  const filterCase = () => {
    const { brand, casesize, material, sidepanel } = caseFilters;
    const filteredCase = data.case.filter((cases) => {
      if (brand && casesize && material && sidepanel) {
        return (
          cases.brand === brand
          && cases.casesize.toLowerCase() === casesize
          && cases.material.toLowerCase() === material
          && cases.sidepanel.toLowerCase() === sidepanel
        );
      }
      if (brand && casesize && material) {
        return (
          cases.brand.toLowerCase() === brand
          && cases.casesize.toLowerCase() === casesize
          && cases.material.toLowerCase() === material
        );
      }
      if (brand && casesize && sidepanel) {
        return (
          cases.brand.toLowerCase() === brand
          && cases.casesize.toLowerCase() === casesize
          && cases.sidepanel.toLowerCase() === sidepanel
        );
      }
      if (brand && material && sidepanel) {
        return (
          cases.brand.toLowerCase() === brand
          && cases.material.toLowerCase() === material
          && cases.sidepanel.toLowerCase() === sidepanel
        );
      }
      if (casesize && material && sidepanel) {
        return (
          cases.casesize.toLowerCase() === casesize
          && cases.material.toLowerCase() === material
          && cases.sidepanel.toLowerCase() === sidepanel
        );
      }
      if (brand && casesize) {
        return cases.brand.toLowerCase() === brand && cases.casesize.toLowerCase() === casesize;
      }
      if (brand && material) {
        return cases.brand.toLowerCase() === brand && cases.material.toLowerCase() === material;
      }
      if (brand && sidepanel) {
        return cases.brand.toLowerCase() === brand && cases.sidepanel.toLowerCase() === sidepanel;
      }
      if (casesize && material) {
        return cases.casesize.toLowerCase() === casesize && cases.material.toLowerCase() === material;
      }
      if (casesize && sidepanel) {
        return cases.casesize.toLowerCase() === casesize && cases.sidepanel.toLowerCase() === sidepanel;
      }
      if (material && sidepanel) {
        return cases.material.toLowerCase() === material && cases.sidepanel.toLowerCase() === sidepanel;
      }
      if (brand) {
        return cases.brand.toLowerCase() === brand;
      }
      if (casesize) {
        return cases.casesize.toLowerCase() === casesize;
      }
      if (material) {
        return cases.material.toLowerCase() === material;
      }
      if (sidepanel) {
        return cases.sidepanel.toLowerCase() === sidepanel;
      }
      return true;
    });
    setProductsOnScreen(filteredCase);
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
    setProductsOnScreen(headsets);
  }, []);

  useEffect(() => {
    filterHeadsets();
    filterCase();
    filterKeyboard();
    filterMice();
  }, [headsetFilters, keyboardFilters, miceFilters, caseFilters]);

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
      headsetFilters,
      keyboardFilters,
      miceFilters,
      caseFilters,
      setCaseFilters,
      setHeadsetFilters,
      setKeyboardFilters,
      setMiceFilters,
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
      headsetFilters,
      keyboardFilters,
      miceFilters,
      caseFilters,
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
