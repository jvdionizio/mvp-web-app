import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from '../components/CategoriesCard';
import Filter from '../components/Filter';

function Products() {
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <div className="flex flex-col gap-12 my-10">
        <Filter />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
