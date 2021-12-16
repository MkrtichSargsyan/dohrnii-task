import React from 'react';
import {
  Info,
  Line,
  LinesContainer,
  ShowcaseContainer,
  Title,
} from './showcase.styles';

function Showcase() {
  return (
    <ShowcaseContainer>
      <Title>
        No-code <br /> Finance
      </Title>
      <Info>
        Our no-code tools make it easy and simple for anyone to create complex
        automated investment strategies and build powerful datasets to support
        their due diligence process.
      </Info>
      <LinesContainer>
        <Line />
        <Line />
        <Line />
      </LinesContainer>
    </ShowcaseContainer>
  );
}

export default Showcase;
