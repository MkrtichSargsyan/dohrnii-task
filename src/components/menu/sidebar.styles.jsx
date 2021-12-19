import styled, { css } from 'styled-components';

const activeStyle = css`
  left: 0;
  right: 0;
`;

const notActiveStyle = css`
  left: 100%;
  right: -100%;
`;

const makeSidebarActive = (props) => {
  return props.active ? activeStyle : notActiveStyle;
};

export const SidebarContainer = styled.section`
  z-index: 100;
  position: absolute;
  height: 836px;
  padding-top: 30px;
  background: linear-gradient(
    168.57deg,
    rgba(61, 58, 65, 0.06) -15.67%,
    rgba(8, 2, 34, 0.24) 105.87%
  );
  backdrop-filter: blur(80px);
  transition: 1s;

  ${makeSidebarActive}
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SidebarDataContainer = styled.div`
  margin-top: 240px;
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
  font-size: 28px;
  line-height: 28px;
  text-align: right;
  margin-bottom: 35px;
`;

export const SidebarButtonContainer = styled.div`
  margin-top: 100px;
  padding-right: 45px;
  display: flex;
  justify-content: end;
`;

export const SidebarButton = styled.button`
  background-color: transparent;
  width: 170px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const SidebarButtonText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 19px;
  text-align: right;
  color: white;
  padding: 4px;
`;
