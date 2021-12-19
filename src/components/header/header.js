import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { HeaderContainer, LogoContainer, MenuContainer } from './header.styles';

function Header({ openSidebar }) {
  return (
    <HeaderContainer>
      <LogoContainer to={'/'}>
        <Logo />
      </LogoContainer>
      <MenuContainer to={'/'}>
        <Menu onClick={() => openSidebar(true)} />
      </MenuContainer>
    </HeaderContainer>
  );
}

export default Header;
