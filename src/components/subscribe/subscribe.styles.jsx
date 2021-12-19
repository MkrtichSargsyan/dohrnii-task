import styled from 'styled-components';

export const SubscribeContainer = styled.section`
  margin-top: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubscribeTitle = styled.h2`
  font-family: 'Bakbak One', cursive;
  letter-spacing: 6px;
  font-weight: bolder;
  font-size: 41px;
  line-height: 43px;
  text-align: center;
  color: white;
`;

export const SubscribeSubTitle = styled.p`
  margin-top: 20px;
  font-size: 17px;
  color: white;
`;

export const EmailFieldContainer = styled.div`
  margin-top: 25px;
  position: relative;
`;

export const EmailField = styled.input`
  height: 60px;
  width: 335px;
  border-radius: 10px;
  border: 1px solid #ffffff;
  background-color: black;
  font-size: 17px;
  padding: 16px;
  color: white;

  &::placeholder {
    color: white;
  }

  @media (max-width: 408px) {
    width: 280px;
  }
`;

export const EmailIconContainer = styled.div`
  width: 50px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  height: 82%;
  background-color: white;
  position: absolute;
  right: 5px;
  top: 5px;
`;
