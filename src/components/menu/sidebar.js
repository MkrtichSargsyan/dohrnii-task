import React from 'react';
import { LogoContainer, MenuContainer } from '../header/header.styles';
import {
  SidebarButton,
  SidebarButtonContainer,
  SidebarButtonText,
  SidebarContainer,
  SidebarDataContainer,
  SidebarItem,
  SidebarMenuContainer,
} from './sidebar.styles';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as ClosingIcon } from '../../assets/x.svg';

import { SIDEBAR_DATA } from './sidebar-data';

function Sidebar({ isActive, closeSidebar }) {
  return (
    <SidebarContainer active={isActive}>
      <SidebarMenuContainer>
        <LogoContainer to={'/'}>
          <Logo />
        </LogoContainer>
        <MenuContainer>
          <ClosingIcon
            onClick={() => {
              closeSidebar(false);
            }}
          />
        </MenuContainer>
      </SidebarMenuContainer>
      <SidebarDataContainer>
        {SIDEBAR_DATA.map((el, i) => (
          <SidebarItem key={i}>{el}</SidebarItem>
        ))}
      </SidebarDataContainer>
      <SidebarButtonContainer>
        <SidebarButton>
          <SidebarButtonText>INVESTORS DASHBOARD</SidebarButtonText>
        </SidebarButton>
      </SidebarButtonContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
