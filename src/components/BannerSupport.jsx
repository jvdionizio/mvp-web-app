/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import Heading from './styles/Heading';
import Text from './styles/Text';
import TextInputInput from './styles/TextInputInput';
import TextInputRoot from './styles/TextInputRoot';
import Icon from './styles/Icon';

function BannerSupport() {
  return (
    <div>
      <div
        className="
        w-full
        h-[32rem]
        flex
        flex-col
        items-center
        justify-center
        banner-support
        "
      >
        <div>
          <div className="w-full">
            <Heading textColor="000">
              Bem-vindo ao suporte da MVP
            </Heading>
            <div className="h-full rounded-r-md py-4 px-3 flex items-center">
              <TextInputRoot
                htmlFor="email"
              >
                <TextInputInput
                  placeholder="Coloque aqui seu produto"
                />
                <div
                  className="h-full rounded-r-md py-4 px-3 flex items-center bg-purple-500"
                >
                  <Icon>
                    <MagnifyingGlass />
                  </Icon>
                </div>
              </TextInputRoot>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <Text decoration="semibold" size="lg">
          <p className="py-5">Informações sobre reembolsos e devoluções</p>
        </Text>
        <Text>
          <p className="py-5">
            Para obter informações sobre reembolsos/devoluções
            para seus produtos da MVP, consulte o seguinte site:
          </p>
        </Text>
        <Text textColor="300" decoration="underline">
          <p className="py-5">
            Informações sobre reembolsos/devoluções de produtos
            comprados em mvp.com
          </p>
        </Text>
      </div>
    </div>
  );
}
export default BannerSupport;
