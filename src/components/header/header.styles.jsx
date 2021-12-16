import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding-top: 40px;
  height: 120px;
  width: 100%;
  border-bottom:1px solid white;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const MenuContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 20px;
`;
