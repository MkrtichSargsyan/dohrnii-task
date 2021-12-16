import styled from 'styled-components';

export const ShowcaseContainer = styled.section`
  border: 1px;
  padding: 65px;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 42px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Bakbak One', cursive;
  letter-spacing: 4px;
  margin-bottom: 60px;
`;

export const Info = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 50px;
`;

export const LinesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.span`
  width: 70px;
  height: 1px;
  background-color: white;
`;
