/* eslint-disable react/jsx-max-depth */
import { CaretRight } from 'phosphor-react';
import React from 'react';
import Checkbox from './styles/Checkbox';
import Text from './styles/Text';
import TextInputIcon from './styles/TextInputIcon';
import TextInputInput from './styles/TextInputInput';
import TextInputRoot from './styles/TextInputRoot';

function EmailBox() {
  return (
    <div className="flex flex-col gap-3 w-7/12">
      <div>
        <TextInputRoot
          htmlFor="email"
        >
          <TextInputInput
            type="email"
            placeholder="DIGITE SEU ENDEREÇO DE E-MAIL"
            id="email"
            name="email"
          />
          <div className="h-full rounded-r-md py-4 px-3 flex items-center bg-cyan-500">
            <TextInputIcon>
              <CaretRight />
            </TextInputIcon>
          </div>
        </TextInputRoot>
      </div>
      <span className="flex">
        <Checkbox />
        <span className='px-3'>
          <Text textColor="900" decoration="light" asChild size="sm">
            <p>
              Sim, quero receber notícias e e-mails sobre produtos. Leia nossa
            </p>
          </Text>
          <Text asChild size="sm" decoration="underline">
            <p>política de privacidade.</p>
          </Text>
        </span>
      </span>
    </div>
  );
}
export default EmailBox;
