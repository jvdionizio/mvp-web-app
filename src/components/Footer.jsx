import React from 'react';
import Text from './styles/Text';
import EmailBox from './EmailBox';

function Footer() {
  return (
    <div>
      <hr />
      <EmailBox />
      <Text>
        <p>©2022 Most Valuable Player. Todos os direitos reservados.</p>
      </Text>
    </div>
  );
}

export default Footer;
