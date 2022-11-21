import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Text from "../components/styles/Text";
import Footer from "../components/Footer";
import Context from "../context/Context";
import Header from "../components/Header";
import { Star } from "phosphor-react";
import Button from "../components/styles/Button";
import { clsx } from 'clsx';

function ProductDetails() {
  const { allProducts } = useContext(Context);
  const { pathname } = useLocation();
  const pathName = pathname.split("/")[2];
  const id = Number(pathName);
  const product = allProducts[id - 1];
  console.log(product);
  const [amount, setAmount] = useState(0);
  function increase(){
    if(amount<20){
      setAmount(amount => amount+1)
    }
  }
  function decrease (){
    if(amount>0){
      setAmount(amount => amount-1)
    }
  }
  return (
    <div className="w-full bg-white">
      <Header />
      {product && (
        <div>
          <div className="w-full mt-72 flex flex-col">
            <div className="flex flex-row">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <Text asChild>
              <p>{product.name}</p>
            </Text>
            <Text asChild>
              <p>{product.value}</p>
            </Text>
            {/*to do disponibilidade e garantia*/}
            <Text asChild>
              <p>Disponibilidade: Imediata</p>
            </Text>
            <Text asChild>
              <p>Garantia: 2 anos</p>
            </Text>
            <Text asChild>
              <p>10x de R$99,99 sem juros ou à vista no PIX 10% OFF</p>
            </Text>
            <div className="flex flex-row items-center">
              <Text asChild>
                <p>Quantidade</p>
              </Text>
              <div className="flex flex-row items-center">
                <Button>
                  <button type="button" onClick={decrease}>-</button>
                </Button>
                <Text>
                  <p>{amount}</p>
                </Text>
                <Button>
                  <button type="button" onClick={increase}>+</button>
                </Button>
              </div>
            </div>
                <button
                  type="button" className={ clsx(
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
                  ) }
                >
                  COMPRAR
                </button>
          </div>
          <div className="w-full flex gap-16 m-auto">
            {/* <img
              src={ product.urls[0] }
            /> */}
          </div>
        </div>
      )}{" "}
      {!product && (
        <div>
          <div className="w-full my-72 flex flex-col text-center text-lg font-semibold">
            <Text asChild>
              <p>Produto não encontrado</p>
            </Text>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default ProductDetails;

// brand: "corsair"
// conector: "usb"
// description: "Escute tudo, de um leve passo a uma retumbante explosão, graças aos drivers de áudio premium em neodímio de alta densidade e 50mm com ajuste personalizado que contam com um amplo intervalo de frequência de 20hz-30.000hz. muito gamers  Com o poderoso software iCUE da CORSAIR, você personaliza as configurações do equalizador de áudio, aproveita som surround 7.1 imersivo, controla o som de retorno e sincroniza a iluminação RGB com todos os periféricos, resfriadores, ventoinhas e outros produtos CORSAIR compatíveis.Um microfone omnidirecional apresenta sua voz com uma clareza excepcional, enquanto uma função articulada para silenciar e um indicador LED integrado do modo 'silenciar' garantem que você saiba quando será ouvido(a), e quando não. "
// evaluation: 4
// id: 1
// name: "Headset gamer premium com som surround 7.1 VOID RGB ELITE USB - Branco"
// urls: (6) ['https://m.media-amazon.com/images/I/61veopbf73L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/719ays1Ji2L._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/717zfz03FkL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71FSJxhkrHL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71BW88xeJAL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/71oMup9oN6L._AC_SL1500_.jpg']
// value: 999.9

function evaluationStars(evaluation) {
  const stars = [];
  for (i = 0; i < evaluation; i++) {
    stars.push(<Star weight="fill" />);
  }
  for (i = 0; i < 5 - evaluation; i++) {
    stars.push(<Star />);
  }
  return stars;
}

{
  /* < Star />
          < Star weight='fill'/> */
}
