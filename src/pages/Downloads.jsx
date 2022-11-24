/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Heading from '../components/styles/Heading';
import Text from '../components/styles/Text';
import corsairsoftware from '../images/softcorsair.jpg';
import hypersoftware from '../images/softhyperx.png';
import logitechsoftware from '../images/softlogitech.png';
import redragonsoftware from '../images/softredragon.png';

function Downloads() {
  return (
    <div className="w-full bg-white-smoked justify-evenly">
      <Header />
      <div
        className="text-center
        pt-52
        items-center
        justify-center
        flex
        "
      >
        <Heading>
          <h1>Downloads dos Softwares</h1>
        </Heading>
      </div>
      <div
        className="
        text-center
        px-5 py-5
        m-16
        items-center
        flex
        border-2
        rounded-3xl
        "
      >
        <div className="flex flex-row items-center justify-evenly p-10">
          <div className="flex flex-col gap-1/2 ">
            <img alt="Logo da Corsair iCUE" src={ corsairsoftware } />
            <Text decoration="bold">
              <p>Corsair iCUE</p>
            </Text>
          </div>
          <div className="flex flex-col w-1/5">
            <img alt="Logo da HyperX NGENUITY" src={ hypersoftware } />
            <Text decoration="bold">
              <p>HyperX NGENUITY</p>
            </Text>
          </div>
          <div className="flex flex-col w-1/5">
            <img alt="Logo da Redragon Software" src={ redragonsoftware } />
            <Text decoration="bold">
              <p>Redragon Software</p>
            </Text>
          </div>
          <div className="flex flex-col">
            <img alt="Logo da Logitech G HUB" src={ logitechsoftware } />
            <Text decoration="bold">
              <p>Logitech G HUB</p>
            </Text>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Downloads;
