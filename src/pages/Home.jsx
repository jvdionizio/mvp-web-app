import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductSlide from '../components/ProductSlide';

function Home() {
  return (
    <div className="w-screen">
      <Header />
      <Banner />
      <Categories />
      <ProductSlide type="most-sold" />
    </div>
  );
}

export default Home;
