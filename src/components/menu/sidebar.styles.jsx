import styled from 'styled-components';

export const SidebarContainer = styled.section`
  position: absolute;
  height: 836px;
  left: 0;
  right: 0;
  /* top: -9px; */
  z-index: 100;
  background: linear-gradient(
    168.57deg,
    rgba(61, 58, 65, 0.06) -15.67%,
    rgba(8, 2, 34, 0.24) 105.87%
  );
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  box-sizing: border-box;
  backdrop-filter: blur(80px);
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SidebarDataContainer = styled.div`
  margin-top: 275px;
  padding: 0 45px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const SidebarItem = styled.p`
  text-align: end;
  font-family: 'Bakbak One', cursive;
  letter-spacing: 4px;
  width: 230px;
  font-weight: 900;
  font-size: 30px;
  line-height: 28px;
  text-align: right;
  margin-bottom: 40px;
`;
