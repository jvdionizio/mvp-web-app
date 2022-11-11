import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Home() {
  return (
    <div className="w-screen">
      <Header />
      <Banner />
      <Categories />
    </div>
  );
}

export default Home;
