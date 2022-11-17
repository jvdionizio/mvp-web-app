/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { MagnifyingGlass } from 'phosphor-react';
import Heading from './styles/Heading';
import Text from './styles/Text';
import TextInputInput from './styles/TextInputInput';
import TextInputRoot from './styles/TextInputRoot';
import Icon from './styles/Icon';
import supbanner from '../images/supbanner.jpg';

function BannerSupport() {
  return (
    <div>
      <div
        className="
        h-[40rem]
        w-full
        flex
        flex-col
        items-center
        justify-center
        banner-support
        "
      >
        <div>
          <div>
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
    </div>
  );
}
export default BannerSupport;
