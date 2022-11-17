import React from 'react';
import BannerSupport from '../components/BannerSupport';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Text from '../components/styles/Text';
import Heading from '../components/styles/Heading';

function Support() {
  return (
    <div className="w-full bg-white-smoked">
      <Header />
      <BannerSupport />
      <div className="text-center py-6">
        <Heading>
          <h1>Reembolsos e devoluções</h1>
        </Heading>
        <Text>
          <p className="py-10">
            Para obter informações sobre reembolsos/devoluções
            para seus produtos da MVP, consulte o seguinte site:
          </p>
        </Text>
        <Text textColor="300" decoration="underline">
          <p className="py-10">
            Informações sobre reembolsos/devoluções de produtos
            comprados em mvp.com
          </p>
        </Text>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
