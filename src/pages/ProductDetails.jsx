import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Text from '../components/styles/Text';
import Footer from '../components/Footer';
import Context from '../context/Context';
import Header from '../components/Header';

function ProductDetails() {
  const { allProducts } = useContext(Context);
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[2];
  const id = Number(pathName);
  const product = allProducts[id - 1];
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <div className="w-full mt-72 flex flex-col">
        {
          product && (
            <Text asChild>
              <p>
                {product.name}
              </p>
            </Text>
          )
        }
      </div>
      <div className="w-full flex gap-16 m-auto">
        <img
          src={ url }
        />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
