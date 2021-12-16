import styled from 'styled-components';

export const LinesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.span`
  width: 70px;
  height: 1px;
  background-color: white;
`;

export const CarouselItem = styled.article`
  background-color: white;
  border: 10px solid black;
  height: 300px;
  color: black;
  padding: 20px;
`;

export const CarouselItemTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const CarouselItemTitle = styled.h2`
  font-weight: 900;
  font-size: 24px;
  line-height: 30px;
  text-transform: capitalize;
`;

export const CarouselItemIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;
