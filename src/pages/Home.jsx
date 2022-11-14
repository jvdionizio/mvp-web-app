import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductSlide from '../components/ProductSlide';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <Banner />
      <div className="flex flex-col gap-12 my-10">
        <Categories />
        <ProductSlide type="most-sold" />
        <ProductSlide />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
