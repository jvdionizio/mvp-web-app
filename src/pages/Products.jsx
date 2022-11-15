import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filter from '../components/Filter';

function Products() {
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <div className="z-0 flex flex-col gap-12 my-10">
        <Filter />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
