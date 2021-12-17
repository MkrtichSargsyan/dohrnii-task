import React from 'react';
import { LogoContainer, MenuContainer } from '../header/header.styles';
import {
  SidebarContainer,
  SidebarDataContainer,
  SidebarItem,
  SidebarMenuContainer,
} from './sidebar.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import { SIDEBAR_DATA } from './sidebar-data';

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
      <SidebarDataContainer>
        {SIDEBAR_DATA.map((el, i) => (
          <SidebarItem key={i}>{el}</SidebarItem>
        ))}
      </SidebarDataContainer>
    </SidebarContainer>
  );
}

export default Menu;
