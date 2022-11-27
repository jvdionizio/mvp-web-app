/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Star } from 'phosphor-react';
import { clsx } from 'clsx';
import Text from '../components/styles/Text';
import Footer from '../components/Footer';
import Context from '../context/Context';
import Header from '../components/Header';
import Button from '../components/styles/Button';

function ProductDetails() {
  const { allProducts } = useContext(Context);
  const { pathname } = useLocation();
  const pathName = pathname.split('/')[2];
  const id = Number(pathName);
  const product = allProducts.find((item) => item.id === id);
  console.log(product);
  const [amount, setAmount] = useState(0);
  function increase() {
    if (amount < 20) {
      setAmount((amount) => amount + 1);
    }
  }
  function decrease() {
    if (amount > 0) {
      setAmount((amount) => amount - 1);
    }
  }
  return (
    <div className="w-full bg-white">
      <Header />
      {product && (
        <div className="flex flex-row mt-32 mx-32">
          {' '}
          {/* flex flex-row mt-36 mx-32 wx-52 wy-11 */}
          <div
            className="
          border-2
          rounded-3xl
          px-3
          py-4
          m-10
        "
          >
            <img
              className="object-contain"
              alt={ `foto do produto ${product.name}` }
              src={ product.urls[0] }
            />
          </div>
          <span className="w-full mt-16">
            <div className="w- flex flex-col">
              <div className="flex flex-row" />
              <div className="flex flex-row">
                <p className="text-sm pr-2 text-purple-500 pb-2">4 de 5</p>
                <Star size={ 27 } color="#6E55CA" weight="fill" />
                <Star size={ 27 } color="#6E55CA" weight="fill" />
                <Star size={ 27 } color="#6E55CA" weight="fill" />
                <Star size={ 27 } color="#6E55CA" weight="fill" />
                <Star size={ 27 } color="#6E55CA" weight="regular" />
              </div>
              <Text asChild>
                <p className="text-2md font-semibold py-2">{product.name}</p>
              </Text>
              <Text>
                <p className="text-purple-300 font-ubuntu font-semibold text-lg py-2">
                  R$
                  {product.value}
                </p>
              </Text>
              <div className="flex flex-col">
                <Text asChild>
                  <p className="font-ubuntu text-sm pt-2">
                    Disponibilidade: Imediata
                  </p>
                </Text>
                <Text asChild>
                  <p className="pb-3 font-ubuntu">Garantia: 2 anos</p>
                </Text>
              </div>
              <Text asChild>
                <p>10x de R$99,99 sem juros ou à vista no PIX 10% OFF</p>
              </Text>
              <div className="flex flex-row items-center">
                <Text asChild>
                  <p>Quantidade</p>
                </Text>
                <div className="flex flex-row items-center">
                  <div>
                    <Button asChild color="black" bgColor="transparent">
                      <button type="button" onClick={ decrease }>
                        -
                      </button>
                    </Button>
                  </div>
                  <div className="text-center">
                    <p>{amount}</p>
                  </div>
                  <Button asChild color="black" bgColor="transparent">
                    <button type="button" onClick={ increase }>
                      +
                    </button>
                  </Button>
                </div>
              </div>
              <button
                type="button"
                className={ clsx(
                  'py-4',
                  'px-3',
                  'bg-cyan-500 rounded',
                  'font-bowlby',
                  'font-semibold',
                  'tracking-tighter',
                  'text-white-smoked',
                  'text-sm w-full',
                  'transition-colors',
                  'hover:bg-cyan-300',
                  'hover:outline-none',
                  'w-36',
                  'h-12',
                  'justify-betweenn',
                  'items-center',
                ) }
              >
                COMPRAR
              </button>
            </div>
          </span>
          <div className="w-full flex gap-16 m-auto" />
        </div>
      )}
      {' '}
      {!product && (
        <div>
          <div className="w-full my-72 flex flex-col text-center text-lg font-semibold">
            <p>Produto não encontrado</p>
          </div>
        </div>
      )}
      {product && (
        <div className="flex flex-col w-5/6 mx-32 pb-8">
          <Text asChild>
            <p className="pb-2 underline">DETALHES</p>
          </Text>
          <div className="bg-gray-100">
            <Text asChild>
              <p>{product.description}</p>
            </Text>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProductDetails;
