import React from 'react';

import Logo from '@components/logo';

import './index.scss';

import FilletLogo from './images/logo.svg';

const Header = (): JSX.Element => {
  return (
    <header className="Header">
      <a href="https://fillet.com.br/">
        <Logo src={FilletLogo} alt="Logo Fillet" />
      </a>
    </header>
  );
};

export default Header;
