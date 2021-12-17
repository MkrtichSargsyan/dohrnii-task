import styled from 'styled-components';

export const LinesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px 30px;
`;

export const Line = styled.span`
  width: 70px;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const WhitePaperBtn = styled.button`
margin: 30px auto 0;
  width: 300px;
  height: 53px;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 900;
  font-size: 16px;
`;
