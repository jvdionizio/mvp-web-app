import React from 'react';
import Text from './styles/Text';
import TextInputInput from './styles/TextInputInput';
import TextInputRoot from './styles/TextInputRoot';

function EmailBox() {
  return (
    <div>
      <div>
        <TextInputRoot>
          <TextInputInput
            type="email"
            placeholder="DIGITE SEU ENDEREÇO DE E-MAIL"
          />
        </TextInputRoot>
      </div>
      <div>
        <Text>
          <p>Sim, quero receber notícias e e-mails sobre produtos. Leia nossa</p>
          <p>política de privacidade.</p>
        </Text>
      </div>
    </div>
  );
}
export default EmailBox;
