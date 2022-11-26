import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Text from "../components/styles/Text";
import Footer from "../components/Footer";
import Context from "../context/Context";
import Header from "../components/Header";
import { Star } from "phosphor-react";
import Button from "../components/styles/Button";
import { clsx } from "clsx";

function ProductDetails() {
  const { allProducts } = useContext(Context);
  const { pathname } = useLocation();
  const pathName = pathname.split("/")[2];
  const id = Number(pathName);
  const product = allProducts[id - 1];
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
        <div className="flex flex-row w-auto mt-36 mx-32 wx-52 wy-11">
          <div
            className="
          border-2
          rounded-3xl
          px-3
          py-4
          m-10
        "
          >
            <img className="" src={product.urls[0]} />
          </div>
          <span className="w-full mt-16">
            <div className="w-full flex flex-col">
              <div className="flex flex-row"></div>
              <Text asChild>
                <p className="text-md font-semibold p-2">{product.name}</p>
              </Text>
              <Text asChild>
                <p className="text-purple-300 font-semibold text-lg p-2">
                  R${product.value}
                </p>
              </Text>
              {/*to do disponibilidade e garantia*/}
              <div className="flex flex-col">
                <Text asChild>
                  <p className="font-ubuntu font-light">Disponibilidade: Imediata</p>
                </Text>
                <Text asChild>
                  <p className="pt-2 pb-2">Garantia: 2 anos</p>
                </Text>
              </div>
              <Text asChild>
                <p>10x de R$99,99 sem juros ou à vista no PIX 10% OFF</p>
              </Text>
              <div className="flex flex-row items-center p-2 border-">
                <Text asChild>
                  <p>Quantidade</p>
                </Text>
                <div className="flex flex-row items-center bg-yellow">
                  <Button>
                    <button type="button" onClick={decrease}>
                      -
                    </button>
                  </Button>
                  <Text>
                    <p>{amount}</p>
                  </Text>
                  <Button>
                    <button className="bg-white" type="button" onClick={increase}>
                      +
                    </button>
                  </Button>
                </div>
              </div>
              <button
                type="button"
                className={clsx(
                  "py-4",
                  "px-3",
                  "bg-cyan-500 rounded",
                  "font-bowlby",
                  "font-semibold",
                  "tracking-tighter",
                  "text-white-smoked",
                  "text-sm w-full",
                  "transition-colors",
                  "hover:bg-cyan-300",
                  "hover:outline-none",
                  "w-36",
                  "h-12"
                )}
              >
                COMPRAR
              </button>
            </div>
          </span>
          <div className="w-full flex gap-16 m-auto"></div>
        </div>
      )}{" "}
      {!product && (
        <div>
          <div className="w-full my-72 flex flex-col text-center text-lg font-semibold">
            <p>Produto não encontrado</p>
          </div>
        </div>
      )}
      <div className="flex flex-col w-full mx-32">
        <Text asChild>
          <p>DETALHES</p>
        </Text>
        <Text asChild>{/*<p>{product.description}</p>*/}</Text>
      </div>
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

{
  /* < Star />
          < Star weight='fill'/> */
}
