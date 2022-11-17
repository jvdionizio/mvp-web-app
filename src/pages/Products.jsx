import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../context/Context';
import Text from '../components/styles/Text';
import Heading from '../components/styles/Heading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import ProductsCard from '../components/ProductsCard';

function Products() {
  const {
    products,
    productsOnScreen,
    setProductsOnScreen,
  } = useContext(Context);
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[2];
  useEffect(() => {
    setProductsOnScreen(products[pathName]);
  }, [pathName]);
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <div className="w-11/12 flex flex-col mt-40 m-auto">
        <div>
          <Heading asChild>
            <h3>HEADSETS</h3>
          </Heading>
          <Text textColor="700">
            <p>O melhor audio para você</p>
          </Text>
        </div>
        <div className="w-full flex gap-16">
          <Filter pathName={ pathName } />
          <div className="w-10/12 flex flex-wrap justify-between gap-y-10">
            {
              productsOnScreen && productsOnScreen.map((product, index) => (
                <ProductsCard
                  key={ index }
                  url={ product.urls[0] }
                  price={ product.value }
                  name={ product.name }
                />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
