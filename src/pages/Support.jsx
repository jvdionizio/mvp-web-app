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
      <div className="text-center flex
        items-center
        justify-evenly
        flex-col
        py-6">
        <Heading size="lg">
          <h1 className='py-10'>Reembolso e Devoluções</h1>
        </Heading>
        <Text>
          <p className="py-10">
            Clique no link abaixo para mais informações sobre como realizar reembolsos/devoluções 
            dos seus produtos comprados pelo o site da MVP:
          </p>
        </Text>
        <div className="
        bg-purple-300 
        rounded-3xl 
        flex-1 
        py-4 px-3
        flex
        justify-evenly
        w-1/2
        h-full
        mb-20
        " >
          <Text textColor="white" decoration="underline">
            <p>
            Informações sobre reembolsos/devoluções de produtos comprados em mvp.com 
            </p>
          </Text>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Support;
