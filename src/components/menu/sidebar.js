import React from 'react';
import { LogoContainer, MenuContainer } from '../header/header.styles';
import { SidebarContainer, SidebarMenuContainer } from './sidebar.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

function Menu() {
  return (
    <SidebarContainer>
      <SidebarMenuContainer>
        <LogoContainer to={'/'}>
          <Logo />
        </LogoContainer>
        <MenuContainer to={'/'}>
          <MenuIcon />
        </MenuContainer>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
}

export default Menu;
