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
  const title = () => {
    if (pathName === 'headsets') {
      console.log('Entrou no Headsets');
      return 'HEADSETS';
    } if (pathName === 'keyboard') {
      return 'TECLADOS';
    } if (pathName === 'mice') {
      return 'MOUSES';
    } if (pathName === 'case') {
      return 'GABINETES';
    }
  };
  return (
    <div className="w-full bg-white-1000">
      <Header />
      <div className="w-9/12 flex flex-col mt-36 mx-auto">
        <div className="py-12">
          <Heading>
            { title() }
          </Heading>
          <Text textColor="700">
            <p>O melhor audio para você</p>
          </Text>
        </div>
        <div className="w-full flex gap-16">
          <Filter pageName={ pathName } />
          <div
            className="
              w-4/5
              flex flex-wrap
              gap-y-10
              gap-x-10
              "
          >
            {
              // eslint-disable-next-line max-len
              productsOnScreen && productsOnScreen.length ? productsOnScreen.map((product, index) => (
                <ProductsCard
                  key={ index }
                  url={ product.urls[0] }
                  price={ product.value }
                  name={ product.name }
                  id={ product.id }
                />
              )) : (
                <Text textColor="700" asChild>
                  <p>
                    Não encontramos nenhum produto correspondente a sua solicitação
                  </p>
                </Text>
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
