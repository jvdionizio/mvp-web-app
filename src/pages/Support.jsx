import React from 'react';
import BannerSupport from '../components/BannerSupport';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Support() {
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <BannerSupport />
      <Footer />
    </div>
  );
}

export default Support;
