/* eslint-disable react/jsx-max-depth */
import React from 'react';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Text from './styles/Text';
import EmailBox from './EmailBox';
import Icon from './styles/Icon';

function Footer() {
  return (
    <div className="footer px-7 py-2">
      <hr />
      <div className="flex flex-col w-full items-center gap-16">
        <div className="flex w-full justify-between mt-28">
          <div className="flex gap-4">
            <Icon weight="fill">
                <FacebookLogo />
              </Icon>
            <Link to="/">
              <Icon weight="fill">
                <InstagramLogo />
              </Icon>
            </Link>
            <Link to="/">
              <Icon weight="fill">
                <TwitterLogo />
              </Icon>
            </Link>
          </div>
          <EmailBox />
        </div>
        <Text asChild size="sm" decoration="light">
          <p>©2022 Most Valuable Player. Todos os direitos reservados.</p>
        </Text>
      </div>
    </div>
  );
}

export default Footer;
