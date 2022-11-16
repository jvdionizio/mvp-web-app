import React from 'react';
import Text from '../components/styles/Text';
import Heading from '../components/styles/Heading';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import ProductsCard from '../components/ProductsCard';

function Products() {
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <div className='flex flex-col px-5'>
        <div>
          <Heading>
            <h3>HEADSETS</h3>
          </Heading>
          <Text textColor="700">
            <p>O melhor audio para você</p>
          </Text>
        </div>
        <div className="flex row-auto gap-16">
          <Filter />
          <div>
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
          </div>
          <div>
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
          </div>
        </div>
         
      </div>
      <Footer />
      
    </div>
  );
}

export default Products;
