import React from 'react';
import BannerSupport from '../components/BannerSupport';
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
    <div className="w-full bg-white-smoked">
      <Header />
      <BannerSupport />
      <div className='text-center 
      p-8
      items-center 
      justify-center
      flex'>
        <Heading>
          <h1>Downloads dos softwares</h1>
        </Heading>
      </div>
      <div className="
      text-center 
      px-5 py-5
      items-center 
      flex
      ">
        
        <div className='flex flex-row items-center justify-evenly p-10'>
            <div className='flex flex-col gap-1/2 '>
                <img src= { corsairsoftware } />
                <Text decoration= "bold">
                    <p>Corsair iCUE</p>
                </Text>
            </div>
            <div className='flex flex-col w-1/5'>
                <img src= { hypersoftware } />
                <Text decoration= "bold">
                    <p>HyperX NGENUITY</p>
                </Text>
            </div>
            <div className='flex flex-col w-1/5'>
                <img src= { redragonsoftware } />
                <Text decoration= "bold">
                    <p>Redragon Software</p>
                </Text>
            </div>
            <div className='flex flex-col'>
                <img src= { logitechsoftware } />
                <Text decoration= "bold">
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